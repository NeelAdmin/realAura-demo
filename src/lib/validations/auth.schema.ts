import * as yup from "yup";

const loginSchema = yup.object({
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number."),
});

const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address."),
});

export { loginSchema, forgotPasswordSchema };
