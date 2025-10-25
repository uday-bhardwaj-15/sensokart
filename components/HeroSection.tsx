import Image from 'next/image'
import Link from 'next/link'

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  image?: string
  primaryButton?: {
    text: string
    link: string
  }
  secondaryButton?: {
    text: string
    link: string
  }
}

export default function HeroSection({
  title,
  subtitle,
  description,
  image,
  primaryButton,
  secondaryButton,
}: HeroSectionProps) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {title}
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                {subtitle}
              </p>
              <p className="mt-4 text-lg text-gray-500">
                {description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryButton && (
                <Link
                  href={primaryButton.link}
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
                >
                  {primaryButton.text}
                </Link>
              )}
              {secondaryButton && (
                <Link
                  href={secondaryButton.link}
                  className="inline-flex items-center justify-center px-8 py-3 border border-green-600 text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 transition-colors"
                >
                  {secondaryButton.text}
                </Link>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            {image ? (
              <Image
                src={image}
                alt="Precision Instruments"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            ) : (
              <div className="bg-gray-200 rounded-lg shadow-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">🔧</span>
                  </div>
                  <p className="text-gray-500">Precision Instruments</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
