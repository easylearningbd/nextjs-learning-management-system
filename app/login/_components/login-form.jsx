'use client'
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ceredntialLogin } from "@/app/actions";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {

  const [error, setError] = useState('');
  const router = useRouter();


  async function onSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const response = await ceredntialLogin(formData);

      if (!!response.error) {
          console.log(response.error)
          setError(response.error);
      } else {
        router.push("/courses")
      }      
    } catch (e) {
      setError(e.message);
    }
  }






  return (
    <Card className="mx-auto max-w-sm w-full">
      <CardHeader>
        <CardTitle className="text-2xl">
        <p className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-3xl lg:leading-tight font-pj">
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative">Login</span>
              </span>
            </p></CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} >
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              {/* <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link> */}
            </div>
            <Input id="password" name="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="register" className="underline">
            Register
          </Link>
        </div>
        </form>
      </CardContent>
    </Card>
  );
}