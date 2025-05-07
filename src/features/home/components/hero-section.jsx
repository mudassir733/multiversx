"use client"
import Link from "next/link"
import Image from "next/image"

// assets
import bg from "@/assets/images/bg.svg"
import SumLogo from "@/assets/images/SumLogo.png"

// ui components
import Header from "@/components/header"
import CounterSection from "@/features/home/components/counter-section"

export default function HeroSection() {


    return (
        <>
            <section className="bg-black w-full pt-2">
                <Header />
            </section>


            <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-teal-900 to-black">
                <div className="absolute inset-0 w-full h-full">
                    <Image src={bg} alt="background" />
                </div>



                <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col md:flex-row items-center min-h-screen">
                    <div className="w-full md:w-1/2 space-y-6 md:pr-8">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            Your Ultimate
                            <br />
                            Web3 hub
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nisi at orci dapibus eleifend.
                        </p>
                        <Link
                            href="#partner"
                            className="inline-block bg-teal-300 hover:bg-teal-400 text-black font-bold py-3 px-12 rounded-md transition-colors duration-300 uppercase text-center"
                        >
                            Be a partner
                        </Link>
                    </div>

                    {/* Right side - Logo */}
                    <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
                        <div className="relative">

                            <div className="w-64 h-80 relative">
                                <Image src={SumLogo} alt="logo" />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <CounterSection />
        </>

    )
}
