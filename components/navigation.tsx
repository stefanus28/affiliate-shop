"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-neutral-900">
            Sepasi
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-neutral-700 hover:text-neutral-900 transition-colors">
              Home
            </Link>
            <Link href="/catalog" className="text-neutral-700 hover:text-neutral-900 transition-colors">
              Catalog
            </Link>
            <Link href="/about" className="text-neutral-700 hover:text-neutral-900 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-neutral-700 hover:text-neutral-900 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-neutral-700 hover:text-neutral-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/catalog"
                className="text-neutral-700 hover:text-neutral-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Catalog
              </Link>
              <Link
                href="/about"
                className="text-neutral-700 hover:text-neutral-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-neutral-700 hover:text-neutral-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
