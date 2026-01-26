"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ownerAuditSchema,
  OwnerAuditFormData,
} from "@/lib/validations/rental.schema";
import { Button } from "@/components/forms/Button";
import { Lock } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/forms/Textarea";
import CommonHeader from "./Common/Header";
import { SectionLabel } from "./Common/TitleField";
import { RatingButton } from "./Common/RatingButton";

interface OwnerAuditFormProps {
  onBack: () => void;
  onSubmit: (data: OwnerAuditFormData) => void;
  defaultValues?: OwnerAuditFormData;
}

export function OwnerAuditForm({
  onBack,
  onSubmit,
  defaultValues,
}: OwnerAuditFormProps) {
  const [selectedRatings, setSelectedRatings] = useState<{
    issueResolution?: string;
    depositSecurity?: string;
    privacyRespect?: string;
  }>(defaultValues || {});
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<OwnerAuditFormData>({
    resolver: yupResolver(ownerAuditSchema),
    defaultValues: defaultValues || {},
    mode: "onChange",
  });

  const handleRatingSelect = (
    field: keyof OwnerAuditFormData,
    value: string,
  ) => {
    setSelectedRatings((prev) => ({ ...prev, [field]: value }));
    setValue(field, value);
  };

  const handleFormSubmit = (data: OwnerAuditFormData) => {
    console.log("Owner audit data:", data);
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
            <SectionLabel label="Issue Resolution" />

            <div className="flex flex-col gap-2 sm:flex-row sm:gap-2">
              <RatingButton
                label="GOLD"
                selected={selectedRatings.issueResolution === "GOLD"}
                onClick={() => handleRatingSelect("issueResolution", "GOLD")}
              />
              <RatingButton
                label="SILVER"
                selected={selectedRatings.issueResolution === "SILVER"}
                onClick={() => handleRatingSelect("issueResolution", "SILVER")}
              />
              <RatingButton
                label="BRONZE"
                selected={selectedRatings.issueResolution === "BRONZE"}
                onClick={() => handleRatingSelect("issueResolution", "BRONZE")}
              />
            </div>
          </div>

          {errors.issueResolution && (
            <p className="mt-2 text-sm text-red-600">
              {errors.issueResolution.message}
            </p>
          )}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <SectionLabel label="Deposit Security" />

            <div className="flex flex-col gap-2 sm:flex-row sm:gap-2">
              <RatingButton
                label="GOLD"
                selected={selectedRatings.depositSecurity === "GOLD"}
                onClick={() => handleRatingSelect("depositSecurity", "GOLD")}
              />
              <RatingButton
                label="SILVER"
                selected={selectedRatings.depositSecurity === "SILVER"}
                onClick={() => handleRatingSelect("depositSecurity", "SILVER")}
              />
              <RatingButton
                label="BRONZE"
                selected={selectedRatings.depositSecurity === "BRONZE"}
                onClick={() => handleRatingSelect("depositSecurity", "BRONZE")}
              />
            </div>
          </div>

          {errors.depositSecurity && (
            <p className="mt-2 text-sm text-red-600">
              {errors.depositSecurity.message}
            </p>
          )}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <SectionLabel label="Respect for Privacy" />

            <div className="flex flex-col gap-2 sm:flex-row sm:gap-2">
              <RatingButton
                label="GOLD"
                selected={selectedRatings.privacyRespect === "GOLD"}
                onClick={() => handleRatingSelect("privacyRespect", "GOLD")}
              />
              <RatingButton
                label="SILVER"
                selected={selectedRatings.privacyRespect === "SILVER"}
                onClick={() => handleRatingSelect("privacyRespect", "SILVER")}
              />
              <RatingButton
                label="BRONZE"
                selected={selectedRatings.privacyRespect === "BRONZE"}
                onClick={() => handleRatingSelect("privacyRespect", "BRONZE")}
              />
            </div>
          </div>

          {errors.privacyRespect && (
            <p className="mt-2 text-sm text-red-600">
              {errors.privacyRespect.message}
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
