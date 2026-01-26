"use client";

import { useState } from "react";
import { IdentityForm } from "./IdentityForm";
import { OwnerAuditForm } from "./OwnerAuditForm";
import { TenantAuditForm } from "./TenantAuditForm";
import {
  IdentityFormData,
  OwnerAuditFormData,
  TenantAuditFormData,
} from "@/lib/validations/rental.schema";
import { SuccessModal } from "./SuccessModal";
import { RENTAL_ROLES } from "@/lib/constants";

interface RoleInformationProps {
  role: "owner" | "tenant";
}

export default function RoleInformation({ role }: RoleInformationProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [identityData, setIdentityData] = useState<IdentityFormData | null>(
    null,
  );
  const [auditData, setAuditData] = useState<
    OwnerAuditFormData | TenantAuditFormData | null
  >(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleIdentitySubmit = (data: IdentityFormData) => {
    setIdentityData(data);
    setStep(2);
  };

  const handleAuditSubmit = (
    data: OwnerAuditFormData | TenantAuditFormData,
  ) => {
    setAuditData(data);
    console.log("Final submission:", {
      identity: identityData,
      audit: data,
      role,
    });
    setShowSuccess(true);
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <>
      <div className="py-8 px-4 md:px-8">
        <div className="min-h-screen bg-gray-100 py-1 px-1 md:py-3 md:px-3">
          {step === 1 && (
            <IdentityForm
              onNext={handleIdentitySubmit}
              defaultValues={identityData || undefined}
            />
          )}
          {step === 2 && role === RENTAL_ROLES.OWNER && (
            <OwnerAuditForm
              onBack={handleBack}
              onSubmit={handleAuditSubmit}
              defaultValues={auditData as OwnerAuditFormData | undefined}
            />
          )}
          {step === 2 && role === RENTAL_ROLES.TENANT && (
            <TenantAuditForm
              onBack={handleBack}
              onSubmit={handleAuditSubmit}
              defaultValues={auditData as TenantAuditFormData | undefined}
            />
          )}
        </div>
      </div>
      <SuccessModal isOpen={showSuccess} transactionId={"#RA-9920-BFX"} />
    </>
  );
}
