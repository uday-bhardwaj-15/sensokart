import Image from 'next/image'
import Link from 'next/link'

interface Application {
  _id: string
  title: string
  description?: string
  image?: string
  link?: string
}

interface ApplicationsSectionProps {
  applications: Application[]
}

export default function ApplicationsSection({ applications }: ApplicationsSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Applications</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((application) => (
            <div
              key={application._id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {application.image ? (
                <Image
                  src={application.image}
                  alt={application.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl">🏭</span>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {application.title}
                </h3>
                {application.description && (
                  <p className="text-gray-600 text-sm mb-4">
                    {application.description}
                  </p>
                )}
                {application.link && (
                  <Link
                    href={application.link}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Learn More →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
