"use client";

import { useForm } from "react-hook-form";
import { AppButton } from "@/components/ui/AppButton";
import { useEffect, useState } from "react";
import { useVerifyOtpMutation } from "@/services/authApi";
import { useDispatch } from "react-redux";
import { useLazyGetProfileQuery } from "@/services/userApi";
import { setCredentials } from "@/feature/auth/authSlice";
import { showSuccess, showError } from "@/utils/toast";

interface OTPVerificationProps {
  phoneNumber: string;
  role: "OWNER" | "TENANT" | "AFFILIATE" | any;
  type: "LOGIN" | "REGISTER";
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
  onSuccess,
  countdownSeconds = 30,
}: OTPVerificationProps) {
  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
    watch,
  } = useForm<OTPForm>({
    defaultValues: {
      otp: ["", "", "", "", "", ""],
    },
  });

  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const [countdown, setCountdown] = useState(countdownSeconds);
  const [fetchProfile, { isLoading: isProfileLoading }] = useLazyGetProfileQuery();
  const dispatch = useDispatch();

  const otp = watch("otp");

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;

    setValue(`otp.${index}`, value);

    if (value && index < 5) {
      setFocus(`otp.${index + 1}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      setFocus(`otp.${index - 1}`);
    }
  };

  const onSubmit = async (data: OTPForm) => {
    try {
      const code = data.otp.join("");
      if (code.length !== 6) return;
      // 1. First verify the OTP
      const response = await verifyOtp({
        mobile: phoneNumber,
        code,
        type,
        role,
      }).unwrap();
      if (response.status === "SUCCESS" && response.data) {
        showSuccess("OTP verified successfully");
        const { access_token, refresh_token } = response.data;
        // 2. Store tokens
        localStorage.setItem("accessToken", access_token as string);
        localStorage.setItem("refreshToken", refresh_token as string);
        // 3. Set credentials with access token
        dispatch(
          setCredentials({
            accessToken: access_token as string,
            isAuthenticated: true,
          })
        );
        // 4. Fetch user profile using the query
        try {
          const profileResponse = await fetchProfile().unwrap();
          if (profileResponse.status === "SUCCESS" && profileResponse.data) {
            showSuccess("Profile fetched successfully");
            dispatch(
              setCredentials({
                user: profileResponse.data,
                isAuthenticated: true,
              })
            );
          }
        } catch (profileError) {
          console.error("Failed to fetch user profile:", profileError);
          // Even if profile fetch fails, we can still proceed
          dispatch(
            setCredentials({
              isAuthenticated: true,
            })
          );
        }
        // 5. Call success callback
        onSuccess?.();
      }
    } catch (error: any) {
      console.error("OTP verification failed:", error);
      showError(error?.data?.message || "Something went wrong");
    }
  };

  const handleResend = () => {
    setCountdown(countdownSeconds);
    // call resend OTP API here if you have one
  };

  // Auto-focus first OTP box
  useEffect(() => {
    setFocus("otp.0");
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
    <div className="mx-auto w-full max-w-md">
      <div className="mb-6 text-center">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">Verify OTP</h2>
        <p className="text-sm text-gray-600">
          We&apos;ve sent a verification code to
          <span className="font-medium"> {phoneNumber}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* OTP Inputs */}
        <div className="flex justify-center gap-2">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <input
              key={index}
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              className="focus:ring-primary h-12 w-12 rounded-lg border border-gray-300 text-center text-lg focus:border-transparent focus:ring-2"
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
            <p className="text-sm text-gray-500">Resend OTP in {countdown}s</p>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              className="text-primary text-sm font-medium hover:underline"
            >
              Resend OTP
            </button>
          )}
        </div>

        {/* Submit Button */}
        <div className="space-y-3">
          <AppButton
            type="submit"
            label={
              isLoading ? "Verifying..." : isProfileLoading ? "Getting profile..." : "Verify OTP"
            }
            className="from-secondary-start to-secondary-end h-12 w-full rounded-lg bg-gradient-to-r font-medium text-white"
            disabled={isLoading || isProfileLoading}
          />
        </div>
      </form>
    </div>
  );
}
