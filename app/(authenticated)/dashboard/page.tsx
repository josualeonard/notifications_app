import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NotificationList } from "@/components/notification-list"

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <div className="max-w-4xl mx-auto p-4 text-aspirin-blue">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="flex justify-between items-center mb-6">
        <p>Welcome, {user.email}</p>
        <Button asChild className="bg-aspirin-blue text-white hover:bg-aspirin-green">
          <Link href="/create-notification">Create Notification</Link>
        </Button>
      </div>
      <NotificationList />
    </div>
  )
}

