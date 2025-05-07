"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"

import { useState } from "react"
import { Button } from "@/components/ui/button"



// assets
import footerIcon from "@/assets/images/footer1.webp"
import logo from "@/assets/images/logo.svg"
import spily from "@/assets/images/spily.png"
import footer from "@/assets/images/footer.webp"

export default function FooterNewsletter() {


    return (
        <section className=" relative mt-[50rem] lg:mt-0 md:mt-0">
            <footer className=" w-full bg-black rounded-4xl ">
                <div>
                    <Image src={spily} alt="" />
                </div>
            </footer>



            <footer className="bg-gradient-to-t from-black via-black to-transparent text-white absolute overflow-hidden w-full bottom-0">

                <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
                    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row mb-10 sm:mb-16 justify-between gap-8 sm:gap-10">

                        <div className="col-span-1 lg:col-span-1">
                            <div>
                                <Image src={logo} alt="logo" />
                            </div>
                            <p className="text-gray-300 mb-6 mt-4">
                                Subscribe to our newsletter for the latest updates on features and services.
                            </p>
                            <div className="space-y-4">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        placeholder="Your email here"
                                        className="bg-transparent border border-gray-700 rounded px-4 py-2 flex-grow focus:outline-none focus:border-teal-500"
                                    />
                                    <button className="bg-transparent border border-gray-700 hover:border-teal-500 text-white px-6 py-2 rounded transition-colors duration-300">
                                        Join
                                    </button>
                                </div>
                                <p className="text-gray-500 text-xs">
                                    By subscribing, you consent to our Privacy Policy and agree to receive updates.
                                </p>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="col-span-1">
                            <h3 className="text-white font-medium mb-6">Resources</h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                                        Ecosystem
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                                        Academy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                                        Community
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Connect */}
                        <div className="col-span-1">
                            <h3 className="text-white font-medium mb-6">Connect</h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                                        Testimonials
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                                        FAQs
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Stay Connected */}
                        <div className="col-span-1">
                            <h3 className="text-white font-medium mb-6">Stay Connected</h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link
                                        href="#"
                                        className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex items-center"
                                    >
                                        <Facebook className="w-5 h-5 mr-3" />
                                        Facebook
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex items-center"
                                    >
                                        <Instagram className="w-5 h-5 mr-3" />
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex items-center"
                                    >
                                        <Twitter className="w-5 h-5 mr-3" />X
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex items-center"
                                    >
                                        <Linkedin className="w-5 h-5 mr-3" />
                                        LinkedIn
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex items-center"
                                    >
                                        <Youtube className="w-5 h-5 mr-3" />
                                        YouTube
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 mt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 Dfend. All rights reserved.</p>
                            <div className="flex space-x-6">
                                <Link href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors duration-300">
                                    Privacy Policy
                                </Link>
                                <Link href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors duration-300">
                                    Terms of Service
                                </Link>
                                <Link href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors duration-300">
                                    Cookie Settings
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </section>
    )
}
