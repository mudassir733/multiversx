import React from 'react'
import Image from 'next/image'

// assets
import planet from "@/assets/images/Planet.webp"
import outline from "@/assets/images/Outline.svg"
import obj5 from "@/assets/images/obj6.webp"
import obj7 from "@/assets/images/obj7.webp"




// ui component
import { Button } from '@/components/ui/button'

function PlanetSection() {
    return (
        <section>
            <div className='w-full flex items-center justify-center flex-col pb-10'>
                <Button className="cursor-pointer text-gray-400 bg-[#0A201D] rounded-full">The EGLD Token</Button>

                <h1 className='pt-2 text-white md:text-[4rem] text-[3rem] leading-16 font-semibold md:w-[650px] text-center'>Secured by EGLD</h1>

                <p className='text-gray-400 text-center pt-6 text-[18px] w-[400px]'>The native eGold token enables access and usage, provides security, reinforces growth, and ensures economic alignment for all stakeholders.</p>


                <div className='flex items-center gap-3 mt-4 flex-row-reverse'>
                    <Button
                        variant="outline"
                        className="bg-zinc-900/80 text-white border-zinc-700 hover:bg-zinc-800 hover:text-white px-8 py-2 cursor-pointer font-bold  rounded-md"
                    >
                        <span className="mr-2">What is EGLD?</span>
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
                    <Button className="bg-white hover:bg-white  text-black  px-8 py-2 cursor-pointer hover:shadow-md hover:shadow-[#dadada] rounded-md font-bold">
                        <span className="mr-2">Stack EGLD</span>

                    </Button>
                </div>
            </div>


            <div className='w-full  pb-10 md:px-12 overflow-hidden'>
                <div className='w-full relative h-screen bg-black z-50 rounded-2xl mt-[10rem]'>
                    <Image src={planet} alt='planet' className='md:w-[500px] w-[300px] h-[300px] md:h-[500px] object-contain absolute md:left-[30%] left-[20%] md:top-[5%]  top-[20%]' />
                    <div className='w-full absolute md:left-[25%] left-0 top-[25%] z-[40]'>
                        <h1 className=' text-white md:text-[4rem] text-[3rem] leading-16 font-semibold md:w-[650px] text-center'>Future-Proof <br />in Every Way</h1>

                        <p className='text-white text-center pt-6 text-[18px] md:ml-[67px] md:w-[500px]'>MultiversX is leading the way towards a more responsible and sustainable infrastructure for all digital things.</p>

                        <Button className="md:ml-[220px] ml-[100px] mt-8 bg-[#4ADE80] hover:bg-[#4ADE80] text-black font-semibold cursor-pointer py-3 px-6 text-[15px]">Learn about Sustainability</Button>
                    </div>
                    <Image src={outline} alt='planet' className='md:w-[700px] w-[400px] h-[400px] md:h-[700px] object-contain absolute md:left-[22%] left-[10%] md:-top-[10%] top-[10%] rotate-[2rad]' />

                    <Image src={obj5} alt='obj 5' className='absolute -top-[15%] w-[130px] h-[130px] -z-0' />

                    <Image src={obj7} alt='obj 5' className='absolute -top-[15%] w-[130px] h-[130px] -z-0 right-0' />
                </div>
            </div>
        </section>
    )
}

export default PlanetSection