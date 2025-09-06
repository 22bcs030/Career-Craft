import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SimpleLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-[#0F0F0F] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F0F] via-[#121212] to-[#1A1A1A] opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(198,40,40,0.4),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_70%_80%,rgba(245,124,0,0.4),transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#C62828] via-[#F57C00] to-[#FFC107] bg-clip-text text-transparent">
                CareerCraft
              </span>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-[#E0E0E0]">AI-Powered Career Guidance Platform</p>
            <p className="text-lg md:text-xl mb-10 text-[#A0A0A0]">
              Navigate your career journey with personalized AI guidance, tools, and insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#C62828] to-[#F57C00] text-white hover:opacity-90 border-none">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#F57C00] text-[#F57C00] hover:bg-[#F57C00]/10">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section - Simplified */}
      <section id="features" className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#C62828] via-[#F57C00] to-[#FFC107] inline-block bg-clip-text text-transparent mb-4">
              Comprehensive Career Tools
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C62828] to-[#F57C00] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {simpleFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-[#121212] rounded-xl p-6 border border-[#282828] shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#F57C00]/50 group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C62828]/5 via-[#F57C00]/5 to-[#FFC107]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#FFC107] transition-colors">{feature.title}</h3>
                <p className="text-[#A0A0A0] mb-5">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#121212]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#C62828] rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#F57C00] rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto bg-[#121212] p-12 rounded-2xl border border-[#282828] shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Accelerate Your Career?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-[#A0A0A0]">
              Join thousands of professionals who have transformed their careers with CareerCraft's AI-powered guidance.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-[#C62828] to-[#F57C00] text-white hover:opacity-90 border-none shadow-lg shadow-[#C62828]/20 px-8 py-6 text-lg"
            >
              <Link href="/login">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-[#0F0F0F] text-[#A0A0A0] py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-[#A0A0A0]">&copy;AmitYadav - {new Date().getFullYear()} <span className="text-[#F57C00]">CareerCraft</span>. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const simpleFeatures = [
  {
    title: "AI Resume Builder",
    description: "Generate professional resumes efficiently with customizable templates and keyword optimization for ATS."
  },
  {
    title: "Cover Letter Generator",
    description: "Create personalized cover letters based on job descriptions with AI-driven suggestions for maximum impact."
  },
  {
    title: "Interview Preparation",
    description: "Practice with AI-generated mock interview questions and get real-time feedback on your responses."
  },
  {
    title: "Smart Job Search",
    description: "Discover job opportunities based on your profile and market trends with personalized notifications."
  }
]
