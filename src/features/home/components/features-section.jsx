"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

// assets
import grid1 from "@/assets/images/grid1.webp"
import grid2 from "@/assets/images/grid2.webp"
import grid3 from "@/assets/images/grid3.webp"
import grid4 from "@/assets/images/grid4.webp"
import grid5 from "@/assets/images/grid5.webp"
import grid6 from "@/assets/images/grid6.webp"
import grid7 from "@/assets/images/grid7.webp"
import grid8 from "@/assets/images/grid8.webp"

// ui components
import { Button } from "@/components/ui/button"

function FeaturesSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            {
                threshold: 0.3,
                rootMargin: "0px 0px -100px 0px"
            }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.disconnect()
            }
        }
    }, [])

    // Animation variants
    const headerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    }

    const fromLeftVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    }

    const fromRightVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    }

    const fromBottomVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    }

    // Image hover animations
    const imageHoverVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    }

    return (
        <section ref={sectionRef} className="lg:py-20 pb-20 lg:pb-0 lg:mt-36">
            <motion.div
                className="w-full px-4 flex flex-col items-center justify-center"
                variants={headerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
            >
                <Button className="cursor-pointer text-gray-400 bg-[#0A201D] rounded-full">Builders</Button>
                <h1 className="pt-2 text-white md:text-[4rem] text-[3rem] leading-16 font-semibold md:w-[650px] text-center">
                    Why Sumex?
                </h1>
                <p className="text-gray-400 text-center pt-6 text-[18px]">
                    MultiversX provides the infrastructure you need to tackle any use case.
                </p>
            </motion.div>

            <div>
                <div className="min-h-screen p-4 md:p-6 lg:p-8 lg:px-6 px-4">
                    <motion.div
                        className="max-w-7xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <motion.div
                                className="bg-[#171717] rounded-3xl p-6 flex flex-col justify-between h-[340px] hover:bg-zinc-800/90 overflow-hidden transition-all duration-300"
                                variants={fromLeftVariants}
                                whileHover={{ y: -5 }}
                            >
                                <motion.div className="w-32 h-32 mb-auto" variants={imageHoverVariants} initial="initial" whileHover="hover">
                                    <div className="relative w-[300px] h-[300px]">
                                        <motion.div >
                                            <Image
                                                src={grid1 || "/placeholder.svg"}
                                                alt="grid1"
                                                width={200}
                                                height={200}
                                                className="absolute -top-20 left-[10px]"
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                                <h3 className="text-white text-[24px] font-medium mt-4">
                                    Native
                                    <br />
                                    Assets
                                </h3>
                            </motion.div>
                            <motion.div
                                className="bg-[#171717] rounded-3xl p-6 flex flex-col justify-between h-[340px] hover:bg-zinc-800/90 overflow-hidden transition-all duration-300"
                                variants={fromRightVariants}
                                whileHover={{ y: -5 }}
                            >
                                <h3 className="text-white text-center text-[24px] font-medium mt-4">
                                    Safest User
                                    <br />
                                    Experience
                                </h3>
                                <motion.div className="w-32 h-32 mb-auto" variants={imageHoverVariants} initial="initial" whileHover="hover">
                                    <div className="relative w-[300px] h-[300px]">
                                        <motion.div >
                                            <Image
                                                src={grid2 || "/placeholder.svg"}
                                                alt="grid2"
                                                width={240}
                                                height={240}
                                                className="absolute -bottom-0 left-[10px]"
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>


                            <motion.div
                                className="bg-[#171717] lg:col-span-2 rounded-3xl p-6 flex flex-col justify-between h-[340px] hover:bg-zinc-800/90 transition-all duration-300"
                                variants={fromBottomVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex gap-2 items-center w-full relative h-full">
                                    <h3 className="text-white text-[24px] font-medium mt-4 absolute bottom-0">
                                        30%
                                        <br />
                                        Developer
                                        <br />
                                        Royalties
                                    </h3>
                                    <p className="text-gray-400 w-[200px] absolute lg:bottom-0 lg:right-20">
                                        Developers get 30% of the gas fee every time someone calls their smart contract
                                    </p>
                                </div>
                            </motion.div>


                            <motion.div
                                className="bg-[#171717] rounded-3xl p-6 flex flex-col justify-between h-[340px] hover:bg-zinc-800/90 overflow-hidden transition-all duration-300"
                                variants={fromLeftVariants}
                                whileHover={{ y: -5 }}
                            >
                                <motion.div className="w-32 h-32 mb-auto" variants={imageHoverVariants} initial="initial" whileHover="hover">
                                    <div className="relative w-[300px] h-[300px]">
                                        <motion.div >
                                            <Image
                                                src={grid3 || "/placeholder.svg"}
                                                alt="grid3"
                                                width={270}
                                                height={270}
                                                className="absolute -top-30 -right-24"
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                                <h3 className="text-white text-[24px] font-medium mt-4">
                                    Adaptive State
                                    <br />
                                    Sharding
                                </h3>
                                <p className="text-gray-400 pt-2">
                                    The first to present a viable solution where all three aspects of sharding are live
                                </p>
                            </motion.div>

                            <motion.div
                                className="bg-[#171717] rounded-3xl p-6 flex flex-col justify-between h-[340px] hover:bg-zinc-800/90 overflow-hidden transition-all duration-300"
                                variants={fromRightVariants}
                                whileHover={{ y: -5 }}
                            >
                                <motion.div className="w-32 h-32 mb-auto" variants={imageHoverVariants} initial="initial" whileHover="hover">
                                    <div className="relative w-[300px] h-[300px]">
                                        <motion.div >
                                            <Image
                                                src={grid3 || "/placeholder.svg"}
                                                alt="grid3"
                                                width={270}
                                                height={270}
                                                className="absolute -top-28 -left-32"
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                                <h3 className="text-white text-[24px] font-medium mt-4">
                                    Adaptive State
                                    <br />
                                    Sharding
                                </h3>
                                <p className="text-gray-400 pt-2">
                                    The first to present a viable solution where all three aspects of sharding are live
                                </p>
                            </motion.div>


                            <motion.div
                                className="bg-[#171717] rounded-3xl p-6 flex flex-col justify-between h-[340px] hover:bg-zinc-800/90 overflow-hidden transition-all duration-300"
                                variants={fromBottomVariants}
                                whileHover={{ y: -5 }}
                            >
                                <motion.div className="w-32 h-32 mb-auto" variants={imageHoverVariants} initial="initial" whileHover="hover">
                                    <div className="relative w-[300px] h-[300px]">
                                        <motion.div >
                                            <Image
                                                src={grid4 || "/placeholder.svg"}
                                                alt="grid4"
                                                width={270}
                                                height={270}
                                                className="absolute bottom-[-50%] transform translate-[-50%] left-[30%]"
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                                <h3 className="text-white text-[24px] font-medium mt-4">
                                    Adaptive State
                                    <br />
                                    Sharding
                                </h3>
                                <p className="text-gray-400 pt-2">
                                    The first to present a viable solution where all three aspects of sharding are live
                                </p>
                            </motion.div>


                            <motion.div
                                className="bg-[#171717] rounded-3xl p-6 flex flex-col justify-between h-[340px] hover:bg-zinc-800/90 overflow-hidden transition-all duration-300"
                                variants={fromLeftVariants}
                                whileHover={{ y: -5 }}
                            >
                                <h3 className="text-white text-[24px] font-medium mt-4">
                                    Resilient and
                                    <br />
                                    Battle-Tested
                                </h3>
                                <motion.div className="w-32 h-32 mb-auto" variants={imageHoverVariants} initial="initial" whileHover="hover">
                                    <div className="relative w-[300px] h-[300px]">
                                        <motion.div >
                                            <Image
                                                src={grid5 || "/placeholder.svg"}
                                                alt="grid5"
                                                width={270}
                                                height={270}
                                                className="absolute -bottom-0 right-0"
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>


                            <motion.div
                                className="bg-[#171717] rounded-3xl p-6 flex flex-col justify-between h-[340px] hover:bg-zinc-800/90 overflow-hidden transition-all duration-300"
                                variants={fromRightVariants}
                                whileHover={{ y: -5 }}
                            >
                                <h3 className="text-white text-[24px] font-medium mt-4">
                                    Resilient and
                                    <br />
                                    Battle-Tested
                                </h3>
                                <motion.div className="w-32 h-32 mb-auto" variants={imageHoverVariants} initial="initial" whileHover="hover">
                                    <div className="relative w-[350px] h-[350px]">
                                        <motion.div >
                                            <Image
                                                src={grid6 || "/placeholder.svg"}
                                                alt="grid6"
                                                width={350}
                                                height={350}
                                                className="absolute bottom-10 right-10"
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>


                            <motion.div
                                className="bg-[#171717] lg:col-span-2 rounded-3xl p-6 flex flex-col justify-between h-[340px] hover:bg-zinc-800/90 overflow-hidden transition-all duration-300 relative"
                                variants={fromBottomVariants}
                                whileHover={{ y: -5 }}
                            >
                                <h3 className="text-white top-[35%] left-[30%] absolute text-[35px] font-medium mt-4">
                                    Sovereign Chains
                                </h3>
                                <motion.div className="w-32 h-32 mb-auto" variants={imageHoverVariants} initial="initial" whileHover="hover">
                                    <div className="relative w-[700px] h-[700px]">
                                        <motion.div >
                                            <Image
                                                src={grid7 || "/placeholder.svg"}
                                                alt="grid7"
                                                width={700}
                                                height={700}
                                                className="absolute -top-[20%] right-10"
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>


                            <motion.div
                                className="bg-[#171717] rounded-3xl p-6 flex flex-col justify-between h-[340px] hover:bg-zinc-800/90 overflow-hidden transition-all duration-300"
                                variants={fromLeftVariants}
                                whileHover={{ y: -5 }}
                            >
                                <motion.div className="w-32 h-32 mb-auto" variants={imageHoverVariants} initial="initial" whileHover="hover">
                                    <div className="relative w-[300px] h-[300px]">
                                        <motion.div >
                                            <Image
                                                src={grid8 || "/placeholder.svg"}
                                                alt="grid8"
                                                width={300}
                                                height={300}
                                                className="absolute top-0 -left-20"
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                                <h3 className="text-white text-center text-[24px] font-medium mt-4">Decentralized</h3>
                                <p className="text-gray-400 text-center">3,200+ validator nodes</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
