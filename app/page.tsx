import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-aspirin-blue text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://uce9fc061612f8d025e2377bcf4b.previews.dropboxusercontent.com/p/thumb/AChthVC8CCSY6RFd1yefHyTNhLcD_3FICoIzNx2DbXZJgxkUuWK9hPT8b-2g0ltAOlxdPv98rOilV7oBzNKGVLK0RSiml9JvIiHWPW_G9NRvCSLF4hNIMlmsLJdLUHEN-fjLWZOBR52Co3RKD9Lo2OCgiCYFXxFuiJAF_0Kw4o_oRz4D4jLNrMCheMHktH7LYXqfypVXFrLJf7qTZZuY0UzdTw0hSByoltO9w4zGHmcKlZ-bAAwwEZfE24KNEx43T9_1Kh0zW3UirtFTOzOKJOLuiS_CLG8KN6vlnGYWnvrF0Oh7BD7hyUdhy1BoYxNUn-v2JirBhOqE0UoZnsqKIx6ms85I2Bvx50PDSAUCfG1l0n8ZNfROamzJ_RCaFFxr2wQ/p.png"
              alt="Hero background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Boost Your Productivity by 40%
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Never miss an important moment again. Schedule notifications for any time, any day.
                </p>
                <Button asChild size="lg" className="bg-aspirin-red text-aspirin-blue hover:bg-aspirin-orange">
                  <Link href="/signup">Get Started Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-aspirin-green">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Features</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  title: "Smart Scheduling",
                  description: "AI-powered scheduling that learns from your habits and preferences.",
                },
                {
                  title: "Multi-platform Sync",
                  description: "Seamlessly sync your notifications across all your devices.",
                },
                {
                  title: "Voice Commands (Coming Soon)",
                  description: "Set and manage your notifications using just your voice.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4 p-2 bg-aspirin-yellow rounded-full">
                    <svg
                      className=" h-6 w-6 text-aspirin-blue"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-aspirin-yellow">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Sections */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-aspirin-yellow">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="text-lg font-medium text-aspirin-blue">
                  "Notify Me has completely transformed how I manage my time. I've never been more productive!"
                </div>
                <div className="font-semibold text-aspirin-green">- Sarah Johnson, Freelance Designer</div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="text-lg font-medium text-aspirin-blue">
                  "This app is a game-changer. I no longer miss important deadlines or forget crucial tasks."
                </div>
                <div className="font-semibold text-aspirin-green">- Mike Chen, Software Engineer</div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-aspirin-orange">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="text-lg font-medium text-aspirin-blue">
                  "As a busy mom, Notify Me helps me keep track of my family's schedules effortlessly."
                </div>
                <div className="font-semibold text-aspirin-green">- Emily Rodriguez, Working Mother</div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="text-lg font-medium text-aspirin-blue">
                  "I've tried many productivity apps, but Notify Me stands out with its simplicity and effectiveness."
                </div>
                <div className="font-semibold text-aspirin-green">- David Lee, Entrepreneur</div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-aspirin-red">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 text-aspirin-blue">It's Free for Everyone</h2>
            <p className="text-lg mb-8 text-aspirin-green">
              We believe everyone should have the tools to achieve their goals. That's why Notify Me is and always will
              be free.
            </p>
            <Button asChild size="lg" className="bg-aspirin-blue text-white hover:bg-aspirin-green">
              <Link href="/signup">Start Achieving Your Goals</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-aspirin-blue text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold mb-2">Notify Me</h3>
              <p className="text-sm">Helping you achieve more, one notification at a time.</p>
            </div>
            <nav className="flex flex-col space-y-2">
              <Link href="/features" className="hover:text-aspirin-yellow transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="hover:text-aspirin-yellow transition-colors">
                Pricing
              </Link>
              <Link href="#" className="hover:text-aspirin-yellow transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-aspirin-yellow transition-colors">
                Privacy Policy
              </Link>
            </nav>
            <div className="text-sm">
              <p>&copy; 2024 Notify Me. All rights reserved.</p>
              <p>Created by Josua</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

