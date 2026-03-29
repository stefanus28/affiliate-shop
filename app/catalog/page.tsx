import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

export default function CatalogPage() {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Our Collection</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of premium leather footwear
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
