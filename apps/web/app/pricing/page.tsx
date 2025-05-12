import { Check } from "lucide-react"
import { Button } from "../../components/ui/button"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h1>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
              Choose the plan that's right for you and start transforming your videos today.
            </p>
          </div>
        </div>
        <div className="grid gap-6 pt-12 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col justify-between rounded-lg border border-border bg-secondary p-6">
            <div>
              <h3 className="text-xl font-bold">Basic</h3>
              <div className="mt-4 flex items-baseline text-gray-200">
                <span className="text-3xl font-bold">$9</span>
                <span className="ml-1 text-sm text-gray-400">/month</span>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>10 video transformations</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>720p output quality</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Basic transformation options</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>7-day history</span>
                </li>
              </ul>
            </div>
            <Link href="/transform" className="mt-8">
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
          <div className="flex flex-col justify-between rounded-lg border border-primary bg-secondary p-6 shadow-lg">
            <div>
              <h3 className="text-xl font-bold">Pro</h3>
              <div className="mt-4 flex items-baseline text-gray-200">
                <span className="text-3xl font-bold">$29</span>
                <span className="ml-1 text-sm text-gray-400">/month</span>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>50 video transformations</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>1080p output quality</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Advanced transformation options</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>30-day history</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Priority processing</span>
                </li>
              </ul>
            </div>
            <Link href="/transform" className="mt-8">
              <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
            </Link>
          </div>
          <div className="flex flex-col justify-between rounded-lg border border-border bg-secondary p-6">
            <div>
              <h3 className="text-xl font-bold">Enterprise</h3>
              <div className="mt-4 flex items-baseline text-gray-200">
                <span className="text-3xl font-bold">$99</span>
                <span className="ml-1 text-sm text-gray-400">/month</span>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Unlimited video transformations</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>4K output quality</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>All transformation options</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Unlimited history</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>API access</span>
                </li>
              </ul>
            </div>
            <Link href="/transform" className="mt-8">
              <Button className="w-full">Contact Sales</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
