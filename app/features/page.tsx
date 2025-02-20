import { Check } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Discover the Power of Notify Me</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Never Miss a Beat</h2>
          <p className="mb-4">
            Notify Me revolutionizes the way you manage your time and tasks. Our intelligent notification system ensures
            that you're always on top of your game, whether it's for work, personal life, or anything in between.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              Customizable notifications for any scenario
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              Intelligent scheduling that adapts to your lifestyle
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              Seamless integration with your daily routines
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Boost Your Productivity</h2>
          <p className="mb-4">
            Did you know that the average person wastes up to 2 hours a day due to poor time management? Notify Me helps
            you reclaim that lost time, potentially saving you up to 730 hours a year!
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              Reduce stress by staying organized
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              Increase focus with timely reminders
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              Achieve your goals with consistent nudges
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Personalized for You</h2>
          <p className="mb-4">
            Notify Me uses cutting-edge AI to learn your habits and preferences, creating a notification system that's
            uniquely tailored to your needs. It's like having a personal assistant that knows you better than you know
            yourself!
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              AI-powered scheduling suggestions
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              Adaptive notification timing based on your responsiveness
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              Mood-based notifications to keep you motivated
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Beyond Reminders</h2>
          <p className="mb-4">
            Notify Me isn't just about remembering tasks - it's about enhancing your entire life experience. Our unique
            approach to notifications can help you form new habits, break old ones, and even improve your relationships!
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              Habit formation nudges based on psychological research
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              Relationship reminders to nurture your connections
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              Wellness check-ins to maintain your mental health
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Life?</h2>
        <p className="mb-8">
          Join thousands of users who have already discovered the life-changing power of Notify Me. Start your journey
          to a more organized, productive, and fulfilling life today!
        </p>
        <a href="/signup" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Get Started Now
        </a>
      </div>
    </div>
  )
}

