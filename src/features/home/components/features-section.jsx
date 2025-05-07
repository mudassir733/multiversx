import React from 'react'
import Image from 'next/image'

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
import { Button } from '@/components/ui/button'

function FeaturesSection() {
    return (
        <section className='py-20 mt-36'>
            <div className='w-full px-4 flex flex-col items-center justify-center'>
                <Button className="cursor-pointer text-gray-400 bg-[#0A201D] rounded-full">Builders</Button>
                <h1 className='pt-2 text-white md:text-[4rem] text-[3rem] leading-16 font-semibold md:w-[650px] text-center'>Why Sumex?
                </h1>

                <p className='text-gray-400 text-center pt-6 text-[18px]'>MultiversX provides the infrastructure you need to tackle any use case.</p>
            </div>


            <div>
                <div className="min-h-screen p-4 md:p-6 lg:p-8 lg:px-6 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <div className="bg-[#171717] rounded-3xl p-6 flex flex-col justify-between h-[340px] hover:bg-zinc-800/90 overflow-hidden transition-all duration-300">
                                <div className="w-32 h-32 mb-auto">
                                    <div className="relative w-[300px] h-[300px]">
                                        <Image src={grid1} alt='grid1' width={200} height={200} className='absolute -top-20 left-[10px]' />
                                    </div>
                                </div>
                                <h3 className="text-white text-[24px] font-medium mt-4">
                                    Native
                                    <br />
                                    Assets
                                </h3>
                            </div>


                            <div className="bg-[#171717] rounded-3xl p-6 flex flex-col justify-between h-[340px] hover:bg-zinc-800/90 overflow-hidden transition-all duration-300">

                                <h3 className="text-white text-center text-[24px] font-medium mt-4">
                                    Safest User
                                    <br />
                                    Experience
                                </h3>
                                <div className="w-32 h-32 mb-auto">
                                    <div className="relative w-[300px] h-[300px]">
                                        <Image src={grid2} alt='grid1' width={240} height={240} className='absolute -bottom-0 left-[10px]' />
                                    </div>
                                </div>

                            </div>
                            <div className="bg-[#171717] lg:col-span-2 rounded-3xl p-6 flex flex-col justify-between h-[340px] hover:bg-zinc-800/90 transition-all duration-300">
                                <div className='flex gap-2 items-center w-full relative h-full'>
                                    <h3 className="text-white text-[24px] font-medium mt-4 absolute bottom-0">
                                        30%
                                        <br />
                                        Developer
                                        <br />
                                        Royalties
                                    </h3>

                                    <p className='text-gray-400 w-[200px] absolute lg:bottom-0 lg:right-20'>Developers get 30% of the gas fee every time someone calls their smart contract</p>
                                </div>
                            </div>



                            <div className="bg-[#171717] rounded-3xl p-6 flex flex-col justify-between h-[340px] hover:bg-zinc-800/90 overflow-hidden transition-all duration-300">
                                <div className="w-32 h-32 mb-auto">
                                    <div className="relative w-[300px] h-[300px]">
                                        <Image src={grid3} alt='grid1' width={270} height={270} className='absolute -top-30 -right-24' />
                                    </div>
                                </div>
                                <h3 className="text-white text-[24px] font-medium mt-4">
                                    Adaptive State
                                    <br />
                                    Sharding
                                </h3>
                                <p className='text-gray-400 pt-2'>The first to present a viable solution where all three aspects of sharding are live</p>
                            </div>


                            <div className="bg-[#171717] rounded-3xl p-6 flex flex-col justify-between h-[340px] hover:bg-zinc-800/90 overflow-hidden transition-all duration-300">
                                <div className="w-32 h-32 mb-auto">
                                    <div className="relative w-[300px] h-[300px]">
                                        <Image src={grid3} alt='grid1' width={270} height={270} className='absolute -top-28 -left-32' />
                                    </div>
                                </div>
                                <h3 className="text-white text-[24px] font-medium mt-4">
                                    Adaptive State
                                    <br />
                                    Sharding
                                </h3>
                                <p className='text-gray-400 pt-2'>The first to present a viable solution where all three aspects of sharding are live</p>
                            </div>




                            <div className="bg-[#171717] rounded-3xl p-6 flex flex-col justify-between h-[340px] hover:bg-zinc-800/90 overflow-hidden transition-all duration-300">
                                <div className="w-32 h-32 mb-auto">
                                    <div className="relative w-[300px] h-[300px]">
                                        <Image src={grid4} alt='grid1' width={270} height={270} className='absolute bottom-[-50%] transform translate-[-50%] left-[30%]' />
                                    </div>
                                </div>
                                <h3 className="text-white text-[24px] font-medium mt-4">
                                    Adaptive State
                                    <br />
                                    Sharding
                                </h3>
                                <p className='text-gray-400 pt-2'>The first to present a viable solution where all three aspects of sharding are live</p>
                            </div>




                            <div className="bg-[#171717] rounded-3xl p-6 flex flex-col justify-between h-[340px] hover:bg-zinc-800/90 overflow-hidden transition-all duration-300">
                                <h3 className="text-white text-[24px] font-medium mt-4">
                                    Resilient and
                                    <br />
                                    Battle-Tested
                                </h3>
                                <div className="w-32 h-32 mb-auto">
                                    <div className="relative w-[300px] h-[300px]">
                                        <Image src={grid5} alt='grid1' width={270} height={270} className='absolute -bottom-0 right-0' />
                                    </div>
                                </div>

                            </div>



                            <div className="bg-[#171717] rounded-3xl p-6 flex flex-col justify-between h-[340px] hover:bg-zinc-800/90 overflow-hidden transition-all duration-300">
                                <h3 className="text-white text-[24px] font-medium mt-4">
                                    Resilient and
                                    <br />
                                    Battle-Tested
                                </h3>
                                <div className="w-32 h-32 mb-auto">
                                    <div className="relative w-[350px] h-[350px]">
                                        <Image src={grid6} alt='grid1' width={350} height={350} className='absolute bottom-10 right-10' />
                                    </div>
                                </div>

                            </div>


                            <div className="bg-[#171717] lg:col-span-2 rounded-3xl p-6 flex flex-col justify-between h-[340px] hover:bg-zinc-800/90 overflow-hidden transition-all duration-300 relative">

                                <h3 className="text-white top-[35%] left-[30%] absolute text-[35px] font-medium mt-4">
                                    Sovereign Chains
                                </h3>

                                <div className="w-32 h-32 mb-auto">
                                    <div className="relative w-[700px] h-[700px]">
                                        <Image src={grid7} alt='grid1' width={700} height={700} className='absolute -top-[20%]  right-10' />
                                    </div>
                                </div>

                            </div>


                            <div className="bg-[#171717] rounded-3xl p-6 flex flex-col justify-between h-[340px] hover:bg-zinc-800/90 overflow-hidden transition-all duration-300">
                                <div className="w-32 h-32 mb-auto">
                                    <div className="relative w-[300px] h-[300px]">
                                        <Image src={grid8} alt='grid1' width={300} height={300} className='absolute top-0 -left-20' />
                                    </div>
                                </div>
                                <h3 className="text-white text-center text-[24px] font-medium mt-4">
                                    Decentralized
                                </h3>
                                <p className='text-gray-400 text-center'>3,200+ validator nodes</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default FeaturesSection