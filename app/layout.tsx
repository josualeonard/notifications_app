import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { RootMenu } from "@/components/root-menu"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Notify Me",
  description: "Schedule and manage your notifications",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-aspirin-blue text-white`}>
        {!children.props.segment && <RootMenu />}
        {children}
        <Toaster />
      </body>
    </html>
  )
}

