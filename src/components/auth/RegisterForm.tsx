'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '@/lib/validations/register.schema';
import { AppButton } from '@/components/ui/AppButton';
import { Input } from '@/components/forms/Input';
import { useRegisterUserMutation } from '@/services/authApi';
import { OTPVerification } from './OTPVerification';
import { useState } from 'react';
import LoginForm from '../Login/LoginForm';

interface RegisterFormProps {
  open: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
}

type FormData = {
  name: string;
  email: string;
  mobile: string;
  role: 'tenant' | 'owner' | 'referral_owner';
  tenantType?: 'family' | 'boy_bachelor' | 'girl_bachelor' | 'any';
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


export function RegisterForm({
  open,
  onClose,
  onOpenLogin,
}: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema) as any,
  });

  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const [showOTP, setShowOTP] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);

  const selectedRole = watch('role');
  const isTenant = selectedRole === 'tenant';

  const roleForApi =
    ROLE_OPTIONS.find((r) => r.value === selectedRole)?.apiValue;

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        mobile: `+91${formData.mobile}`,
        role: roleForApi as any,
        tenantType: formData.tenantType
          ? (formData.tenantType.toUpperCase() as
            | 'FAMILY'
            | 'BOY_BACHELOR'
            | 'GIRL_BACHELOR'
            | 'ANY')
          : undefined,
        companyName: formData.companyName || undefined,
      };

      const response = await registerUser(payload).unwrap();

      if (response.status === 'SUCCESS') {
        setPhoneNumber(`+91${formData.mobile}`);
        setShowOTP(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-black/50"
          onClick={onClose}
        />

        <div className="relative w-full max-w-md">
          <div className="w-full max-w-md mx-auto rounded-xl bg-white flex flex-col max-h-[550px] py-6 px-10">
            <h2 className="text-lg font-semibold text-center mb-3 shrink-0">
              Create Account
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col flex-1 overflow-hidden"
            >
              <div className="flex-1 overflow-y-auto space-y-3 px-1 py-2">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    I am a
                  </label>

                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: 'tenant', label: 'Tenant' },
                      { value: 'owner', label: 'Owner' },
                      { value: 'referral_owner', label: 'Referral' },
                    ].map((role, index) => (
                      <div className="space-y-2" key={index}>
                        <Input
                          as="radio"
                          value={role.value}
                          {...register("role")}
                        >
                          {role.label}
                        </Input>
                      </div>
                    ))}
                  </div>
                  {errors.role && (
                    <p className="text-xs text-red-600">
                      {errors.role.message}
                    </p>
                  )}
                </div>

                <Input
                  label="Full Name"
                  {...register('name')}
                  error={errors.name?.message}
                  placeholder="Enter your full name"
                  variant="boxed"
                />

                <Input
                  label="Email Address"
                  type="email"
                  {...register('email')}
                  error={errors.email?.message}
                  placeholder="Enter your email"
                  variant="boxed"
                />

                <Input
                  label="Mobile Number"
                  type="tel"
                  {...register('mobile')}
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
                      {...register('companyName')}
                      error={errors.companyName?.message}
                      placeholder="Enter company name"
                      variant="boxed"
                    />
                  </>
                )}
              </div>

              <div className="pt-3 mt-3 border-t shrink-0 bg-white">
                <AppButton
                  type="submit"
                  label={isLoading ? 'Creating...' : 'Create Account'}
                  className="w-full h-[40px] bg-gradient-to-r from-secondary-start to-secondary-end text-white rounded-md text-sm font-medium"
                  disabled={isLoading}
                />
              </div>
            </form>

            <p className="mt-3 text-center text-xs text-gray-600">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => {
                  onOpenLogin();
                }}
                className="font-medium text-secondary-end hover:underline"
              >
                Sign In
              </button>
            </p>

            {showOTP && (
              <OTPVerification
                phoneNumber={phoneNumber}
                role={roleForApi as any}
                type="REGISTER"
                onGoBack={() => setShowOTP(false)}
                onSuccess={() => {
                  setShowOTP(false);
                  onClose();
                }}
              />
            )}

            {loginOpen && <LoginForm open={loginOpen} onClose={() => setLoginOpen(false)} />}
          </div>
        </div>
      </div>
    </>
  );
}
