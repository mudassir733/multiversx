"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"


import logo from "@/assets/images/logo.svg"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { scrollY } = useScroll()


    const headerOpacity = useTransform(scrollY, [0, 50], [1, 0.98])
    const headerScale = useTransform(scrollY, [0, 50], [1, 0.98])
    const headerY = useTransform(scrollY, [0, 50], [0, -5])
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    return (
        <motion.section
            className="w-full bg-black pb-20 px-6  "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.header
                className={`w-full bg-[#9EA2AA12]  border border-gray-800 rounded-lg px-4 lg:px-16 py-3 mx-auto my-2 max-w-7xl transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-black/70 mt-6 top-0  z-50 fixed" : ""}`}
                style={{
                    opacity: headerOpacity,
                    scale: headerScale,
                    y: headerY,
                }}
            >
                <div className="flex items-center justify-between">
                    <motion.div
                        className="flex items-center w-[100px] lg:w-[200px]"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <Link href="/" className="flex items-center">
                            <Image src={logo || "/placeholder.svg"} alt="logo" />
                        </Link>
                    </motion.div>

                    <div className="hidden md:flex items-center space-x-6">
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                            <Link href="/ecosystem" className="text-gray-300 hover:text-white text-sm">
                                Ecosystem
                            </Link>
                        </motion.div>

                        <div className="relative group">
                            <motion.button
                                className="flex items-center text-gray-300 hover:text-white text-sm"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                Academy
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </motion.button>
                            <motion.div
                                className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="py-1">
                                    <Link href="/academy/courses" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                                        Courses
                                    </Link>
                                    <Link href="/academy/tutorials" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                                        Tutorials
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

                        <div className="relative group">
                            <motion.button
                                className="flex items-center text-gray-300 hover:text-white text-sm"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                Community
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </motion.button>
                            <motion.div
                                className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="py-1">
                                    <Link href="/community/forum" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                                        Forum
                                    </Link>
                                    <Link href="/community/events" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                                        Events
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

                        <div className="relative group">
                            <motion.button
                                className="flex items-center text-gray-300 hover:text-white text-sm"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                About
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </motion.button>
                            <motion.div
                                className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="py-1">
                                    <Link href="/about/team" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                                        Team
                                    </Link>
                                    <Link href="/about/mission" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                                        Mission
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Link href="/app" className="text-white px-4 py-2 rounded-md text-sm">
                                Launch App
                            </Link>
                        </motion.div>
                    </div>

                    <div className="md:hidden">
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </motion.button>
                    </div>
                </div>


                {isOpen && (
                    <motion.div
                        className="md:hidden mt-4 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                            <Link href="/ecosystem" className="block text-gray-300 hover:text-white py-2">
                                Ecosystem
                            </Link>x
                        </motion.div>

                        <motion.div
                            className="py-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <button
                                className="flex items-center text-gray-300 hover:text-white w-full justify-between"
                                onClick={() => { }}
                            >
                                Academy
                                <ChevronDown className="h-4 w-4" />
                            </button>
                        </motion.div>

                        <motion.div
                            className="py-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <button
                                className="flex items-center text-gray-300 hover:text-white w-full justify-between"
                                onClick={() => { }}
                            >
                                Community
                                <ChevronDown className="h-4 w-4" />
                            </button>
                        </motion.div>

                        <motion.div
                            className="py-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <button
                                className="flex items-center text-gray-300 hover:text-white w-full justify-between"
                                onClick={() => { }}
                            >
                                About
                                <ChevronDown className="h-4 w-4" />
                            </button>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                            <Link
                                href="/app"
                                className="block bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-center"
                            >
                                Launch App
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </motion.header>
        </motion.section>
    )
}
