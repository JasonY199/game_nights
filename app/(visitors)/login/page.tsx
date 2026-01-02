"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement Supabase authentication
    console.log("Login attempt:", { email, password });
  };

  return (
    <main className="relative flex flex-1 items-center justify-center py-12 px-6">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-blue-500/10" />

      <div className="relative w-full max-w-md mx-auto">
          <Card className="border-purple-500/20 shadow-xl shadow-purple-500/5">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-3xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight pb-2">
                Game Nights
              </CardTitle>
              <CardDescription className="text-base">
                Sign in to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
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
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-border/50 focus:border-purple-400"
                  />
                </div>
                <Button
                  type="submit"
                  variant="outline"
                  className="w-full border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/5"
                >
                  Login
                </Button>
              </form>

              <p className="text-sm text-muted-foreground text-center mt-6">
                Need an account?{" "}
                <Link
                  href="/register"
                  className="text-purple-400 hover:text-purple-300 underline underline-offset-4"
                >
                  Register here
                </Link>
              </p>
            </CardContent>
          </Card>
      </div>
    </main>
  );
}
