import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SimpleHeader() {
  return (
    <header className="fixed top-0 w-full border-b border-[#282828] bg-[#0F0F0F]/90 backdrop-blur-md z-50 shadow-md">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="relative group block overflow-hidden">
          <div className="relative h-12 py-1 flex items-center">
            {/* Text with gradient effect */}
            <div className="font-bold text-2xl tracking-tight">
              <span className="bg-gradient-to-r from-[#C62828] via-[#F57C00] to-[#FFC107] bg-clip-text text-transparent">Career</span>
              <span className="bg-gradient-to-r from-[#F57C00] via-[#FFC107] to-[#C62828] bg-clip-text text-transparent">Craft</span>
            </div>
          </div>
          
          {/* Animated underline */}
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#C62828] to-[#F57C00] transition-all duration-300 group-hover:w-full"></div>
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Button asChild variant="outline" className="border-[#F57C00] text-[#F57C00] hover:bg-[#F57C00]/10">
            <Link href="/login">Sign In</Link>
          </Button>
          <Button asChild className="bg-gradient-to-r from-[#C62828] to-[#F57C00] text-white hover:opacity-90 border-none">
            <Link href="/register">Sign Up</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
