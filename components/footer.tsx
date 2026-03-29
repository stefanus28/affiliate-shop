import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Sepasi</h3>
            <p className="text-neutral-400 max-w-md">
              Curating the finest leather footwear for the modern professional. Quality, style, and craftsmanship in
              every step.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-neutral-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/catalog" className="block text-neutral-400 hover:text-white transition-colors">
                Catalog
              </Link>
              <Link href="/about" className="block text-neutral-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-neutral-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <div className="space-y-2">
              <p className="text-neutral-400">Premium Quality</p>
              <p className="text-neutral-400">Curated Selection</p>
              <p className="text-neutral-400">Expert Reviews</p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Sepasi. All rights reserved.</p>
          <p className="mt-2 text-sm">As an Amazon Associate, we earn from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  )
}
