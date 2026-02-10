'use client';

import { useForm } from 'react-hook-form';
import { AppButton } from '@/components/ui/AppButton';
import { useEffect, useState } from 'react';
import { useVerifyOtpMutation } from '@/services/authApi';
import { useAuth } from '@/contexts/AuthContext';

interface OTPVerificationProps {
  phoneNumber: string;
  role: 'OWNER' | 'TENANT' | 'AFFILIATE';
  type: 'LOGIN' | 'REGISTER';
  onGoBack: () => void;
  onSuccess?: () => void;
  countdownSeconds?: number;
}

type OTPForm = {
  otp: string[];
};

export function OTPVerification({
  phoneNumber,
  role,
  type,
  onGoBack,
  onSuccess,
  countdownSeconds = 30,
}: OTPVerificationProps) {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
    watch,
  } = useForm<OTPForm>({
    defaultValues: {
      otp: ['', '', '', '', '', ''],
    },
  });

  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const [countdown, setCountdown] = useState(countdownSeconds);

  const otp = watch('otp');

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;

    setValue(`otp.${index}`, value);

    if (value && index < 5) {
      setFocus(`otp.${index + 1}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      setFocus(`otp.${index - 1}`);
    }
  };

  const onSubmit = async (data: OTPForm) => {
    try {
      const code = data.otp.join('');

      if (code.length !== 6) return;

      const response = await verifyOtp({
        mobile: phoneNumber,
        code,
        type,
        role,
      }).unwrap();

      if (response.status === 'SUCCESS' && response.data) {
        // Store tokens and update auth state
        login({
          accessToken: response.data.access_token as string,
          refreshToken: response.data.refresh_token as string,
        });
        
        // Call the success callback if provided
        onSuccess?.();
      }
    } catch (error) {
      console.error('❌ OTP verification failed', error);
    }
  };

  const handleResend = () => {
    setCountdown(countdownSeconds);
    // call resend OTP API here if you have one
  };

  // Auto-focus first OTP box
  useEffect(() => {
    setFocus('otp.0');
  }, [setFocus]);

  // Countdown timer
  useEffect(() => {
    if (countdown <= 0) return;

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify OTP</h2>
        <p className="text-sm text-gray-600">
          We've sent a verification code to
          <span className="font-medium"> {phoneNumber}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* OTP Inputs */}
        <div className="flex gap-2">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <input
              key={index}
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              className="w-12 h-12 text-center text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              {...register(`otp.${index}`, {
                required: true,
                onChange: (e) => handleOtpChange(e.target.value, index),
              })}
              onKeyDown={(e) => handleKeyDown(e, index)}
              autoComplete="one-time-code"
            />
          ))}
        </div>

        {/* Resend OTP */}
        <div className="text-center">
          {countdown > 0 ? (
            <p className="text-sm text-gray-500">
              Resend OTP in {countdown}s
            </p>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              className="text-sm font-medium text-primary hover:underline"
            >
              Resend OTP
            </button>
          )}
        </div>

        {/* Submit Button */}
        <div className="space-y-3">
          <AppButton
            type="submit"
            label={isLoading ? 'Verifying...' : 'Verify OTP'}
            className="w-full h-12 bg-gradient-to-r from-secondary-start to-secondary-end text-white rounded-lg font-medium"
            disabled={isLoading}
          />

          <button
            type="button"
            onClick={onGoBack}
            className="w-full h-12 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}