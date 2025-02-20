"use client"

import { useEffect, useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"

type Notification = {
  id: string
  message: string
  schedule_time: string
  repeat: boolean
  active: boolean
  user_id: string
}

export function NotificationList() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const supabase = createClientComponentClient()
  const { toast } = useToast()

  useEffect(() => {
    fetchNotifications()
  }, [])

  const fetchNotifications = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
      const { data, error } = await supabase
        .from("notifications")
        .select("*")
        .eq("user_id", user.id)
        .order("schedule_time", { ascending: true })

      if (error) {
        console.error("Error fetching notifications:", error)
      } else {
        setNotifications(data)
      }
    }
  }

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("notifications").delete().eq("id", id)

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete notification",
        variant: "destructive",
      })
    } else {
      toast({
        title: "Success",
        description: "Notification deleted successfully",
      })
      fetchNotifications()
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-aspirin-blue">Your Notifications</h2>
      {notifications.map((notification) => (
        <Card key={notification.id} className="bg-white text-aspirin-blue">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>{new Date(notification.schedule_time).toLocaleString()}</span>
              <Badge variant={notification.active ? "default" : "secondary"}>
                {notification.active ? "Active" : "Inactive"}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{notification.message}</p>
            <p className="text-sm text-gray-500 mt-2">
              {notification.repeat ? "Repeats daily" : "One-time notification"}
            </p>
            <div className="mt-4 flex space-x-2">
              <Button asChild variant="outline">
                <Link href={`/edit-notification/${notification.id}`}>Edit</Link>
              </Button>
              <Button variant="destructive" onClick={() => handleDelete(notification.id)}>
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

