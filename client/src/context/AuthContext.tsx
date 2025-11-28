import React, { createContext, useContext, useState, ReactNode } from "react";
import { useLocation } from "wouter";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [, setLocation] = useLocation();

  const login = (email: string) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setUser({
        id: "1",
        name: "المستخدم التجريبي", // Demo User in Arabic
        email: email,
        avatar: "https://github.com/shadcn.png",
      });
      setIsLoading(false);
      setLocation("/");
    }, 1000);
  };

  const logout = () => {
    setUser(null);
    setLocation("/auth");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
