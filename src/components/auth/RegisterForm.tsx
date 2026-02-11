"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/lib/validations/register.schema";
import { AppButton } from "@/components/ui/AppButton";
import { Input } from "@/components/forms/Input";
import { useRegisterUserMutation } from "@/services/authApi";
import { OTPVerification } from "./OTPVerification";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "../Login/LoginForm";
import { showSuccess, showError } from "@/utils/toast";
interface RegisterFormProps {
  open: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
}

type FormData = {
  name: string;
  email: string;
  mobile: string;
  role: "tenant" | "owner" | "referral_owner";
  tenantType?: "family" | "boy_bachelor" | "girl_bachelor" | "any";
  companyName?: string;
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

export function RegisterForm({ open, onClose, onOpenLogin }: RegisterFormProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema) as any,
  });

  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const [showOTP, setShowOTP] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);

  const selectedRole = watch("role");
  const isTenant = selectedRole === "tenant";

  const roleForApi = ROLE_OPTIONS.find((r) => r.value === selectedRole)?.apiValue;
  console.log(roleForApi);
  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        mobile: `+91${formData.mobile}`,
        role: roleForApi as any,
        tenantType: formData.tenantType
          ? (formData.tenantType.toUpperCase() as
              | "FAMILY"
              | "BOY_BACHELOR"
              | "GIRL_BACHELOR"
              | "ANY")
          : undefined,
        companyName: formData.companyName || undefined,
      };

      const response = await registerUser(payload).unwrap();

      if (response.status === "SUCCESS") {
        showSuccess("User registered successfully");
        setPhoneNumber(`+91${formData.mobile}`);
        setShowOTP(true);
      }
    } catch (error: any) {
      console.error(error);
      showError(error?.data?.message || "Something went wrong");
    }
  };

  if (!open) return null;

  return (
    <>
      {/* REGISTER MODAL */}
      {!showOTP && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />

          <div className="relative w-full max-w-md">
            <div className="mx-auto flex w-full max-w-md flex-col rounded-xl bg-white px-10 py-6">
              <h2 className="mb-3 shrink-0 text-center text-lg font-semibold">Create Account</h2>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-1 flex-col overflow-hidden"
              >
                <div className="flex-1 space-y-3 overflow-y-auto px-1 py-2">
                  <div>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { value: "tenant", label: "Tenant" },
                        { value: "owner", label: "Owner" },
                        { value: "referral_owner", label: "Referral" },
                      ].map((role, index) => (
                        <div className="space-y-2" key={index}>
                          <Input as="radio" value={role.value} {...register("role")}>
                            {role.label}
                          </Input>
                        </div>
                      ))}
                    </div>
                    {errors.role && <p className="text-xs text-red-600">{errors.role.message}</p>}
                  </div>

                  <Input
                    label="Full Name"
                    {...register("name")}
                    error={errors.name?.message}
                    placeholder="Enter your full name"
                    variant="boxed"
                  />

                  <Input
                    label="Email Address"
                    type="email"
                    {...register("email")}
                    error={errors.email?.message}
                    placeholder="Enter your email"
                    variant="boxed"
                  />

                  <Input
                    label="Mobile Number"
                    type="tel"
                    {...register("mobile")}
                    error={errors.mobile?.message}
                    placeholder="Enter mobile number"
                    variant="boxed"
                  />

                  {isTenant && (
                    <>
                      <Input
                        as="select"
                        label="Tenant Type"
                        {...register("tenantType")}
                        error={errors.tenantType?.message}
                      >
                        <option value="">Select type</option>
                        <option value="family">Family</option>
                        <option value="boy_bachelor">Boy Bachelor</option>
                        <option value="girl_bachelor">Girl Bachelor</option>
                        <option value="any">Any</option>
                      </Input>

                      <Input
                        label="Company Name"
                        {...register("companyName")}
                        error={errors.companyName?.message}
                        placeholder="Enter company name"
                        variant="boxed"
                      />
                    </>
                  )}
                </div>

                <div className="mt-3 bg-white pt-3">
                  <AppButton
                    type="submit"
                    label={isLoading ? "Creating..." : "Create Account"}
                    className="from-secondary-start to-secondary-end h-[40px] w-full rounded-md bg-gradient-to-r text-sm font-medium text-white"
                    disabled={isLoading}
                  />
                </div>
              </form>

              <p className="mt-3 text-center text-xs text-gray-600">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => {
                    onOpenLogin();
                    reset();
                  }}
                  className="text-secondary-end font-medium hover:underline"
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* OTP MODAL */}
      {showOTP && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl bg-white px-10 py-8">
            <OTPVerification
              phoneNumber={phoneNumber}
              role={roleForApi as any}
              type="REGISTER"
              onSuccess={() => {
                setShowOTP(false);
                onClose();
                roleForApi === "AFFILIATE" ? router.push("/") : router.push("/dashboard");
              }}
            />
          </div>
        </div>
      )}

      {loginOpen && <LoginForm open={loginOpen} onClose={() => setLoginOpen(false)} />}
    </>
  );
}
