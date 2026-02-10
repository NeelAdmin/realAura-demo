export type UserRole = 'OWNER' | 'TENANT' | 'AFFILIATE';

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthUser {
  id: string;
  role: UserRole;
  // Add other user fields as needed
}

export interface AuthState {
  user: AuthUser | null;
  accessToken?: string;
  refreshToken?: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
