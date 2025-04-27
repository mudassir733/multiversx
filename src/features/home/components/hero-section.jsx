"use client"
import Link from "next/link"
import Image from "next/image"

// assets
import logo from "@/assets/images/logo.svg"
import glass from "@/assets/images/glass.webp"
import herobg from "@/assets/images/heroBg.webp"
import homeH from "@/assets/images/ring-h.webp"
import planet from "@/assets/images/planet.avif"
import google from "@/assets/images/google.svg"

// ui components
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

export default function HeroSection() {

    const rightButtonRef = useRef(null)

    useEffect(() => {
        const animateGradient = () => {
            if (!rightButtonRef.current) return

            const borderElement = rightButtonRef.current.querySelector(".animated-border")
            if (!borderElement) return

            let rotation = 0

            const animate = () => {
                rotation = (rotation + 0.5) % 360
                if (borderElement) {
                    borderElement.style.background = `linear-gradient(${rotation}deg, #9333ea, #ec4899, #3b82f6)`
                }
                requestAnimationFrame(animate)
            }

            animate()
        }

        animateGradient()
    }, [])



    return (
        <section className=" bg-black rounded-3xl w-full">
            <div className="relative w-full pb-7  overflow-hidden ">
                <div className="absolute -left-80 -bottom-50 w-1/2 h-full opacity-70 -rotate-20">
                    <Image src={herobg} alt="hero bg" />
                </div>

                <div className="absolute -left-60 -bottom-90 w-1/2 h-full opacity-70 -rotate-36">
                    <Image src={homeH} alt="ring bg" />
                </div>
                <div className="absolute -right-70 -bottom-20 w-1/2 h-full opacity-80 -rotate-75">
                    <Image src={glass} alt="glass" />
                </div>
                <div className="container mx-auto px-4 relative z-10">

                    <nav className="flex items-center justify-between py-6">
                        <div className="flex items-center">
                            <Link href="/">
                                <Image src={logo} alt="logo" width={150} height={150} />
                            </Link>
                        </div>
                        <div className="hidden md:flex space-x-11 text-sm">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                Individuals
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                Builders
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                Sovereign Chains
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                Ecosystem
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                Community
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                About
                            </Link>
                        </div>
                    </nav>
                    <div className="flex flex-col items-center text-center mt-20 md:mt-32 max-w-5xl mx-auto">
                        <div className="flex flex-col sm:flex-row gap-3 mb-8">
                            <Button
                                variant="outline"
                                className="bg-[#0A201D] cursor-pointer border border-[#0A201D] text-white hover:bg-[#0A201D] hover:text-white rounded-full px-4 py-1.5 h-auto flex items-center justify-center gap-1 hover:gap-2 transition-all duration-200"
                            >
                                <span className="bg-cyan-400 text-black text-xs font-bold px-2 py-0.5 rounded-full mr-2">NEW</span>
                                <span className="text-[#dadada] text-sm">join the Growth Games Grants Program</span>
                            </Button>

                            <div ref={rightButtonRef} className="relative rounded-full p-[1px] overflow-hidden">
                                <div className="animated-border absolute inset-0 rounded-full opacity-80"></div>
                                <Button
                                    variant="outline"
                                    className="relative bg-gradient-to-r from-[#221C24] cursor-pointer to-[#421B07] border-0 text-white hover:bg-black hover:text-white rounded-full px-4 py-1.5 h-auto w-full z-10"
                                >
                                    <span className="text-[#dadada] text-sm flex items-center gap-1 hover:gap-2 transition-all duration-200">AI Agents welcome <span>🔥</span></span>
                                </Button>
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-semibold text-white mb-8">The Internet-Scale Blockchain</h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mb-12">
                            MultiversX, the EGLD network, is a distributed blockchain network for next-gen applications. Decentralized
                            via 3,000+ nodes, scalable through sharding, fast, secure & green.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                variant="outline"
                                className="bg-zinc-900/80 text-white border-zinc-700 hover:bg-zinc-800 hover:text-white px-8 py-2 cursor-pointer  rounded-md"
                            >
                                <span className="mr-2">Explore the Ecosystem</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-layout-grid"
                                >
                                    <rect width="7" height="7" x="3" y="3" rx="1" />
                                    <rect width="7" height="7" x="14" y="3" rx="1" />
                                    <rect width="7" height="7" x="14" y="14" rx="1" />
                                    <rect width="7" height="7" x="3" y="14" rx="1" />
                                </svg>
                            </Button>
                            <Button className="bg-white hover:bg-white  text-black font-medium px-8 py-2 cursor-pointer hover:shadow-md hover:shadow-[#dadada] rounded-md">
                                <span className="mr-2">Start building</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-hammer"
                                >
                                    <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
                                    <path d="M17.64 15 22 10.64" />
                                    <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>



            </div>

            <div className="w-full px-4 py-12 md:py-16">
                <div className="w-full mx-auto">

                    <div className="md:flex gap-4 flex-col md:flex-row justify-center w-full">

                        <div className="flex gap-4 justify-end items-end flex-col">
                            <div className="bg-[#171717] md:w-[400px] w-full rounded-xl p-6 flex justify-between items-center">
                                <span className="text-gray-400 text-sm mb-2">
                                    Average Cost
                                    <br />
                                    per Transaction
                                </span>
                                <span className="text-[#dadada] text-4xl font-medium">~$0.002</span>
                            </div>

                            <div className="bg-[#171717]  md:w-[500px] w-full rounded-xl p-6 flex flex-col">
                                <span className="text-gray-400 text-sm mb-2">Total Transactions</span>
                                <span className="text-[#dadada] text-right text-4xl md:text-5xl font-medium">514,141,410</span>
                            </div>
                        </div>

                        <div className="bg-[#171717] rounded-xl mt-10 mb-5 md:mb-0 p-6 h-[200px] flex flex-col relative overflow-hidden md:col-span-2 lg:col-span-1 md:w-[400px] w-full">
                            <div className="absolute inset-0 opacity-30">
                                <div className="relative w-full h-full bg-[url(/world.webp)] bg-cover bg-no-repeat bg-center">

                                </div>
                            </div>
                            <span className="text-gray-400 absolute bottom-28 text-sm mb-2 z-10">Validator Nodes</span>
                            <span className="text-[#dadada] mt-[6rem] text-right text-4xl md:text-5xl font-medium z-10">3,621</span>
                        </div>

                        <div className="bg-[#171717] rounded-xl md:w-[300px] w-full p-6 flex flex-col relative overflow-hidden md:col-span-2 lg:col-span-1">
                            <div className="absolute top-0 right-0 w-1/2 h-full">
                                <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                                    <div className="relative w-40 h-40 md:w-48 md:h-48">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-400/20 blur-xl"></div>
                                        <Image
                                            src={planet}
                                            alt="Earth"
                                            width={200}
                                            height={200}
                                            className="absolute -rotate-180 inset-0 w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="z-10">
                                <span className="text-gray-400 text-sm mb-2">Efficient. Scalable. Global.</span>
                                <h3 className="text-[#8BFAB4] text-3xl md:text-4xl font-medium mt-4 mb-2">
                                    Carbon
                                    <br />
                                    Neutral
                                </h3>
                                <Button className="bg-[#8BFAB4] hover:bg-[#8bfab4c7] text-black mt-4 rounded-md px-4 py-1 h-8 text-sm">
                                    Sustainability

                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-16">
                        <p className="text-gray-500 text-center mb-8">
                            Integrations and tools from leading companies around the globe
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">

                            <div className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity">
                                <Image src={google} alt="google" />
                            </div>
                            <div className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity">
                                <Image src={google} alt="google" />
                            </div>
                            <div className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity">
                                <Image src={google} alt="google" />
                            </div>
                            <div className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity">
                                <Image src={google} alt="google" />
                            </div>
                            <div className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity">
                                <Image src={google} alt="google" />
                            </div>
                            <div className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity">
                                <Image src={google} alt="google" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
