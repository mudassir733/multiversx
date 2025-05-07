"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import Image from "next/image"


import logo from "@/assets/images/logo.svg"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className="w-full bg-black pb-20 px-6">
            <header className="w-full bg-[#9EA2AA12] border border-gray-800 rounded-lg px-16 py-3 mx-auto my-2 max-w-7xl">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image src={logo} alt="logo" />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/ecosystem" className="text-gray-300 hover:text-white text-sm">
                            Ecosystem
                        </Link>

                        <div className="relative group">
                            <button className="flex items-center text-gray-300 hover:text-white text-sm">
                                Academy
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <div className="py-1">
                                    <Link href="/academy/courses" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                                        Courses
                                    </Link>
                                    <Link href="/academy/tutorials" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                                        Tutorials
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <button className="flex items-center text-gray-300 hover:text-white text-sm">
                                Community
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <div className="py-1">
                                    <Link href="/community/forum" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                                        Forum
                                    </Link>
                                    <Link href="/community/events" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                                        Events
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <button className="flex items-center text-gray-300 hover:text-white text-sm">
                                About
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <div className="py-1">
                                    <Link href="/about/team" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                                        Team
                                    </Link>
                                    <Link href="/about/mission" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                                        Mission
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link href="/app" className="  text-white px-4 py-2 rounded-md text-sm">
                            Launch App
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 space-y-2">
                        <Link href="/ecosystem" className="block text-gray-300 hover:text-white py-2">
                            Ecosystem
                        </Link>

                        <div className="py-2">
                            <button
                                className="flex items-center text-gray-300 hover:text-white w-full justify-between"
                                onClick={() => { }}
                            >
                                Academy
                                <ChevronDown className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="py-2">
                            <button
                                className="flex items-center text-gray-300 hover:text-white w-full justify-between"
                                onClick={() => { }}
                            >
                                Community
                                <ChevronDown className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="py-2">
                            <button
                                className="flex items-center text-gray-300 hover:text-white w-full justify-between"
                                onClick={() => { }}
                            >
                                About
                                <ChevronDown className="h-4 w-4" />
                            </button>
                        </div>

                        <Link href="/app" className="block bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-center">
                            Launch App
                        </Link>
                    </div>
                )}
            </header>
        </section>
    )
}
