import { CheckCircle, Shield, ArrowLeftRight, Wrench } from 'lucide-react'

interface Parameter {
  _id: string
  title: string
  subtitle: string
  icon: string
}

interface ParametersSectionProps {
  parameters: Parameter[]
}

const iconMap = {
  checkCircle: CheckCircle,
  shield: Shield,
  arrowLeftRight: ArrowLeftRight,
  wrench: Wrench,
}

export default function ParametersSection({ parameters }: ParametersSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Parameters</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {parameters.map((parameter) => {
            const IconComponent = iconMap[parameter.icon as keyof typeof iconMap] || CheckCircle
            
            return (
              <div
                key={parameter._id}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {parameter.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {parameter.subtitle}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
