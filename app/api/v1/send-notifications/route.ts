import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const dynamic = "force-dynamic"

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

async function sendEmail(to: string, subject: string, text: string) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      text,
    })
    console.log(`Email sent to ${to}`)
  } catch (error) {
    console.error("Error sending email:", error)
  }
}

export async function GET(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })
  const now = new Date()

  // Fetch active notifications that are due
  const { data: notifications, error } = await supabase
    .from("notifications")
    .select("*, user:user_id(email)")
    .eq("active", true)
    .lte("schedule_time", now.toISOString())

  if (error) {
    console.error("Error fetching notifications:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }

  // Process notifications
  for (const notification of notifications) {
    // Send email notification
    await sendEmail(notification.user.email, "Notification from Notify Me", notification.message)

    // If it's a repeating notification, update the schedule_time
    if (notification.repeat) {
      const nextScheduleTime = new Date(notification.schedule_time)
      nextScheduleTime.setDate(nextScheduleTime.getDate() + 1) // Repeat daily

      await supabase
        .from("notifications")
        .update({ schedule_time: nextScheduleTime.toISOString() })
        .eq("id", notification.id)
    } else {
      // If it's not repeating, mark it as inactive
      await supabase.from("notifications").update({ active: false }).eq("id", notification.id)
    }
  }

  return NextResponse.json({ message: "Notifications processed successfully" })
}

