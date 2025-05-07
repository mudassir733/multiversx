"use client"

import { useEffect, useState, useRef } from "react"

export default function CounterSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    const [projectCount, setProjectCount] = useState(0)
    const [teamCount, setTeamCount] = useState(0)
    const [yearCount, setYearCount] = useState(0)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 },
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

    useEffect(() => {
        if (isVisible) {
            const projectInterval = setInterval(() => {
                setProjectCount((prev) => {
                    if (prev < 200) return prev + 4
                    clearInterval(projectInterval)
                    return 200
                })
            }, 30)

            const teamInterval = setInterval(() => {
                setTeamCount((prev) => {
                    if (prev < 20) return prev + 1
                    clearInterval(teamInterval)
                    return 20
                })
            }, 100)

            const yearInterval = setInterval(() => {
                setYearCount((prev) => {
                    if (prev < 15) return prev + 1
                    clearInterval(yearInterval)
                    return 15
                })
            }, 150)

            return () => {
                clearInterval(projectInterval)
                clearInterval(teamInterval)
                clearInterval(yearInterval)
            }
        }
    }, [isVisible])

    return (
        <section ref={sectionRef} className="w-full absolute lg:-bottom-[20rem] -bottom-[50rem] py-[10rem] z-50 lg:py-20 bg-gradient-to-t from-black via-black to-transparent">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-24">

                    <div className="flex flex-col items-center text-center w-full md:w-1/3 mb-10 md:mb-0">
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">+{projectCount}</h2>
                        <p className="text-gray-200 text-lg">
                            <span className="font-semibold">Projects</span> Developed and Launched
                        </p>
                        <div className="w-64 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mt-6 rounded-full"></div>
                    </div>


                    <div className="flex flex-col items-center text-center w-full md:w-1/3 mb-10 md:mb-0">
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">+{teamCount}</h2>
                        <p className="text-gray-200 text-lg">
                            dedicated <span className="font-semibold">team members</span>
                        </p>
                        <div className="w-64 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mt-6 rounded-full"></div>
                    </div>


                    <div className="flex flex-col items-center text-center w-full md:w-1/3">
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">+{yearCount}</h2>
                        <p className="text-gray-200 text-lg">
                            years of <span className="font-semibold">quality service.</span>
                        </p>
                        <div className="w-64 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mt-6 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
