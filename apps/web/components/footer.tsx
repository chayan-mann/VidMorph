import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold">VidMorph</h3>
            <p className="mt-2 text-sm text-gray-400">Transform your videos using advanced AI technology.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/transform" className="text-gray-400 hover:text-primary">
                  Transform
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-primary">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} VidMorph. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
