import Link from "next/link"
import { UserNav } from "@/components/user-nav"

export function AuthHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-14 items-center">
        <Link href="/dashboard" className="font-bold text-xl text-aspirin-blue">
          Notify Me
        </Link>
        <nav className="ml-6 flex items-center space-x-4 lg:space-x-6">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-aspirin-blue transition-colors hover:text-aspirin-green"
          >
            Dashboard
          </Link>
          <Link
            href="/create-notification"
            className="text-sm font-medium text-aspirin-blue transition-colors hover:text-aspirin-green"
          >
            Create Notification
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <UserNav />
        </div>
      </div>
    </header>
  )
}

