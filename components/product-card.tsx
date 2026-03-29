import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.originalPrice && (
            <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 text-sm font-medium rounded">
              Sale
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="font-semibold text-lg mb-2 text-neutral-900">{product.name}</h3>

          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-neutral-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-neutral-600 ml-2">({product.reviews})</span>
          </div>

          <div className="flex items-center mb-4">
            <span className="text-xl font-bold text-neutral-900">{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-neutral-500 line-through ml-2">{product.originalPrice}</span>
            )}
          </div>

          <Link href={`/product/${product.id}`}>
            <Button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white">View Details</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
