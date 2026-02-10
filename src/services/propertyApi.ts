import { baseApi } from "./baseApi";

export const propertyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProperties: builder.query<any[], void>({
      query: () => "/properties",
    }),

    getPropertyById: builder.query<any, string>({
      query: (id) => `/properties/${id}`,
    }),
  }),
});

export const {
  useGetPropertiesQuery,
  useGetPropertyByIdQuery,
} = propertyApi;
