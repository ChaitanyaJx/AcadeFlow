// auth-context.ts - Client Component
"use client";

import { createContext, useContext } from "react";
import type { Session, User } from "@/types/auth";

interface AuthContextType {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  isLoading: true,
});

export const useAuth = () => useContext(AuthContext);
