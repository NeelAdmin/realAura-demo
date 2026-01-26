"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/lib/validations/auth.schema";
import * as yup from "yup";
import Image from "next/image";

type LoginFormData = yup.InferType<typeof loginSchema>;

function LoginForm({ onSwitchToForgot }: { onSwitchToForgot: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login data:", data);
  };

  return (
    <div className="flex flex-col gap-[37px]">
      <div className="flex flex-col gap-6">
        <h2 className="text-[24px] leading-[24px] font-medium text-[#111111] font-avenir">
          Log in
        </h2>

        <div className="flex flex-col gap-6">
          <div>
            <div className="relative h-[45px]">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center">
                <Image
                  src="/images/flag.png"
                  alt="India"
                  width={20}
                  height={14}
                  className="object-cover"
                />

                <span className="ml-2 text-sm font-medium text-gray-600">
                  +91
                </span>

                <div className="mx-5 h-[29px] w-px bg-[#DDDDDD]" />
              </div>

              <input
                {...register("phone")}
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Enter Your Phone Number"
                className="
                w-full h-full
                pl-[106px] pr-4
                border border-[#A6A6A6CC] rounded-lg
                text-sm
                focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent
                placeholder:text-[#000000]"
                onInput={(e: any) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
            </div>

            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            className="w-full h-[45px] bg-gradient-to-r from-secondary-start to-secondary-end text-white rounded-lg text-[16px]  font-medium hover:opacity-90 transition-opacity"
          >
            Send One Time Password
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500 text-[20px] md:text-[23px]">
                Or
              </span>
            </div>
          </div>

          <button
            type="button"
            className="w-full h-[45px] border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <Image
              src={"/images/Email-Icon-full-yellow.png"}
              alt="Email"
              width={20}
              height={16}
            />
            Continue with Email
          </button>

          <button
            type="button"
            className="w-full h-[45px] border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <Image
              src="/images/Google.png"
              alt="Google"
              width={24}
              height={24}
            />
            Continue with Google
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between text-sm md:h-[19px] gap-3 md:gap-0 text-[16px] md:text-[16px]">
        <div>
          <span className="text-[#000000] font-normal">New to Realaura ? </span>
          <button className="text-secondary-end font-medium hover:underline text-[16px] md:text-[16px]">
            Create Account
          </button>
        </div>
        <button
          onClick={onSwitchToForgot}
          className="text-[#000000] font-normal text-left md:text-right text-[16px] md:text-[16px]"
        >
          Forgot Account?
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
