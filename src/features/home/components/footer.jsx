"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Twitter, Facebook, Linkedin } from 'lucide-react';

import { useState } from "react"
import { Button } from "@/components/ui/button"

const NewTag = () => (
    <span className="inline-flex items-center justify-center rounded-sm bg-cyan-400/20 px-1.5 py-0.5 text-xs text-cyan-400 ml-2">
        NEW
    </span>
)

// assets
import footerIcon from "@/assets/images/footer1.webp"
import logo from "@/assets/images/logo.svg"
import footer from "@/assets/images/footer.webp"

export default function FooterNewsletter() {
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle newsletter signup
        console.log("Signing up with email:", email)
        // Reset form
        setEmail("")
    }

    return (
        <section className="px-4 py-4">
            <footer className=" w-full bg-black rounded-4xl overflow-hidden">

                <div className="relative w-full rounded-4xl overflow-hidden py-16 md">
                    <div className="absolute left-0 top-0 bottom-0 w-1/3 max-w-[700px] overflow-hidden">
                        <div className="absolute -left-[60%] -top-[20%] inset-0 w-full h-full">
                            <Image src={footerIcon} fill alt="footer icon" />
                        </div>
                    </div>

                    <div className="absolute right-0 top-0 bottom-0 w-1/3 max-w-[700px] overflow-hidden">
                        <div className="absolute left-[50%] rotate-45 -top-[30%] inset-0 w-full h-full">
                            <Image src={footerIcon} fill alt="footer icon" />
                        </div>
                    </div>
                    <div className="relative z-10 container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-white text-2xl md:text-2xl font-medium mb-8">
                                Stay in-the-know and never miss an update
                            </h2>

                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6 max-w-xl mx-auto">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter a valid email address"
                                    className="flex-grow bg-zinc-800/80 text-white rounded-md px-4 py-3 border border-zinc-700 focus:outline-none focus:bg-zinc-900/80 focus:ring-2 transition-all duration-200 focus:ring-zinc-900/80 focus:border-transparent"
                                    required
                                />
                                <Button type="submit" className="bg-cyan-400 h-full hover:bg-cyan-500 text-black font-medium py-4 px-6">
                                    Sign up
                                </Button>
                            </form>

                            <p className="text-gray-400 text-sm max-w-[450px] mx-auto leading-relaxed">
                                We're committed to your privacy. MultiversX uses the information you provide to us to contact you about
                                MultiversX content and events. You may unsubscribe from these communications at any time. For more
                                information, check out our{" "}
                                <a href="#" className="text-cyan-400 hover:underline">
                                    Privacy Policy
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row justify-between px-4 sm:px-8 md:px-20 mt-10 md:mt-20 gap-8 md:gap-0">

                    <div className="space-y-4">
                        <Link href="/">
                            <Image src={logo} alt="logo" width={150} height={150} />
                        </Link>

                        <div className="flex gap-3 items-center mt-10">
                            <Twitter color="#dadada" fill="#dadada" />
                            <Facebook color="#dadada" fill="#dadada" />
                            <Linkedin color="#dadada" fill="#dadada" />
                        </div>

                        <li>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Official Channels
                            </Link>
                        </li>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-white font-medium mb-6">Individuals</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Get Started
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    The EGLD Token
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    On-chain 2FA
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Staking
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Sustainability <ArrowUpRight className="ml-1 h-3 w-3" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Builders Column */}
                    <div className="space-y-4">
                        <h3 className="text-white font-medium mb-6">Builders</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Builders Hub
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Build a dApp in 30 minutes
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                                    Tutorials <NewTag />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Tools & Resources
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Hackathons
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Releases
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Tech Roadmap
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Documentation <ArrowUpRight className="ml-1 h-3 w-3" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Become a Validator <ArrowUpRight className="ml-1 h-3 w-3" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Ecosystem Column */}
                    <div className="space-y-4">
                        <h3 className="text-white font-medium mb-6">Ecosystem</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Discover
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                                    Grants <NewTag />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Partners
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Validators
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Service Providers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Community Column */}
                    <div className="space-y-4">
                        <h3 className="text-white font-medium mb-6">Community</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Events Calendar
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Full Shard Podcast <ArrowUpRight className="ml-1 h-3 w-3" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Governance <ArrowUpRight className="ml-1 h-3 w-3" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                                    Ambassadors Program <NewTag />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>




                <div className="flex justify-center md:px-0 px-4 md:items-center pt-10 pb-20 flex-col relative">
                    <div className="md:flex-row flex flex-col  md:items-center gap-3 pb-8">
                        <li>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Legal
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Responsible Disclosure Policy

                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">

                                Privacy Policy


                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Terms of Use
                            </Link>
                        </li>
                    </div>

                    <p className="text-gray-400 text-sm">© 2025 MultiversX. All rights reserved</p>

                    <div className="py-16">
                        <Image src={footer} alt="footer img" width={500} height={500} className="absolute md:-bottom-[100%] -bottom-[60%] md:left-[30%] left-[5%] sm:left-0 -rotate-180" />
                    </div>
                </div>
            </footer>


        </section>
    )
}
