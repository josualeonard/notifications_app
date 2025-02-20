import Link from "next/link"

export function MainMenu() {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="text-sm font-medium transition-colors hover:text-aspirin-yellow">
        Home
      </Link>
      <Link
        href="/features"
        className="text-sm font-medium text-aspirin-orange transition-colors hover:text-aspirin-yellow"
      >
        Features
      </Link>
      <Link
        href="/pricing"
        className="text-sm font-medium text-aspirin-orange transition-colors hover:text-aspirin-yellow"
      >
        Pricing
      </Link>
    </nav>
  )
}

