"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { AuthCardWrapper } from "../_components/auth-card-wrapper";
import { SocialLoginButtons } from "../_components/social-login-buttons";
import { AuthDivider } from "../_components/auth-divider";
import { PasswordInput } from "../_components/password-input";
import { AuthSubmitButton } from "../_components/auth-submit-button";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement Supabase email/password authentication
    console.log("Login attempt:", { email, password });
  };

  return (
    <AuthCardWrapper
      title="Sign In"
      description="Welcome back! Sign in to continue."
      mounted={mounted}
    >
      <div className="space-y-5">
        <SocialLoginButtons />

        <AuthDivider />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-border/50 focus:border-purple-400"
            />
          </div>

          <PasswordInput
            id="password"
            label="Password"
            value={password}
            onChange={setPassword}
            rightElement={
              <Link
                href="/forgot-password"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Forgot password?
              </Link>
            }
          />

          <AuthSubmitButton>Sign in</AuthSubmitButton>
        </form>

        <p className="text-sm text-muted-foreground text-center mt-6">
          Need an account?{" "}
          <Link
            href="/signup"
            className="text-foreground hover:text-foreground/80 font-medium underline underline-offset-4 decoration-purple-500/50 hover:decoration-purple-500 transition-all"
          >
            Sign up
          </Link>
        </p>
      </div>
    </AuthCardWrapper>
  );
}
