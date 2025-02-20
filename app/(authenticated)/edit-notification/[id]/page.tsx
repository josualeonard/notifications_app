"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Switch } from "@/components/ui/switch"

const formSchema = z.object({
  message: z.string().min(1).max(255),
  scheduleTime: z.string(),
  repeat: z.boolean().default(false),
})

export default function EditNotification({ params }: { params: { id: string } }) {
  const [isLoading, setIsLoading] = useState(false)
  const [notification, setNotification] = useState<any>(null)
  const router = useRouter()
  const { toast } = useToast()
  const supabase = createClientComponentClient()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
      scheduleTime: "",
      repeat: false,
    },
  })

  useEffect(() => {
    const fetchNotification = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) {
        router.push("/login")
        return
      }

      const { data, error } = await supabase
        .from("notifications")
        .select("*")
        .eq("id", params.id)
        .eq("user_id", user.id)
        .single()

      if (error || !data) {
        toast({
          title: "Error",
          description: "Failed to fetch notification or you don't have permission to edit it.",
          variant: "destructive",
        })
        router.push("/dashboard")
        return
      }

      setNotification(data)
      form.reset({
        message: data.message,
        scheduleTime: new Date(data.schedule_time).toISOString().slice(0, 16),
        repeat: data.repeat,
      })
    }

    fetchNotification()
  }, [supabase, params.id, router, form, toast])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    const { data, error } = await supabase
      .from("notifications")
      .update({
        message: values.message,
        schedule_time: values.scheduleTime,
        repeat: values.repeat,
      })
      .eq("id", params.id)

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
      description: "Notification updated successfully.",
    })

    router.push("/dashboard")
  }

  if (!notification) {
    return <div className="text-aspirin-blue">Loading...</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-4 text-aspirin-blue">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Edit Notification</h1>
        <Button variant="outline" asChild>
          <Link href="/dashboard">Back to Dashboard</Link>
        </Button>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter your notification message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="scheduleTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Schedule Time</FormLabel>
                <FormControl>
                  <Input type="datetime-local" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="repeat"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Repeat</FormLabel>
                  <FormDescription>Should this notification repeat daily?</FormDescription>
                </div>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Updating..." : "Update Notification"}
          </Button>
        </form>
      </Form>
    </div>
  )
}

