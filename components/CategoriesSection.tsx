import { Thermometer, Shield, Lightbulb, Wrench } from 'lucide-react'

interface Category {
  _id: string
  name: string
  icon: string
  description?: string
}

interface CategoriesSectionProps {
  categories: Category[]
}

const iconMap = {
  thermometer: Thermometer,
  shield: Shield,
  lightbulb: Lightbulb,
  wrench: Wrench,
}

export default function CategoriesSection({ categories }: CategoriesSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Categories</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Thermometer
            
            return (
              <div
                key={category._id}
                className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                {category.description && (
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
