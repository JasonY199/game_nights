"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export function LogoutToast() {
  useEffect(() => {
    // Check for logout cookie
    const cookies = document.cookie.split(";");
    const logoutCookie = cookies.find((c) =>
      c.trim().startsWith("logout-toast=")
    );

    if (logoutCookie) {
      // Show toast
      toast.success("Signed out successfully");

      // Clear the cookie
      document.cookie =
        "logout-toast=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
  }, []);

  return null;
}
