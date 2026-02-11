// src/feature/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: any | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Helper functions for localStorage
const loadAuthState = (): Partial<AuthState> => {
  if (typeof window === 'undefined') {
    return {};
  }
  try {
    const serializedState = localStorage.getItem('auth');
    if (!serializedState) return {};
    return JSON.parse(serializedState);
  } catch (err) {
    console.warn('Failed to load auth state from localStorage', err);
    return {};
  }
};

const saveAuthState = (state: Partial<AuthState>) => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem('auth', JSON.stringify({
      user: state.user || null,
      accessToken: state.accessToken || null,
      isAuthenticated: state.isAuthenticated || false,
    }));
  } catch (err) {
    console.warn('Failed to save auth state to localStorage', err);
  }
};

// Load initial state from localStorage
const persistedState = loadAuthState();

const initialState: AuthState = {
  user: persistedState.user || null,
  accessToken: persistedState.accessToken || null,
  isAuthenticated: persistedState.isAuthenticated || false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        accessToken?: string;
        user?: any | null;
        isAuthenticated?: boolean;
      }>
    ) => {
      if (action.payload.accessToken !== undefined) {
        state.accessToken = action.payload.accessToken;
      }
      if (action.payload.user !== undefined) {
        state.user = action.payload.user;
      }
      if (action.payload.isAuthenticated !== undefined) {
        state.isAuthenticated = action.payload.isAuthenticated;
      }
      // Save to localStorage
      saveAuthState(state);
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      // Clear auth from localStorage
      localStorage.removeItem('auth');
      localStorage.removeItem('refreshToken');
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setCredentials, logout, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;

// Selectors
export const selectCurrentUser = (state: { auth: AuthState }) => state.auth.user;
export const selectIsAuthenticated = (state: { auth: AuthState }) => state.auth.isAuthenticated;
export const selectIsLoading = (state: { auth: AuthState }) => state.auth.isLoading;