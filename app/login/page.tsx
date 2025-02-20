"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Link from "next/link"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()
  const supabase = createClientComponentClient()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    })

    setIsLoading(false)

    if (error) {
      return toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    }

    toast({
      title: "Success",
      description: "You have been logged in.",
    })

    router.push("/dashboard")
  }

  async function onPasswordReset() {
    const email = form.getValues("email")
    if (!email) {
      return toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      })
    }

    setIsLoading(true)
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${location.origin}/auth/callback`,
    })
    setIsLoading(false)

    if (error) {
      return toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    }

    toast({
      title: "Success",
      description: "Check your email for the password reset link.",
    })
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="mx-auto max-w-[450px] space-y-6 border rounded-lg p-8 bg-white text-aspirin-blue">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Log In</h1>
          <p className="text-gray-500">Enter your credentials to access your account</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="m@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log In"}
            </Button>
            <Button type="button" variant="link" className="w-full" onClick={onPasswordReset} disabled={isLoading}>
              Forgot Password?
            </Button>
          </form>
        </Form>
        <p className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link href="/signup" className="font-semibold text-aspirin-blue hover:text-aspirin-green">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

