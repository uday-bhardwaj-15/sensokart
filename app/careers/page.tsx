import { Briefcase, Users, TrendingUp, Send } from 'lucide-react'

export default function CareersPage() {
  const currentOpenings = [
    {
      title: "Sales & Technical Specialist",
      description: "Help customers find the right precision instruments for their needs.",
      requirements: ["Technical background in instrumentation", "Sales experience", "Customer service skills"]
    },
    {
      title: "Customer Support Engineer", 
      description: "Provide technical support and troubleshooting assistance.",
      requirements: ["Engineering degree", "Technical support experience", "Problem-solving skills"]
    },
    {
      title: "Logistics & Warehouse Associate",
      description: "Manage inventory and ensure timely delivery of products.",
      requirements: ["Warehouse management experience", "Inventory control skills", "Logistics knowledge"]
    },
    {
      title: "Quality Assurance / Calibration Technician",
      description: "Ensure product quality and perform calibration services.",
      requirements: ["Calibration experience", "Quality control knowledge", "Attention to detail"]
    }
  ]

  const benefits = [
    {
      icon: Users,
      title: "Supportive Environment",
      description: "Supportive and learning-focused environment"
    },
    {
      icon: TrendingUp,
      title: "Competitive Package", 
      description: "Competitive salary with incentives"
    },
    {
      icon: Briefcase,
      title: "Growth Opportunities",
      description: "Training and professional growth opportunities"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Grow Your Career with Sensokart</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are always looking for motivated and skilled individuals to join our team.
          </p>
        </div>

        {/* Current Openings */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentOpenings.map((opening, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{opening.title}</h3>
                <p className="text-gray-600 mb-4">{opening.description}</p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {opening.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Work With Us */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Apply Now */}
        <div className="text-center bg-green-50 rounded-lg p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Apply Now</h2>
          <p className="text-gray-600 mb-6">
            Send your resume to <strong>careers@sensokart.com</strong> with the job role in the subject line.
          </p>
          <a
            href="mailto:careers@sensokart.com"
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors font-medium"
          >
            <Send className="w-5 h-5 mr-2" />
            Send Application
          </a>
        </div>
      </div>
    </div>
  )
}
