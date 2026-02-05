import * as yup from 'yup';

export const registerSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  mobile: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
    .required('Mobile number is required'),
  role: yup
    .string()
    .oneOf(['tenant', 'owner', 'referral_owner'] as const, 'Please select a valid role')
    .required('Role is required'),
  // Tenant/Buyer specific fields
  tenantType: yup.string().when('role', {
    is: (role: string) => role === 'tenant',
    then: (schema) =>
      schema
        .oneOf(
          ['family', 'boy_bachelor', 'girl_bachelor', 'any'],
          'Please select a valid tenant type'
        )
        .required('Tenant type is required'),
    otherwise: (schema) => schema.strip(),
  }),
  companyName: yup.string().when('role', {
    is: (role: string) => role === 'tenant',
    then: (schema) => schema.required('Company name is required'),
    otherwise: (schema) => schema.strip(),
  }),
});

export type RegisterFormData = yup.InferType<typeof registerSchema>;
