import * as yup from "yup";

export const identitySchema = yup.object({
  fullName: yup.string().required("Full name is required"),
  mobile: yup
    .string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number."),
  ownerName: yup.string().required("Owner's name is required"),
  ownerMobile: yup
    .string()
    .required("Owner's mobile is required")
    .matches(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number."),
  society: yup.string().required("Society/Building name is required"),
  unit: yup.string().required("Unit is required"),
  city: yup.string().required("City & Locality is required"),
});

export const ownerAuditSchema = yup.object({
  issueResolution: yup
    .string()
    .oneOf(["GOLD", "SILVER", "BRONZE"], "Please select an option")
    .required("Issue resolution rating is required"),
  depositSecurity: yup
    .string()
    .oneOf(["GOLD", "SILVER", "BRONZE"], "Please select an option")
    .required("Deposit security rating is required"),
  privacyRespect: yup
    .string()
    .oneOf(["GOLD", "SILVER", "BRONZE"], "Please select an option")
    .required("Privacy respect rating is required"),
  confidentailDetails: yup.string().required("Experience details are required"),
});

export const tenantAuditSchema = yup.object({
  paymentPunctuality: yup
    .string()
    .oneOf(["GOLD", "SILVER", "BRONZE"], "Please select an option")
    .required("Payment punctuality rating is required"),
  propertyCare: yup
    .string()
    .oneOf(["GOLD", "SILVER", "BRONZE"], "Please select an option")
    .required("Property care rating is required"),
  communication: yup
    .string()
    .oneOf(["GOLD", "SILVER", "BRONZE"], "Please select an option")
    .required("Communication rating is required"),
  confidentailDetails: yup
    .string()
    .required("Confidential details are required"),
});

export type IdentityFormData = yup.InferType<typeof identitySchema>;
export type OwnerAuditFormData = yup.InferType<typeof ownerAuditSchema>;
export type TenantAuditFormData = yup.InferType<typeof tenantAuditSchema>;
