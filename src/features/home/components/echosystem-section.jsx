import React from 'react'
import Image from 'next/image'

import echosystem from "@/assets/images/ecosystem.webp"

import { Button } from '@/components/ui/button'

function EchosystemSection() {
    return (
        <section className="flex flex-col lg:flex-row px-4 lg:px-0 items-center gap-6 lg:gap-8 -mt-24 lg:-mt-32">
            <div className="w-full lg:w-auto">
                <Image
                    src={echosystem}
                    width={900}
                    height={900}
                    alt="echo system"
                    className="w-full h-auto max-w-[600px] lg:max-w-[900px] mx-auto"
                />
            </div>

            <div className="w-full lg:w-auto flex flex-col items-center text-center lg:text-left">
                <h2 className="text-white text-2xl lg:text-3xl">
                    Explore the <br className="block lg:hidden" />Ecosystem
                </h2>
                <p className="text-gray-400 text-base lg:text-lg mt-3 lg:mt-4 w-full max-w-[280px] lg:w-[300px]">
                    Decentralized worlds and tokenized economies at internet scale.
                </p>

                <Button
                    className="bg-white hover:bg-white text-black mt-4 lg:mt-6 px-6 lg:px-8 py-1.5 lg:py-2 cursor-pointer hover:shadow-md hover:shadow-[#dadada] rounded-md font-bold"
                >
                    <span className="mr-2">Explore the Ecosystem</span>
                </Button>
            </div>
        </section>
    )
}

export default EchosystemSection