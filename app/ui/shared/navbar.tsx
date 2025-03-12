"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white  backdrop-blur-sm",
                isScrolled ? "shadow-sm" : "",
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-black">
                            Taxrcompany.
                        </Link>
                        {/* <div className="ml-4 bg-yellow-100 rounded-full px-3 py-1 text-xs md:text-sm">
                            <span className="text-yellow-800">🎉 New! Company tax returns</span>
                        </div> */}
                    </div>

                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="#services" className="text-gray-700 hover:text-blue-600">
                            Services
                        </Link>
                        <Link href="#help" className="text-gray-700 hover:text-blue-600">
                            Who we can help
                        </Link>
                        <Link href="#resources" className="text-gray-700 hover:text-blue-600">
                            Resources
                        </Link>
                        <Link href="#about" className="text-gray-700 hover:text-blue-600">
                            About us
                        </Link>
                        <Link href="#login" className="text-gray-700 hover:text-blue-600">
                            Log in
                        </Link>
                        <Link
                            href="#get-started"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                        >
                            Get started
                        </Link>
                    </nav>

                    <button className="md:hidden text-gray-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

