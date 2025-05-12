"use client";

import Link from "next/link";
import { Button } from "../components/ui/button";
import {
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-secondary">
      <div className="container mx-auto px-4">
        <div className="relative flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <div className="z-10">
            <Link href="/" className="text-xl font-bold">
              VidMorph
            </Link>
          </div>

          {/* Center: Nav links */}
          <nav className="absolute left-1/2 top-1/2 hidden md:flex transform -translate-x-1/2 -translate-y-1/2 items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link
              href="/transform"
              className="text-sm font-medium hover:text-primary"
            >
              Transform
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium hover:text-primary"
            >
              Pricing
            </Link>
          </nav>

          {/* Right: Auth buttons */}
          <div className="hidden md:flex items-center space-x-4 z-10">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <>
                <SignInButton mode="modal">
                  <Button variant="outline">Sign In</Button>
                </SignInButton>
                <SignInButton mode="modal">
                  <Button>Sign Up</Button>
                </SignInButton>
              </>
            )}
          </div>

          {/* Mobile menu icon */}
          <div className="md:hidden z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/transform"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Transform
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
            </nav>
            <div className="pt-4 border-t border-border">
              {isSignedIn ? (
                <div className="flex items-center space-x-4">
                  <UserButton afterSignOutUrl="/" />
                  <SignOutButton>
                    <Button variant="outline" size="sm">
                      Sign Out
                    </Button>
                  </SignOutButton>
                </div>
              ) : (
                <div className="flex flex-col space-y-2">
                  <SignInButton mode="modal">
                    <Button className="w-full" variant="outline">
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignInButton mode="modal">
                    <Button className="w-full">Sign Up</Button>
                  </SignInButton>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
