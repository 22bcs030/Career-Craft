import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Briefcase,
  FileText,
  Lightbulb,
  CheckCircle,
  MessageSquare,
  Search,
  Target,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
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
                <Link href="/dashboard">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#F57C00] text-[#F57C00] hover:bg-[#F57C00]/10">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#C62828] via-[#F57C00] to-[#FFC107] inline-block bg-clip-text text-transparent mb-4">
              Comprehensive Career Tools
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C62828] to-[#F57C00] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-[#121212] rounded-xl p-6 border border-[#282828] shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#F57C00]/50 group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C62828]/5 via-[#F57C00]/5 to-[#FFC107]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-[#C62828] to-[#F57C00] rounded-lg flex items-center justify-center mb-6 relative">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#FFC107] transition-colors">{feature.title}</h3>
                <p className="text-[#A0A0A0] mb-5">{feature.description}</p>
                <Link 
                  href={feature.link} 
                  className="text-[#F57C00] font-medium inline-flex items-center group-hover:text-[#FFC107] transition-colors"
                >
                  Explore <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#121212] relative">
        <div className="absolute inset-0 bg-[url('/logo.png')] opacity-[0.03] bg-repeat"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How CareerCraft Works</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F57C00] to-[#FFC107] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-0.5 bg-gradient-to-r from-transparent via-[#F57C00] to-transparent hidden md:block" 
                     style={{ display: index === 0 ? 'none' : '' }}></div>
                <div className="w-20 h-20 bg-gradient-to-br from-[#C62828] to-[#F57C00] rounded-full flex items-center justify-center mx-auto mb-8 text-white text-xl font-bold shadow-lg shadow-[#C62828]/20">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-[#A0A0A0] text-lg">{step.description}</p>
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
              <Link href="/dashboard">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F0F0F] text-[#A0A0A0] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-[#C62828] via-[#F57C00] to-[#FFC107] bg-clip-text text-transparent">
                  CareerCraft
                </span>
              </h3>
              <p className="mb-6">AI-powered career guidance for the modern professional.</p>
              <div className="flex space-x-4">
                <Link href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-[#282828] hover:border-[#F57C00] transition-colors">
                  <svg className="w-5 h-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-[#282828] hover:border-[#F57C00] transition-colors">
                  <svg className="w-5 h-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-[#282828] hover:border-[#F57C00] transition-colors">
                  <svg className="w-5 h-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-[#282828] hover:border-[#F57C00] transition-colors">
                  <svg className="w-5 h-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#F57C00] mb-6">Features</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="hover:text-[#FFC107] transition-colors">
                    Career Advice
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#FFC107] transition-colors">
                    Resume Builder
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#FFC107] transition-colors">
                    Interview Prep
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#FFC107] transition-colors">
                    Job Search
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#F57C00] mb-6">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="hover:text-[#FFC107] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#FFC107] transition-colors">
                    Career Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#FFC107] transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#FFC107] transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#F57C00] mb-6">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="hover:text-[#FFC107] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#FFC107] transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#FFC107] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#FFC107] transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#282828] mt-12 pt-8 text-center">
            <p className="text-[#A0A0A0]">&copy;AmitYadav - {new Date().getFullYear()} <span className="text-[#F57C00]">CareerCraft</span>. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    title: "Smart Interview Prep Tracker",
    description:
      "Stay on top of your interview practice with auto-generated and personalized todos. Track progress, set priorities, and never miss a topic.",
    icon: CheckCircle,
    link: "/todo",

  },
  {
    title: "AI Resume Builder",
    description:
      "Generate professional resumes efficiently with customizable templates and keyword optimization for ATS.",
    icon: FileText,
    link: "/resume",
  },
  {
    title: "Cover Letter Generator",
    description:
      "Create personalized cover letters based on job descriptions with AI-driven suggestions for maximum impact.",
    icon: MessageSquare,
    link: "/cover-letter",
  },
  {
    title: "Resume Analysis",
    description:
      "AI reviews your resume for structure, wording, and industry relevance with instant feedback for improvement.",
    icon: BarChart3,
    link: "/resume-analysis",
  },
  {
    title: "Interview Preparation",
    description: "Practice with AI-generated mock interview questions and get real-time feedback on your responses.",
    icon: Target,
    link: "/interview",
  },
  {
    title: "Smart Job Search",
    description: "Discover job opportunities based on your profile and market trends with personalized notifications.",
    icon: Search,
    link: "/job-search",
  },
  {
    title: "Skill Development",
    description:
      "Get recommendations for courses and training programs based on industry trends and your career goals.",
    icon: BookOpen,
    link: "/skill-development",
  },
  // {
  //   title: "Career Roadmap",
  //   description:
  //     "Visualize your career journey with a personalized step-by-step plan to achieve your professional goals.",
  //   icon: Zap,
  //   link: "/career-roadmap",
  // },
  // {
  //   title: "Internship Finder",
  //   description: "Students and freshers can discover relevant internships to kickstart their professional journey.",
  //   icon: Briefcase,
  //   link: "/internships",
  // },
]

const steps = [
  {
    title: "Create Your Profile",
    description: "Input your skills, experience, education, and career goals to get personalized guidance.",
  },
  {
    title: "Explore AI Tools",
    description: "Access our suite of AI-powered tools designed to enhance every aspect of your career journey.",
  },
  {
    title: "Accelerate Your Career",
    description: "Implement personalized recommendations and watch your professional growth take off.",
  },
]

