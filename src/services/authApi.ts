import { baseApi } from "./baseApi";

/* -------------------- TYPES -------------------- */

export type RegisterRequest = {
  name: string;
  email: string;
  mobile: string;
  role: "OWNER" | "TENANT" | "REFERRAL_OWNER";
  tenantType?: "FAMILY" | "BOY_BACHELOR" | "GIRL_BACHELOR" | "ANY";
  companyName?: string;
};

export type RegisterResponse = {
  status: "SUCCESS" | "ERROR";
  message: string;
};

/* -------------------- LOGIN -------------------- */

export type LoginRequest = {
  mobile: string;
  role: 'OWNER' | 'TENANT' | 'REFERRAL_OWNER';
};
export type LoginResponse = {
  status: 'SUCCESS' | 'ERROR';
  message: string;
};

/* -------------------- OTP VERIFICATION -------------------- */

export type VerifyOtpRequest = {
  mobile: string;
  code: string;
  type: 'LOGIN' | 'REGISTER' | 'RESET_PASSWORD';
  role: 'OWNER' | 'TENANT' | 'REFERRAL_OWNER';
};

export type VerifyOtpResponse = {
  status: 'SUCCESS' | 'ERROR';
  message: string;
  data: Record<string, unknown>;
};

/* -------------------- API -------------------- */

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (body) => ({
        url: "/api/v1/auth/register",
        method: "POST",
        body,
      }),
    }),

    loginWithMobile: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/api/v1/auth/login/mobile',
        method: 'POST',
        body: {
          mobile: `+91${credentials.mobile}`,
          role: credentials.role
        },
      }),
    }),

    verifyOtp: builder.mutation<VerifyOtpResponse, VerifyOtpRequest>({
      query: (body) => ({
        url: '/api/v1/auth/verify-otp',
        method: 'POST',
        body: {
          mobile: body.mobile,
          code: body.code,
          type: body.type,
          role: body.role
        },
      }),
    }),

  }),
});

export const { 
  useRegisterUserMutation,
  useLoginWithMobileMutation,
  useVerifyOtpMutation 
} = authApi;
