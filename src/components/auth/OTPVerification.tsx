'use client';

import { useForm } from 'react-hook-form';
import { AppButton } from '@/components/ui/AppButton';
import { useEffect, useState } from 'react';

interface OTPVerificationProps {
  phoneNumber: string;
  onVerify: (otp: string) => Promise<void>;
  onResend: () => Promise<void>;
  onGoBack: () => void;
  countdownSeconds?: number;
}

type OTPForm = {
  otp: string[];
};

export function OTPVerification({
  phoneNumber,
  onVerify,
  onResend,
  onGoBack,
  countdownSeconds = 30,
}: OTPVerificationProps) {
  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    watch,
  } = useForm<OTPForm>({
    defaultValues: {
      otp: ['', '', '', ''],
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(countdownSeconds);

  const otp = watch('otp');

  /* -------------------- HANDLERS -------------------- */

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    setValue(`otp.${index}`, value);

    if (value && index < 3) {
      setFocus(`otp.${index + 1}`);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === 'Backspace') {
      if (otp[index]) {
        setValue(`otp.${index}`, '');
      } else if (index > 0) {
        setFocus(`otp.${index - 1}`);
        setValue(`otp.${index - 1}`, '');
      }
    }
  };

  const onSubmit = async (data: OTPForm) => {
    try {
      setIsSubmitting(true);
      await onVerify(data.otp.join(''));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendClick = async () => {
    await onResend();
    setCountdown(countdownSeconds);
  };

  /* -------------------- EFFECTS -------------------- */

  // Auto-focus first OTP box
  useEffect(() => {
    setFocus('otp.0');
  }, [setFocus]);

  // Countdown timer
  useEffect(() => {
    if (countdown <= 0) return;

    const timer = setTimeout(() => {
      setCountdown((c) => c - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  /* -------------------- UI -------------------- */

  return (
    <div className="w-full max-w-md mx-auto rounded-xl bg-white p-6 flex flex-col">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Verify OTP
        </h2>
        <p className="text-sm text-gray-600">
          We&apos;ve sent a verification code to
          <span className="font-medium"> {phoneNumber}</span>
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* OTP Inputs */}
        <div className="flex gap-2">
          {[0, 1, 2, 3].map((index) => (
            <input
              key={index}
              type="tel"
              inputMode="numeric"
              maxLength={1}
              className="
                w-full h-14
                text-center text-2xl font-semibold
                border border-gray-300 rounded-lg
                focus:outline-none
                focus:ring-2 focus:ring-secondary-start
                focus:border-transparent
              "
              {...register(`otp.${index}`)}
              onChange={(e) => handleOtpChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

        {/* Resend */}
        <div className="text-center text-sm">
          {countdown > 0 ? (
            <span className="text-gray-500">
              Resend OTP in {countdown}s
            </span>
          ) : (
            <button
              type="button"
              onClick={handleResendClick}
              className="font-medium text-secondary-end hover:underline"
            >
              Resend OTP
            </button>
          )}
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <AppButton
            type="submit"
            label={isSubmitting ? 'Verifying...' : 'Verify OTP'}
            className="w-full h-12 bg-gradient-to-r from-secondary-start to-secondary-end text-white rounded-lg font-medium"
            disabled={isSubmitting}
          />

          <button
            type="button"
            onClick={onGoBack}
            className="w-full h-12 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Back to Login
          </button>
        </div>
      </form>
    </div>
  );
}
