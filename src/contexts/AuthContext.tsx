'use client';

import { createContext, useContext, useEffect, useReducer, ReactNode } from 'react';
import { AuthState, AuthUser, AuthTokens } from '@/types/auth';
import { getStoredTokens, setStoredTokens, clearStoredTokens, decodeJwt } from '@/lib/auth/token';

type AuthAction =
  | { type: 'INITIALIZE'; payload: { user: AuthUser | null; isAuthenticated: boolean } }
  | { type: 'LOGIN'; payload: { tokens: AuthTokens; user: AuthUser } }
  | { type: 'LOGOUT' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  accessToken: undefined,
  refreshToken: undefined,
  isLoading: true,
  error: null,
};

const AuthContext = createContext<{
  state: AuthState;
  login: (tokens: AuthTokens) => void;
  logout: () => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
} | null>(null);

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated,
        isLoading: false,
        error: null,
      };
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        accessToken: action.payload.tokens.accessToken,
        refreshToken: action.payload.tokens.refreshToken,
        isLoading: false,
        error: null,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        accessToken: undefined,
        refreshToken: undefined,
        isLoading: false,
        error: null,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Initialize auth state
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const { accessToken, refreshToken } = getStoredTokens();
        
        if (accessToken && refreshToken) {
          const decoded = decodeJwt(accessToken);
          if (decoded && decoded.sub) {
            const user: AuthUser = {
              id: decoded.sub,
              role: decoded.role,
            };
            dispatch({
              type: 'LOGIN',
              payload: {
                tokens: { accessToken, refreshToken },
                user,
              },
            });
            return;
          }
        }
        dispatch({ type: 'INITIALIZE', payload: { user: null, isAuthenticated: false } });
      } catch (error) {
        console.error('Failed to initialize auth:', error);
        dispatch({ type: 'INITIALIZE', payload: { user: null, isAuthenticated: false } });
      }
    };

    initializeAuth();
  }, []);

  const login = ({ accessToken, refreshToken }: AuthTokens) => {
    try {
      const decoded = decodeJwt(accessToken);
      if (!decoded || !decoded.sub) {
        throw new Error('Invalid token');
      }

      const user: AuthUser = {
        id: decoded.sub,
        role: decoded.role,
        // Add other user fields from the token if needed
      };

      setStoredTokens({ accessToken, refreshToken });
      
      dispatch({
        type: 'LOGIN',
        payload: {
          tokens: { accessToken, refreshToken },
          user,
        },
      });
    } catch (error) {
      console.error('Login failed:', error);
      dispatch({
        type: 'SET_ERROR',
        payload: error instanceof Error ? error.message : 'Login failed',
      });
      throw error;
    }
  };

  const logout = () => {
    clearStoredTokens();
    dispatch({ type: 'LOGOUT' });
  };

  const setLoading = (isLoading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: isLoading });
  };

  const setError = (error: string | null) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout,
        setLoading,
        setError,
      }}
    >
      {!state.isLoading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
