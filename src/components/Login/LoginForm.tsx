"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/lib/validations/auth.schema";
import Image from "next/image";
import { OTPVerification } from "../auth/OTPVerification";
import { useLoginWithMobileMutation } from "@/services/authApi";
import { RegisterForm } from "@/components/auth/RegisterForm";

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
};

type LoginFormData = {
  phone: string;
  role: "owner" | "tenant" | "referral_owner";
};

const ROLE_OPTIONS = [
  {
    value: "owner",
    label: "Owner",
    apiValue: "OWNER",
  },
  {
    value: "tenant",
    label: "Tenant",
    apiValue: "TENANT",
  },
  {
    value: "referral_owner",
    label: "Referral Owner",
    apiValue: "AFFILIATE",
  },
] as const;


export default function LoginForm({ open, onClose }: LoginModalProps) {
  const [showRegister, setShowRegister] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const [loginWithMobile, { isLoading }] = useLoginWithMobileMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      role: "owner",
    },
  });

  const selectedRole = watch("role");

  const roleForApi =
    ROLE_OPTIONS.find((r) => r.value === selectedRole)?.apiValue;

  const handleLogin = async (data: LoginFormData) => {
    // const roleForApi =
    //   ROLE_OPTIONS.find((r) => r.value === data.role)?.apiValue;

    const response = await loginWithMobile({
      mobile: `${data.phone}`,
      role: roleForApi as any,
    }).unwrap();

    if (response.status === "SUCCESS") {
      setPhoneNumber(`+91${data.phone}`);
      setShowOTP(true);
    }
  };

  if (!open) return null;

  return (
    <>
      {/* LOGIN MODAL */}
      {!showRegister && !showOTP && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md bg-white rounded-xl py-8 px-10">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              ✕
            </button>

            <h2 className="text-[24px] font-medium mb-6">Log in</h2>

            <form
              onSubmit={handleSubmit(handleLogin)}
              className="flex flex-col gap-6"
            >
              <div>
                <label className="text-xs text-gray-600">I am a</label>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  {ROLE_OPTIONS.map((role) => (
                    <label
                      key={role.value}
                      className={`border rounded-md text-xs p-2 text-center cursor-pointer ${selectedRole === role.value ? "border-secondary-end" : ""
                        }`}
                    >
                      <input
                        type="radio"
                        value={role.value}
                        className="sr-only"
                        {...register("role")}
                      />
                      {role.label}
                    </label>

                  ))}
                </div>
              </div>

              <div className="relative h-[45px]">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center">
                  <Image
                    src="/images/flag.png"
                    alt="India"
                    width={20}
                    height={14}
                  />
                  <span className="ml-2">+91</span>
                </div>

                <input
                  {...register("phone")}
                  className="w-full h-full pl-[90px] border rounded-lg"
                  placeholder="Enter Phone Number"
                />
              </div>

              {errors.phone && (
                <p className="text-red-600 text-sm">
                  {errors.phone.message}
                </p>
              )}

              <button
                disabled={isLoading}
                className="h-[45px] bg-gradient-to-r from-secondary-start to-secondary-end text-white rounded-lg"
              >
                {isLoading ? "Sending OTP..." : "Send One Time Password"}
              </button>
            </form>

            <div className="flex items-center gap-2 text-sm mt-4">
              <span>New to Realaura? </span>
              <button
                onClick={() => setShowRegister(true)}
                className="text-secondary-end"
              >
                Create Account
              </button>

            </div>
          </div>
        </div>
      )}

      {/* REGISTER MODAL */}
      {showRegister && (
        <RegisterForm
          open={showRegister}
          onOpenLogin={() => setShowRegister(false)}
          onClose={() => {
            setShowRegister(false);
            onClose();
          }}
        />
      )}

      {/* OTP MODAL */}
      {showOTP && (
        <OTPVerification
          phoneNumber={phoneNumber}
          role={roleForApi as any}
          type="LOGIN"
          onGoBack={() => setShowOTP(false)}
          onSuccess={() => {
            setShowOTP(false);
            onClose();
          }}
        />

      )}
    </>
  );
}
