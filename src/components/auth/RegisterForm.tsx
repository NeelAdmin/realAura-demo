'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema, RegisterFormData } from '@/lib/validations/register.schema';
import { AppButton } from '@/components/ui/AppButton';
import { Input } from '@/components/forms/Input';
import { useRouter } from 'next/navigation';

interface RegisterFormProps {
    onSwitchToLogin: () => void;
}

type FormData = {
    name: string;
    email: string;
    mobile: string;
    role: 'tenant' | 'owner' | 'referral_owner';
    tenantType?: 'family' | 'boy_bachelor' | 'girl_bachelor' | 'any';
    companyName?: string;
};

export function RegisterForm({ onSwitchToLogin }: RegisterFormProps) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: yupResolver(registerSchema) as any,
    });

    const selectedRole = watch("role");
    const isTenantOrBuyer =
        selectedRole && ["tenant", "buyer"].includes(selectedRole);

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        console.log(data);
    };

    return (
        <div className="w-full max-w-md mx-auto rounded-xl bg-white flex flex-col max-h-[550px]">

            {/* Header */}
            <h2 className="text-lg font-semibold text-center mb-3 shrink-0">
                Create Account
            </h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col flex-1 overflow-hidden"
            >
                {/* ================= SCROLLABLE CONTENT ================= */}
                <div className="flex-1 overflow-y-auto space-y-3 px-1 pt-2 pb-4">


                    {/* Role Selection */}
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">
                            I am a
                        </label>

                        <div className="grid grid-cols-3 gap-2">
                            {[
                                { value: "tenant", label: "Tenant" },
                                { value: "owner", label: "Owner" },
                                { value: "referral_owner", label: "Referral" },
                            ].map((role) => (
                                <label
                                    key={role.value}
                                    className={`flex items-center justify-center rounded-md border px-2 py-1.5 text-xs cursor-pointer ${selectedRole === role.value
                                        ? "border-secondary-end bg-secondary-end/10"
                                        : "border-gray-300"
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        className="sr-only"
                                        value={role.value}
                                        {...register("role")}
                                    />
                                    {role.label}
                                </label>
                            ))}
                        </div>
                    </div>

                    <Input
                        label="Full Name"
                        {...register("name")}
                        error={errors.name?.message}
                        placeholder="Enter your full name"
                        variant="boxed"
                        className="text-sm"
                    />

                    <Input
                        label="Email Address"
                        type="email"
                        {...register("email")}
                        error={errors.email?.message}
                        placeholder="Enter your email"
                        variant="boxed"
                        className="text-sm"
                    />

                    <Input
                        label="Mobile Number"
                        type="tel"
                        {...register("mobile")}
                        error={errors.mobile?.message}
                        placeholder="Enter mobile number"
                        variant="boxed"
                        className="text-sm"
                    />

                    {isTenantOrBuyer && (
                        <>
                            <div>
                                <label className="block text-xs font-medium text-gray-600 mb-1">
                                    Tenant Type
                                </label>
                                <select
                                    {...register("tenantType")}
                                    className="w-full rounded-md border px-3 py-2 text-sm"
                                >
                                    <option value="">Select type</option>
                                    <option value="family">Family</option>
                                    <option value="boy_bachelor">Boy Bachelor</option>
                                    <option value="girl_bachelor">Girl Bachelor</option>
                                    <option value="any">Any</option>
                                </select>
                            </div>

                            <Input
                                label="Company Name"
                                {...register("companyName")}
                                error={errors.companyName?.message}
                                placeholder="Enter company name"
                                variant="boxed"
                                className="text-sm"
                            />
                        </>
                    )}
                </div>

                {/* ================= FIXED FOOTER ================= */}
                <div className="pt-3 mt-3 border-t shrink-0 bg-white">
                    <AppButton
                        type="submit"
                        label={isSubmitting ? "Creating..." : "Create Account"}
                        className="w-full h-[40px] bg-gradient-to-r from-secondary-start to-secondary-end text-white rounded-md text-sm font-medium"
                        disabled={isSubmitting}
                    />
                </div>
            </form>


            {/* Footer */}
            <p className="mt-3 text-center text-xs text-gray-600">
                Already have an account?{" "}
                <button
                    onClick={onSwitchToLogin}
                    className="font-medium text-secondary-end hover:underline"
                >
                    Sign In
                </button>
            </p>
        </div>
    );
}


