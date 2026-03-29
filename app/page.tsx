import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { getFeaturedProducts } from "@/lib/products"

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-neutral-50">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Premium leather shoes"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6">Sepasi</h1>
          <p className="text-xl md:text-2xl text-neutral-700 mb-8 max-w-2xl mx-auto">
            Discover curated collection of premium leather footwear for the modern professional
          </p>
          <Link href="/catalog">
            <Button size="lg" className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3 text-lg">
              Explore Collection
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Featured Collection</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Handpicked selection of our finest leather footwear, combining timeless style with modern comfort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/catalog">
              <Button
                variant="outline"
                size="lg"
                className="border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white bg-transparent"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">Crafted for Excellence</h2>
              <p className="text-lg text-neutral-700 mb-6">
                Every pair in our collection represents the pinnacle of leather craftsmanship. We partner with renowned
                artisans who share our commitment to quality, comfort, and timeless design.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-neutral-900 rounded-full mt-2 mr-4"></div>
                  <p className="text-neutral-700">Premium full-grain leather construction</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-neutral-900 rounded-full mt-2 mr-4"></div>
                  <p className="text-neutral-700">Traditional craftsmanship techniques</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-neutral-900 rounded-full mt-2 mr-4"></div>
                  <p className="text-neutral-700">Comfort-focused design and fit</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Leather craftsmanship"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
