"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink } from "lucide-react"
import { getProduct } from "@/lib/products"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProduct(params.id)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    notFound()
  }

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
              />
            </div>

            <div className="flex space-x-4 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? "border-neutral-900" : "border-neutral-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <Badge variant="secondary" className="mb-4">
              {product.category}
            </Badge>

            <h1 className="text-3xl font-bold text-neutral-900 mb-4">{product.name}</h1>

            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-neutral-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-neutral-600 ml-2">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-neutral-900">{product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-neutral-500 line-through ml-3">{product.originalPrice}</span>
              )}
            </div>

            <p className="text-neutral-700 mb-6 leading-relaxed">{product.description}</p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-neutral-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <p className="text-sm text-neutral-600 mb-4">
                Brand: <span className="font-medium">{product.brand}</span>
              </p>
            </div>

            <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer" className="block">
              <Button size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                <ExternalLink className="w-5 h-5 mr-2" />
                Buy on Amazon
              </Button>
            </a>

            <p className="text-xs text-neutral-500 mt-4 text-center">
              As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
