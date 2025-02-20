import type { ReactNode } from "react"
import { AuthHeader } from "@/components/auth-header"

export default function AuthenticatedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <AuthHeader />
      <main className="flex-1 container mx-auto px-4 py-8 text-aspirin-blue">{children}</main>
    </div>
  )
}

