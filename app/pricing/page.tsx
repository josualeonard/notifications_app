import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Simple, Transparent Pricing</h1>

      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-2">Free for Everyone</h2>
          <p className="text-center text-gray-600 mb-6">No hidden fees, no credit card required</p>
          <p className="text-center text-5xl font-bold mb-6">
            $0<span className="text-lg font-normal">/month</span>
          </p>
          <ul className="text-sm text-gray-600 mb-6">
            <li className="mb-3 flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              Unlimited notifications
            </li>
            <li className="mb-3 flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              Customizable schedules
            </li>
            <li className="mb-3 flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              Email notifications
            </li>
            <li className="mb-3 flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              Repeating notifications
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              24/7 customer support
            </li>
          </ul>
        </div>
        <div className="px-6 py-8 bg-gray-50 border-t border-gray-200 text-center">
          <a
            href="/signup"
            className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up Now
          </a>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Why We're Free</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          At Notify Me, we believe that everyone should have access to tools that can improve their lives. That's why
          we've made the decision to offer our service completely free of charge. Our mission is to help as many people
          as possible become more organized, productive, and fulfilled.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">No Ads</h3>
          <p className="text-gray-600">
            We don't believe in cluttering your experience with advertisements. Your attention is valuable, and we want
            you to focus on what matters.
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">No Data Selling</h3>
          <p className="text-gray-600">
            Your privacy is paramount. We will never sell your data to third parties. Your information is yours and
            yours alone.
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Community Supported</h3>
          <p className="text-gray-600">
            We're supported by a passionate community of users who believe in our mission. Together, we're making the
            world more organized, one notification at a time.
          </p>
        </div>
      </div>
    </div>
  )
}

