"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";
import { AppButton } from "@/components/ui/AppButton";
import { Input } from "@/components/forms/Input";

/* ================= TYPES ================= */

interface FormValues {
  documentType: string;
  accountType: string;
  accountHolderName: string;
  accountNumber: string;
  ifscCode: string;
}

/* ================= VALIDATION ================= */

const schema: yup.ObjectSchema<FormValues> = yup.object({
  documentType: yup.string().required("Document type is required"),
  accountType: yup.string().required("Please select account type"),
  accountHolderName: yup
    .string()
    .required("Account holder name is required"),
  accountNumber: yup
    .string()
    .required("Account number is required")
    .matches(/^\d+$/, "Account number must be numeric"),
  ifscCode: yup
    .string()
    .required("IFSC code is required")
    .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC format"),
});

/* ================= COMPONENT ================= */

export default function DocumentVerificationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const fileRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  const handleFileChange = (file: File | null) => {
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="p-4 bg-white">
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl space-y-3"
    >
      {/* ================= DOCUMENT TYPE ================= */}
      <Input
        label="Document Type"
        as="select"
        {...register("documentType")}
        error={errors.documentType?.message}
      >
        <option value="">Select Document</option>
        <option value="aadhaar">Aadhar Card</option>
        <option value="pan">PAN Card</option>
        <option value="passport">Passport</option>
      </Input>

      {/* ================= FILE UPLOAD ================= */}
      <div>
        <label className="mb-2 block text-sm font-medium uppercase tracking-wide text-gray-700">
          Upload Document
        </label>

        <div
          onClick={() => fileRef.current?.click()}
          className="flex flex-col items-center justify-center gap-2 
                     rounded-xl border-2 border-dashed border-gray-300 
                     bg-gray-50 px-6 py-10 
                     cursor-pointer transition hover:bg-gray-100"
        >
          <UploadCloud className="h-8 w-8 text-yellow-500" />
          <p className="text-sm text-gray-600">
            Click to upload or drag and drop
          </p>

          <span className="rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-white">
            Upload
          </span>

          {fileName && (
            <p className="text-xs text-gray-500 mt-2">
              Selected: {fileName}
            </p>
          )}
        </div>

        <input
          type="file"
          ref={fileRef}
          className="hidden"
          onChange={(e) =>
            handleFileChange(e.target.files?.[0] || null)
          }
        />
      </div>

      {/* ================= ACCOUNT DETAILS ================= */}
      <h3 className="text-sm font-semibold text-gray-700">
        Account Details
      </h3>

      {/* Account Type */}
      <div className="space-y-2">
        <Input
          as="radio"
          value="upi"
          {...register("accountType")}
        >
          UPI / GPay / PhonePe / Paytm
        </Input>

        <Input
          as="radio"
          value="bank"
          {...register("accountType")}
        >
          Bank Account
        </Input>

        {errors.accountType && (
          <p className="text-xs text-red-600">
            {errors.accountType.message}
          </p>
        )}
      </div>

      {/* Account Holder Name */}
      <Input
        label="Account Holder Name"
        placeholder="Enter account holder name"
        {...register("accountHolderName")}
        error={errors.accountHolderName?.message}
      />

      {/* Account Number */}
      <Input
        label="Account Number"
        placeholder="Enter account number"
        {...register("accountNumber")}
        error={errors.accountNumber?.message}
      />

      {/* IFSC Code */}
      <Input
        label="IFSC Code"
        placeholder="Enter IFSC code"
        {...register("ifscCode")}
        error={errors.ifscCode?.message}
      />

      {/* Submit */}
      <AppButton
        label="Submit"
        type="submit"
        className="h-11 w-full text-base font-semibold text-white"
      />
    </form>
    </div>
  );
}
