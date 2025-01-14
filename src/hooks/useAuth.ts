import { useState, useEffect } from "react";
import type { User, AuthStatus } from "../types";

export function useAuth() {
  const [user] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>("loading");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Implement your auth check logic here
        setStatus("unauthenticated");
      } catch (error) {
        setStatus("unauthenticated");
      }
    };

    checkAuth();
  }, []);

  return { user, status };
}
