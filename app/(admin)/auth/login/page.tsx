import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { LoginForm } from "../_components/login-form";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold leading-tight tracking-tight text-slate-500 text-center">
            Ingresar
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 md:space-y-1">
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
