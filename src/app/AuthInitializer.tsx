"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials, setLoading } from "@/feature/auth/authSlice";

export default function AuthInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const stored = localStorage.getItem("auth");

    if (stored) {
      const parsed = JSON.parse(stored);

      dispatch(
        setCredentials({
          user: parsed.user,
          accessToken: parsed.accessToken,
          isAuthenticated: parsed.isAuthenticated,
        })
      );
    }

    dispatch(setLoading(false));
  }, []);

  return null;
}
