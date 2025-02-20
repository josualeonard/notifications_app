import Link from "next/link"
import { MainMenu } from "@/components/main-menu"

export function RootMenu() {
  return (<header className="px-4 lg:px-6 h-14 flex items-center bg-aspirin-blue">
      <Link className="flex items-center justify-center" href="/">
        <span className="font-bold text-xl text-aspirin-yellow">Notify Me</span>
      </Link>
      <div className="ml-auto flex items-center space-x-4">
        <MainMenu />
      </div>
    </header>
  )
}

