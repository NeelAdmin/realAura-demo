"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  identitySchema,
  IdentityFormData,
} from "@/lib/validations/rental.schema";
import { CreditCard, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/forms/Button";
import { Input } from "@/components/forms/Input";
import CommonHeader from "./Common/Header";

interface IdentityFormProps {
  onNext: (data: IdentityFormData) => void;
  defaultValues?: IdentityFormData;
}

export function IdentityForm({ onNext, defaultValues }: IdentityFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IdentityFormData>({
    resolver: yupResolver(identitySchema),
    defaultValues: defaultValues || {},
    mode: "onChange",
  });

  const onSubmit = (data: IdentityFormData) => {
    console.log("Identity data:", data);
    onNext(data);
  };

  return (
    <div className="w-full max-w-8xl mx-auto bg-white rounded-[40px] shadow-sm border border-gray-200 p-6 md:p-12">
      <CommonHeader
        title="Identity Information"
        icon={<CreditCard className="w-6 h-6 text-secondary-end" />}
        iconBgClass="bg-yellow-100"
      />

      <div className="space-y-6">
        <div className="  grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 bg-gray-50 border border-gray-200 rounded-xl p-6">
            <Input
              label="Your Full Name"
              placeholder="Legal Name"
              {...register("fullName")}
              error={errors.fullName?.message}
            />
            <Input
              label="Your Mobile"
              placeholder="+91 00000 00000"
              type="tel"
              {...register("mobile")}
              error={errors.mobile?.message}
            />
          </div>

          <div className="space-y-4 bg-[#faf8f2] border border-[#f5d77d] rounded-xl p-6">
            <Input
              label="Owner's Name"
              placeholder="Legal Name"
              {...register("ownerName")}
              error={errors.ownerName?.message}
            />
            <Input
              label="Owner's Mobile"
              placeholder="+91 00000 00000"
              type="tel"
              {...register("ownerMobile")}
              error={errors.ownerMobile?.message}
            />
          </div>
        </div>

        <div className="space-y-4 rounded-xl p-6 border border-blue-200 bg-blue-50/50">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-[#EAB308]" />
            <h3 className="text-sm font-semibold text-[#111111] uppercase tracking-wide">
              Property Details
            </h3>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:gap-6 gap-4">
              <div className="w-full md:w-[60%]">
                <Input
                  label="Society / Building"
                  placeholder="e.g. Skyline Residencies"
                  {...register("society")}
                  error={errors.society?.message}
                />
              </div>
              <div className="w-full md:w-[40%]">
                <Input
                  label="Unit"
                  placeholder="e.g. 402-B"
                  {...register("unit")}
                  error={errors.unit?.message}
                />
              </div>
            </div>

            <Input
              label="City & Locality"
              placeholder="e.g. Bangalore, Indiranagar"
              {...register("city")}
              error={errors.city?.message}
            />
          </div>
        </div>

        <Button
          type="button"
          onClick={handleSubmit(onSubmit)}
          variant="primary"
          fullWidth
          icon={<ChevronRight className="w-5 h-5" />}
        >
          Continue to Audit
        </Button>
      </div>
    </div>
  );
}
