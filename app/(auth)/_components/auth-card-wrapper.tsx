"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface AuthCardWrapperProps {
  title: string;
  description: string;
  children: ReactNode;
  mounted: boolean;
}

export function AuthCardWrapper({ title, description, children, mounted }: AuthCardWrapperProps) {
  return (
    <main className="relative flex flex-1 items-center justify-center py-12 px-6">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-blue-500/10" />

      <div className="relative w-full max-w-md mx-auto">
        <Card className={`border-purple-500/20 bg-linear-to-br from-purple-500/5 to-blue-500/5 backdrop-blur-xl shadow-[0_0_40px_rgba(139,92,246,0.1)] hover:shadow-[0_0_50px_rgba(139,92,246,0.15)] transition-all duration-700 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-3xl font-bold bg-linear-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight pb-2 animate-gradient">
              {title}
            </CardTitle>
            <CardDescription className="text-base">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {children}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
