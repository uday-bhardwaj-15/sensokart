import HeroSection from '@/components/HeroSection'
import ProductTypesSection from '@/components/ProductTypesSection'
import CategoriesSection from '@/components/CategoriesSection'
import ParametersSection from '@/components/ParametersSection'
import ApplicationsSection from '@/components/ApplicationsSection'

// Mock data - in production, this would come from Sanity CMS
const heroData = {
  title: "Precision Instruments for Critical Industries",
  subtitle: "Reliable solutions for Oil & Gas, Pharmaceuticals, and Industrial Applications",
  description: "Your trusted partner for precision instruments and measurement solutions.",
  primaryButton: {
    text: "Explore Products",
    link: "/products"
  },
  secondaryButton: {
    text: "Get in Touch",
    link: "/contact"
  }
}

const productTypes = [
  {
    _id: "1",
    name: "Pressure Instruments",
    icon: "gauge",
    description: "High-precision pressure measurement solutions"
  },
  {
    _id: "2", 
    name: "Flow Meters",
    icon: "droplets",
    description: "Accurate flow measurement instruments"
  },
  {
    _id: "3",
    name: "Temperature Sensors", 
    icon: "thermometer",
    description: "Reliable temperature monitoring solutions"
  },
  {
    _id: "4",
    name: "Level Measurement",
    icon: "barChart3", 
    description: "Advanced level measurement technologies"
  }
]

const categories = [
  {
    _id: "1",
    name: "Pressure Instruments",
    icon: "thermometer",
    description: "High-precision pressure measurement"
  },
  {
    _id: "2",
    name: "Robust Design", 
    icon: "shield",
    description: "Built for harsh industrial environments"
  },
  {
    _id: "3",
    name: "Easy Integration",
    icon: "lightbulb",
    description: "Seamless integration with existing systems"
  },
  {
    _id: "4",
    name: "Low Maintenance",
    icon: "wrench",
    description: "Minimal maintenance requirements"
  }
]

const parameters = [
  {
    _id: "1",
    title: "High Accuracy",
    subtitle: "Reliable for that nuing solutions:",
    icon: "checkCircle"
  },
  {
    _id: "2", 
    title: "Robust Design",
    subtitle: "For easternustting",
    icon: "shield"
  },
  {
    _id: "3",
    title: "Easy Integration", 
    subtitle: "Deitairy materuized selifazzing",
    icon: "arrowLeftRight"
  },
  {
    _id: "4",
    title: "Low Maintenance",
    subtitle: "Custom officiencry", 
    icon: "wrench"
  }
]

const applications = [
  {
    _id: "1",
    title: "Oil & Gas",
    description: "Critical measurement solutions for oil and gas industry"
  },
  {
    _id: "2",
    title: "Processing Plants", 
    description: "Industrial process monitoring and control"
  },
  {
    _id: "3",
    title: "Pharmaceutical Industry",
    description: "Precision instruments for pharmaceutical manufacturing"
  },
  {
    _id: "4", 
    title: "Water & Wastewater",
    description: "Water treatment and wastewater management solutions"
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection {...heroData} />
      <ProductTypesSection productTypes={productTypes} />
      <CategoriesSection categories={categories} />
      <ParametersSection parameters={parameters} />
      <ApplicationsSection applications={applications} />
    </div>
  )
}