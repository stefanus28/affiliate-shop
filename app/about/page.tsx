import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">About Refined Steps</h1>
          <p className="text-xl text-neutral-600">Curating excellence in leather footwear since our inception</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Our Story</h2>
            <p className="text-neutral-700 mb-4 leading-relaxed">
              Refined Steps was born from a passion for exceptional leather craftsmanship and a desire to make premium
              footwear accessible to discerning professionals. We believe that the right pair of shoes can transform not
              just your appearance, but your confidence.
            </p>
            <p className="text-neutral-700 mb-4 leading-relaxed">
              Our team of footwear enthusiasts carefully curates each product in our collection, ensuring that every
              pair meets our rigorous standards for quality, comfort, and style. We partner with renowned brands and
              artisans who share our commitment to excellence.
            </p>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Leather craftsmanship"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">Q</span>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">Quality First</h3>
            <p className="text-neutral-600">
              Every product is carefully selected for its superior materials and craftsmanship
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">Style & Comfort</h3>
            <p className="text-neutral-600">
              We believe you shouldn't have to choose between looking good and feeling comfortable
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">Trust & Value</h3>
            <p className="text-neutral-600">Honest reviews and competitive prices through our Amazon partnerships</p>
          </div>
        </div>

        <div className="bg-neutral-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Our Mission</h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            To help modern professionals step confidently into their day with footwear that combines timeless elegance,
            superior comfort, and exceptional value. We're not just selling shoes – we're curating a lifestyle of
            refined taste and quality.
          </p>
        </div>
      </div>
    </div>
  )
}
