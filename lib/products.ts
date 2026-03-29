export interface Product {
  id: string
  name: string
  price: string
  originalPrice?: string
  image: string
  images: string[]
  description: string
  features: string[]
  amazonUrl: string
  rating: number
  reviews: number
  category: string
  brand: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Oxford Dress Shoes",
    price: "$189.99",
    originalPrice: "$249.99",
    image: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    description:
      "Timeless Oxford dress shoes crafted from premium full-grain leather. Perfect for business meetings, formal events, and professional settings. Features traditional Goodyear welt construction for durability and comfort.",
    features: [
      "Premium full-grain leather upper",
      "Goodyear welt construction",
      "Leather sole with rubber heel",
      "Cushioned leather insole",
      "Classic lace-up design",
    ],
    amazonUrl: "https://amazon.com/example-oxford-shoes",
    rating: 4.5,
    reviews: 1247,
    category: "Dress Shoes",
    brand: "Heritage Craft",
  },
  {
    id: "2",
    name: "Modern Loafers",
    price: "$159.99",
    image: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    description:
      "Contemporary leather loafers that blend comfort with sophistication. Ideal for both casual and semi-formal occasions. Slip-on design with premium leather construction.",
    features: [
      "Soft leather upper",
      "Slip-on convenience",
      "Padded collar and tongue",
      "Flexible rubber sole",
      "Versatile styling",
    ],
    amazonUrl: "https://amazon.com/example-loafers",
    rating: 4.3,
    reviews: 892,
    category: "Loafers",
    brand: "Urban Elite",
  },
  {
    id: "3",
    name: "Chelsea Boots",
    price: "$219.99",
    image: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    description:
      "Sleek Chelsea boots with elastic side panels for easy wear. Crafted from supple leather with a modern silhouette. Perfect for transitional weather and versatile styling.",
    features: [
      "Elastic side panels",
      "Pull-on tab at heel",
      "Water-resistant leather",
      "Comfortable ankle height",
      "Durable rubber sole",
    ],
    amazonUrl: "https://amazon.com/example-chelsea-boots",
    rating: 4.7,
    reviews: 634,
    category: "Boots",
    brand: "Metropolitan",
  },
  {
    id: "4",
    name: "Casual Leather Sneakers",
    price: "$139.99",
    originalPrice: "$179.99",
    image: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    description:
      "Premium leather sneakers that combine athletic comfort with sophisticated style. Perfect for weekend wear and casual office environments.",
    features: [
      "Full leather upper",
      "Memory foam insole",
      "Breathable leather lining",
      "Rubber cup sole",
      "Minimalist design",
    ],
    amazonUrl: "https://amazon.com/example-leather-sneakers",
    rating: 4.4,
    reviews: 1156,
    category: "Sneakers",
    brand: "Comfort Plus",
  },
  {
    id: "5",
    name: "Brogue Wingtips",
    price: "$199.99",
    image: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    description:
      "Classic brogue wingtips with intricate perforated detailing. Handcrafted from premium leather with traditional construction methods for lasting quality.",
    features: [
      "Decorative brogue perforations",
      "Wingtip design",
      "Hand-finished leather",
      "Blake stitch construction",
      "Leather sole",
    ],
    amazonUrl: "https://amazon.com/example-brogue-wingtips",
    rating: 4.6,
    reviews: 743,
    category: "Dress Shoes",
    brand: "Classic Craft",
  },
  {
    id: "6",
    name: "Desert Boots",
    price: "$169.99",
    image: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    description:
      "Timeless desert boots in premium suede leather. Features the classic two-eyelet lacing system and crepe sole for comfort and style.",
    features: [
      "Premium suede leather",
      "Two-eyelet lacing",
      "Crepe rubber sole",
      "Unlined construction",
      "Ankle-high design",
    ],
    amazonUrl: "https://amazon.com/example-desert-boots",
    rating: 4.2,
    reviews: 567,
    category: "Boots",
    brand: "Desert Walker",
  },
]

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 3)
}
