"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  tenantAuditSchema,
  TenantAuditFormData,
} from "@/lib/validations/rental.schema";
import { Button } from "@/components/forms/Button";
import { Lock } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/forms/Textarea";
import CommonHeader from "./Common/Header";
import { SectionLabel } from "./Common/TitleField";
import { RatingButton } from "./Common/RatingButton";
interface TenantAuditFormProps {
  onBack: () => void;
  onSubmit: (data: TenantAuditFormData) => void;
  defaultValues?: TenantAuditFormData;
}

export function TenantAuditForm({
  onBack,
  onSubmit,
  defaultValues,
}: TenantAuditFormProps) {
  const [selectedRatings, setSelectedRatings] = useState<{
    paymentPunctuality?: string;
    propertyCare?: string;
    communication?: string;
  }>(defaultValues || {});

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TenantAuditFormData>({
    resolver: yupResolver(tenantAuditSchema),
    defaultValues: defaultValues || {},
    mode: "onChange",
  });

  const handleRatingSelect = (
    field: keyof TenantAuditFormData,
    value: string,
  ) => {
    setSelectedRatings((prev) => ({ ...prev, [field]: value }));
    setValue(field, value);
  };

  const handleFormSubmit = (data: TenantAuditFormData) => {
    console.log("Tenant audit data:", data);
    onSubmit(data);
  };

  return (
    <div className="w-full max-w-8xl mx-auto bg-white rounded-[40px] shadow-sm border border-gray-200 p-6 md:p-12">
      <CommonHeader
        title="Reputation Audit"
        description="Please rate the property based on Multiple Grounds"
        onBack={onBack}
      />

      <div className="space-y-6">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <SectionLabel label="Payment Punctuality" />

            <div className="flex flex-col gap-2 sm:flex-row sm:gap-2">
              <RatingButton
                label="GOLD"
                selected={selectedRatings.paymentPunctuality === "GOLD"}
                onClick={() => handleRatingSelect("paymentPunctuality", "GOLD")}
              />
              <RatingButton
                label="SILVER"
                selected={selectedRatings.paymentPunctuality === "SILVER"}
                onClick={() =>
                  handleRatingSelect("paymentPunctuality", "SILVER")
                }
              />
              <RatingButton
                label="BRONZE"
                selected={selectedRatings.paymentPunctuality === "BRONZE"}
                onClick={() =>
                  handleRatingSelect("paymentPunctuality", "BRONZE")
                }
              />
            </div>
          </div>

          {errors.paymentPunctuality && (
            <p className="mt-2 text-sm text-red-600">
              {errors.paymentPunctuality.message}
            </p>
          )}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <SectionLabel label="Property Care" />

            <div className="flex flex-col gap-2 sm:flex-row sm:gap-2">
              <RatingButton
                label="GOLD"
                selected={selectedRatings.propertyCare === "GOLD"}
                onClick={() => handleRatingSelect("propertyCare", "GOLD")}
              />
              <RatingButton
                label="SILVER"
                selected={selectedRatings.propertyCare === "SILVER"}
                onClick={() => handleRatingSelect("propertyCare", "SILVER")}
              />
              <RatingButton
                label="BRONZE"
                selected={selectedRatings.propertyCare === "BRONZE"}
                onClick={() => handleRatingSelect("propertyCare", "BRONZE")}
              />
            </div>
          </div>

          {errors.propertyCare && (
            <p className="mt-2 text-sm text-red-600">
              {errors.propertyCare.message}
            </p>
          )}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <SectionLabel label="Communication" />

            <div className="flex flex-col gap-2 sm:flex-row sm:gap-2">
              <RatingButton
                label="GOLD"
                selected={selectedRatings.communication === "GOLD"}
                onClick={() => handleRatingSelect("communication", "GOLD")}
              />
              <RatingButton
                label="SILVER"
                selected={selectedRatings.communication === "SILVER"}
                onClick={() => handleRatingSelect("communication", "SILVER")}
              />
              <RatingButton
                label="BRONZE"
                selected={selectedRatings.communication === "BRONZE"}
                onClick={() => handleRatingSelect("communication", "BRONZE")}
              />
            </div>
          </div>

          {errors.communication && (
            <p className="mt-2 text-sm text-red-600">
              {errors.communication.message}
            </p>
          )}
        </div>

        <div className="">
          <Textarea
            label="Confidential Remarks"
            placeholder="Briefly describe the experience regarding payments, maintenance, and behavior..."
            rows={4}
            {...register("confidentailDetails")}
            error={errors.confidentailDetails?.message}
          />
        </div>

        <Button
          type="button"
          onClick={handleSubmit(handleFormSubmit)}
          variant="primary"
          fullWidth
          icon={<Lock className="w-5 h-5" />}
        >
          Seal & Verify Ledger
        </Button>
      </div>
    </div>
  );
}
