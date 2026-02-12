"use client";

import { Input } from "@/components/forms/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AppButton } from "@/components/ui/AppButton";

// Yup validation schema
const propertySchema = yup.object().shape({
  propertyName: yup.string().required("Property name is required"),
  bhk: yup.string().required("BHK is required"),
  price: yup.string().required("Rent amount is required"),
  area: yup.string().required("Area is required"),
  deposit: yup.string().required("Security deposit is required"),
  furnishing: yup.string().required("Furnishing is required"),
  floor: yup.string().required("Floor number is required"),
  preferredTenant: yup.string().required("Preferred tenant is required"),
  availableFrom: yup.string().required("Available from date is required"),
  petAllowed: yup.string().required("Pet policy is required"),
  propertyFor: yup.string().required("Property type is required"),
  file: yup.mixed().required("File upload is required"),
});

type FormValues = yup.InferType<typeof propertySchema>;

export default function AddNewPropertyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(propertySchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6 bg-white p-6">
      {/* TWO COLUMN GRID */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Property Name */}
        <Input
          label="Property Name"
          placeholder="Sobha Apartment"
          {...register("propertyName")}
          error={errors.propertyName?.message}
        />

        {/* BHK */}
        <Input label="BHK" as="select" {...register("bhk")} error={errors.bhk?.message}>
          <option value="">Select</option>
          <option value="1 BHK">1 BHK</option>
          <option value="2 BHK">2 BHK</option>
          <option value="3 BHK">3 BHK</option>
        </Input>

        {/* Rent */}
        <Input
          label="Rent Amount"
          type="number"
          placeholder="25000"
          {...register("price")}
          error={errors.price?.message}
        />

        {/* Area */}
        <Input
          label="Area (sqft)"
          type="number"
          placeholder="3500"
          {...register("area")}
          error={errors.area?.message}
        />

        {/* Deposit */}
        <Input
          label="Security Deposit"
          type="number"
          placeholder="25000"
          {...register("deposit")}
          error={errors.deposit?.message}
        />

        {/* Furnishing */}
        <Input
          label="Furnishing"
          as="select"
          {...register("furnishing")}
          error={errors.furnishing?.message}
        >
          <option value="">Select</option>
          <option value="Fully Furnished">Fully Furnished</option>
          <option value="Semi Furnished">Semi Furnished</option>
          <option value="Unfurnished">Unfurnished</option>
        </Input>

        {/* Floor */}
        <Input
          label="Floor Number"
          type="number"
          placeholder="5"
          {...register("floor")}
          error={errors.floor?.message}
        />

        {/* Preferred Tenant */}
        <Input
          label="Preferred Tenant"
          as="select"
          {...register("preferredTenant")}
          error={errors.preferredTenant?.message}
        >
          <option value="">Select</option>
          <option value="Family">Family</option>
          <option value="Bachelor">Bachelor</option>
        </Input>

        {/* Available From */}
        <Input
          label="Available From"
          type="date"
          {...register("availableFrom")}
          error={errors.availableFrom?.message}
        />

        {/* Pet Allowed */}
        <Input
          label="Pets Allowed"
          as="select"
          {...register("petAllowed")}
          error={errors.petAllowed?.message}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </Input>

        {/* Property For */}
        <Input
          label="Property Type"
          as="select"
          {...register("propertyFor")}
          error={errors.propertyFor?.message}
        >
          <option value="">Select</option>
          <option value="Rent">Rent</option>
          <option value="Sale">Sale</option>
        </Input>

        {/* File Upload */}
        <Input label="Upload File" type="file" {...register("file")} error={errors.file?.message} />
      </div>

      {/* BUTTON */}
      <AppButton
        label="Add New Property"
        type="submit"
        className="h-10 w-full text-lg font-semibold text-white"
      />
    </form>
  );
}
