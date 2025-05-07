import React from 'react'
import Image from 'next/image'

import echosystem from "@/assets/images/ecosystem.webp"

import { Button } from '@/components/ui/button'

function EchosystemSection() {
    return (


        <>
            <div className='w-full mb-[10rem] lg:mb-0 px-4 flex flex-col items-center justify-center'>
                <h1 className='pt-2  text-white md:text-[4rem] text-[3rem] leading-16 font-semibold md:w-[650px] text-center'>Explore the ecosystem
                </h1>

                <p className='text-gray-400 text-center pt-6 text-[18px]'>MultiversX provides the infrastructure you need to tackle any use case.</p>
            </div>

            <section className="flex flex-col lg:flex-row px-4 lg:px-0 items-center gap-6 lg:gap-8 -mt-24 lg:mt-16">

                <div className="w-full lg:w-auto">
                    <Image
                        src={echosystem}
                        width={700}
                        height={700}
                        alt="echo system"
                        className="w-full h-auto max-w-[600px] lg:max-w-[900px] mx-auto"
                    />
                </div>

                <div className="w-full lg:w-auto flex flex-col items-center text-center lg:text-center">
                    <h2 className="text-white text-2xl lg:text-3xl lg:text-center">
                        Animation of s <br className="block lg:hidden" />various layer
                    </h2>
                    <p className="text-gray-400 text-base lg:text-lg mt-3 lg:mt-4 w-full max-w-[280px] lg:w-[300px]">
                        Decentralized worlds and tokenized economies at internet scale.
                    </p>

                </div>
            </section>
        </>
    )
}

export default EchosystemSection