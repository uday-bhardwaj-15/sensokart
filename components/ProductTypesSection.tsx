import { Gauge, Thermometer, Droplets, BarChart3 } from 'lucide-react'
import Link from 'next/link'

interface ProductType {
  _id: string
  name: string
  icon: string
  description?: string
  link?: string
}

interface ProductTypesSectionProps {
  productTypes: ProductType[]
}

const iconMap = {
  gauge: Gauge,
  thermometer: Thermometer,
  droplets: Droplets,
  barChart3: BarChart3,
}

export default function ProductTypesSection({ productTypes }: ProductTypesSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productTypes.map((productType) => {
            const IconComponent = iconMap[productType.icon as keyof typeof iconMap] || Gauge
            
            return (
              <div
                key={productType._id}
                className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {productType.name}
                </h3>
                {productType.description && (
                  <p className="text-gray-600 text-sm">
                    {productType.description}
                  </p>
                )}
                {productType.link && (
                  <Link
                    href={productType.link}
                    className="mt-4 inline-block text-green-600 hover:text-green-700 font-medium"
                  >
                    Learn More →
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
