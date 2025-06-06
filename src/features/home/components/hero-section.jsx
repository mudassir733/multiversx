"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import SplitText from "@/components/splitText"
import { useParallax } from 'react-scroll-parallax';

// assets
import bg from "@/assets/images/bg.svg"
import SumLogo from "@/assets/images/SumLogo.png"

// ui components
import Header from "@/components/header"
import CounterSection from "@/features/home/components/counter-section"
import { useRef } from "react"
import GlowAndThreeWaves from "./GlowAndThreeWaves"

export default function HeroSection() {
    const { ref } = useParallax({ speed: -8 });

    const leftContentVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const rightContentVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    const logoAnimationVariants = {
        initial: { scale: 0.9, rotate: -5 },
        animate: {
            scale: 1,
            rotate: 0,
            transition: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
            },
        },
    }

    const floatingAnimation = {
        initial: { y: 0 },
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
            },
        },
    }

    const glowAnimation = {
        initial: { filter: "drop-shadow(0 0 0px rgba(45, 212, 191, 0.5))" },
        animate: {
            filter: [
                "drop-shadow(0 0 5px rgba(45, 212, 191, 0.5))",
                "drop-shadow(0 0 15px rgba(45, 212, 191, 0.7))",
                "drop-shadow(0 0 5px rgba(45, 212, 191, 0.5))",
            ],
            transition: {
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            },
        },
    }

    return (
        <>
            <section className="bg-black w-full pt-2">
                <Header />
            </section>

            <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br " ref={ref}>
                {/* <motion.div
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <Image src={bg || "/placeholder.svg"} alt="background" />
                </motion.div> */}
                <GlowAndThreeWaves />

                <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col md:flex-row items-center min-h-screen">

                    <motion.div
                        className="w-full md:w-1/2 space-y-6 md:pr-8 text-center lg:text-left"
                        initial="hidden"
                        animate="visible"
                        variants={leftContentVariants}
                    >
                        {/* <motion.h1
                            className="text-5xl text-center lg:text-left md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                            variants={itemVariants}
                        >
                            Your Ultimate
                            <br />
                            Web3 hub
                        </motion.h1> */}

                        <SplitText
                            text="Your Ultimate Web3 hub"
                            className="text-5xl text-center lg:text-left md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                            delay={150}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            easing="easeOutCubic"
                            threshold={0.2}
                            rootMargin="-50px"

                        />

                        <motion.p
                            className="text-lg md:text-xl text-center lg:text-left text-gray-200 max-w-lg"
                            variants={itemVariants}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nisi at orci dapibus eleifend.
                        </motion.p>

                        <motion.div className="flex items-center justify-center lg:justify-start mt-12" variants={itemVariants}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="#partner"
                                    className="inline-block bg-teal-300 hover:bg-teal-400 text-black font-bold py-3 px-12 rounded-md transition-colors duration-300 uppercase text-center"
                                >
                                    Be a partner
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>


                    <motion.div
                        className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0"
                        initial="hidden"
                        animate="visible"
                        variants={rightContentVariants}
                    >
                        <motion.div className="relative" initial="initial" animate="animate" variants={floatingAnimation}>
                            <motion.div
                                className="w-64 h-80 relative"
                                initial="initial"
                                animate="animate"
                                variants={logoAnimationVariants}
                            >
                                <motion.div initial="initial" animate="animate" variants={glowAnimation}>
                                    <Image src={SumLogo || "/placeholder.svg"} alt="logo" className="object-contain" />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <CounterSection />
        </>
    )
}
