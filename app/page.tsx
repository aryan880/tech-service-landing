import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Monitor,
  Cpu,
  HardDrive,
  Server,
  Wifi,
  Shield,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  Wrench,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function TechServiceLanding() {
  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "In-Home Computer Repairs",
      description: "Fast diagnosis and repair of desktop and laptop issues at your location",
      features: ["Hardware troubleshooting", "Software fixes", "Virus removal", "Performance optimization"],
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Custom PC Builds",
      description: "Tailored computer systems built to your exact specifications and budget",
      features: ["Gaming PCs", "Workstations", "Budget builds", "Component selection"],
    },
    {
      icon: <HardDrive className="h-8 w-8" />,
      title: "OS Reinstallations",
      description: "Clean operating system installations and data migration services",
      features: ["Windows installation", "macOS setup", "Linux distributions", "Data backup & restore"],
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Server Setup",
      description: "Professional server configuration for small businesses and home offices",
      features: ["File servers", "Media servers", "Backup solutions", "Remote access setup"],
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Network Optimization",
      description: "Improve your internet speed and network reliability",
      features: ["WiFi optimization", "Router configuration", "Network security", "Speed testing"],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Data Recovery",
      description: "Recover lost files from damaged or corrupted storage devices",
      features: ["Hard drive recovery", "SSD data rescue", "Photo recovery", "Document restoration"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Monitor className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Van Computers</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Phone className="h-4 w-4 mr-2" />
            Call Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            <MapPin className="h-3 w-3 mr-1" />
            Serving Vancouver, BC & Surrounding Areas
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Fast & Reliable
            <span className="text-blue-600 block">Computer Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional computer repair and tech services delivered to your door. From quick fixes to custom builds,
            we've got your technology needs covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              <Zap className="h-5 w-5 mr-2" />
              Get Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-blue-200 hover:bg-blue-50 bg-transparent"
            >
              <Phone className="h-5 w-5 mr-2" />
              (672) 699 4826
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Same-Day Service
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Licensed & Insured
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              30-Day Warranty
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-2" />
              5-Star Rated
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tech solutions for homes and small businesses in Surrey and the Lower Mainland
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-blue-100">
                <CardHeader>
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Van Computers?</h2>
              <p className="text-lg text-gray-600 mb-6">
                As a local, home-based computer service provider, we understand the unique needs of Vancouver residents
                and small businesses. With over 10 years of experience, we deliver personalized service that big box
                stores simply can't match.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 p-2 rounded-lg mr-4 mt-1">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Flexible Scheduling</h3>
                    <p className="text-gray-600">Evening and weekend appointments available to fit your schedule</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 p-2 rounded-lg mr-4 mt-1">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Local Expertise</h3>
                    <p className="text-gray-600">Deep knowledge of Surrey's tech landscape and community needs</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 p-2 rounded-lg mr-4 mt-1">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Trusted & Reliable</h3>
                    <p className="text-gray-600">Fully licensed, insured, and committed to your satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                  Vancouver
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                  Langley
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                  White Rock
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                  Delta
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                  Richmond
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                  Burnaby
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Travel Fee:</strong> Free within 10km of Vancouver Downtown. Minimal travel charges for
                  extended areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. We're here to solve your tech problems quickly and
            affordably.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-blue-100">
              <CardContent className="pt-6 text-center">
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Call or Text</h3>
                <p className="text-blue-600 font-semibold text-lg">(672) 699 4826</p>
                <p className="text-sm text-gray-600 mt-1">Available 7 days a week</p>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardContent className="pt-6 text-center">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Service Area</h3>
                <p className="text-gray-600">Vancouver, BC</p>
                <p className="text-sm text-gray-600 mt-1">& surrounding areas</p>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardContent className="pt-6 text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                <p className="text-gray-600">Same-day service</p>
                <p className="text-sm text-gray-600 mt-1">Emergency repairs available</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              <Phone className="h-5 w-5 mr-2" />
              Call (672) 699 4826
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-blue-200 hover:bg-blue-50 bg-transparent"
            >
              Request Quote Online
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">Van Computers</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted local computer service provider in Vancouver, BC. Professional computer repair and tech
                solutions delivered to your door.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Computer Repairs</li>
                <li>Custom PC Builds</li>
                <li>OS Reinstallations</li>
                <li>Server Setup</li>
                <li>Network Optimization</li>
                <li>Data Recovery</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (672)699 4826
                </p>
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Vancouver, BC & Area
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Van Computers. All rights reserved. Licensed & Insured.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
