// In src/services/userApi.ts
import { baseApi } from './baseApi';

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query<any, void>({
            query: () => '/api/v1/user/profile',
        }),
    }),
    overrideExisting: false,
});

export const { 
    useGetProfileQuery,
    useLazyGetProfileQuery 
} = userApi;