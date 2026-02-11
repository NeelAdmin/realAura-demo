"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/lib/validations/auth.schema";
import Image from "next/image";
import { OTPVerification } from "../auth/OTPVerification";
import { useLoginWithMobileMutation } from "@/services/authApi";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { useRouter } from "next/navigation";
import { Input } from "../forms/Input";
import { showSuccess, showError } from "@/utils/toast";
import { XIcon } from "lucide-react";

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
  const router = useRouter();
  const [showRegister, setShowRegister] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const [loginWithMobile, { isLoading }] = useLoginWithMobileMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      role: "owner",
    },
  });

  const selectedRole = watch("role");
  console.log(selectedRole);

  const roleForApi = ROLE_OPTIONS.find((r) => r.value === selectedRole)?.apiValue;
  console.log(roleForApi);
  const handleLogin = async (data: LoginFormData) => {
    try {
      const response = await loginWithMobile({
        mobile: `${data.phone}`,
        role: roleForApi as any,
      }).unwrap();

      if (response.status === "SUCCESS") {
        showSuccess("OTP sent successfully");
        setPhoneNumber(`+91${data.phone}`);
        setShowOTP(true);
      }
    } catch (error: any) {
      showError(error?.data?.message || "Something went wrong");
    }
  };

  if (!open) return null;

  return (
    <>
      {/* LOGIN MODAL */}
      {!showRegister && !showOTP && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl bg-white px-10 py-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[24px] font-medium">Log in</h2>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  reset();
                }}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close"
              >
                <XIcon />
              </button>
            </div>

            <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-6">
              <div>
                <div className="mt-1 grid grid-cols-3 gap-2">
                  {ROLE_OPTIONS.map((role, index) => (
                    <div className="space-y-2" key={index}>
                      <Input as="radio" value={role.value} {...register("role")}>
                        {role.label}
                      </Input>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-[45px]">
                <div className="absolute top-1/2 left-4 flex -translate-y-1/2 items-center">
                  <Image src="/images/flag.png" alt="India" width={20} height={14} />
                  <span className="ml-2">+91</span>
                </div>

                <input
                  {...register("phone")}
                  className="h-full w-full rounded-lg border pl-[90px]"
                  placeholder="Enter Phone Number"
                />
              </div>

              {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}

              <button
                disabled={isLoading}
                className="from-secondary-start to-secondary-end h-[45px] rounded-lg bg-gradient-to-r text-white"
              >
                {isLoading ? "Sending OTP..." : "Send One Time Password"}
              </button>
            </form>

            <div className="mt-4 flex items-center gap-2 text-sm">
              <span>New to Realaura? </span>
              <button
                onClick={() => {
                  setShowRegister(true);
                  reset();
                }}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl bg-white px-10 py-8">
            <OTPVerification
              phoneNumber={phoneNumber}
              role={roleForApi as any}
              type="LOGIN"
              onSuccess={() => {
                setShowOTP(false);
                onClose();
                roleForApi === "AFFILIATE" ? router.push("/") : router.push("/dashboard");
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
