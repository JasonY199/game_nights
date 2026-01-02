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

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement Supabase authentication
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
    console.log("Registration attempt:", { email, username, password });
  };

  const handleGoogleSignup = () => {
    // TODO: Implement Supabase Google OAuth
    console.log("Google signup");
  };

  const handleAppleSignup = () => {
    // TODO: Implement Supabase Apple OAuth
    console.log("Apple signup");
  };

  return (
    <AuthCardWrapper
      title="Sign Up"
      description="Create an account to get started"
      mounted={mounted}
    >
      <div className="space-y-5">
        <SocialLoginButtons
          onGoogleClick={handleGoogleSignup}
          onAppleClick={handleAppleSignup}
        />

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

          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="border-border/50 focus:border-purple-400"
            />
          </div>

          <PasswordInput
            id="password"
            label="Password"
            value={password}
            onChange={setPassword}
          />

          <PasswordInput
            id="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />

          <AuthSubmitButton>Sign up</AuthSubmitButton>
        </form>

        <p className="text-sm text-muted-foreground text-center mt-6">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-foreground hover:text-foreground/80 font-medium underline underline-offset-4 decoration-purple-500/50 hover:decoration-purple-500 transition-all"
          >
            Sign in
          </Link>
        </p>
      </div>
    </AuthCardWrapper>
  );
}
