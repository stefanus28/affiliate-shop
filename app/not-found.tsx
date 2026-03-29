import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-neutral-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-neutral-700 mb-4">Page Not Found</h2>
        <p className="text-neutral-600 mb-8 max-w-md">The page you're looking for doesn't exist or has been moved.</p>
        <Link href="/">
          <Button className="bg-neutral-900 hover:bg-neutral-800 text-white">Return Home</Button>
        </Link>
      </div>
    </div>
  )
}
