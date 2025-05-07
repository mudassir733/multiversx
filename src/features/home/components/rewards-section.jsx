import { Share2, BarChart3, Lock, Bitcoin, FileText, CheckCircle } from "lucide-react"
import Image from "next/image"

import el1 from "@/assets/images/el1.png"
import el2 from "@/assets/images/el2.png"
import el3 from "@/assets/images/el3.png"
import el4 from "@/assets/images/el4.png"
import el5 from "@/assets/images/el5.png"




export default function RewardsSection() {
    const rewardCards = [
        {
            icon: <Share2 className="w-10 h-10 text-teal-400" />,
            title: "Invite To Earn",
            description: "Invite Friends And Earn Rewards",
        },
        {
            icon: <BarChart3 className="w-10 h-10 text-teal-400" />,
            title: "Trade To Earn",
            description: "Trade Assets To Earn Rewards",
        },
        {
            icon: <Lock className="w-10 h-10 text-teal-400" />,
            title: "Stake To Earn",
            description: "Stake Your Assets To Earn",
        },
        {
            icon: <Bitcoin className="w-10 h-10 text-teal-400" />,
            title: "Lend To Earn",
            description: "Lend And Earn Interest",
        },
        {
            icon: <FileText className="w-10 h-10 text-teal-400" />,
            title: "Learn To Earn",
            description: "Learn Crypto And Earn",
        },
        {
            icon: <CheckCircle className="w-10 h-10 text-teal-400" />,
            title: "Complete To Earn",
            description: "Complete Tasks To Earn",
        },
    ]

    return (
        <>

            <section className="w-full py-24">

                <div className="flex flex-col items-center gap-5 px-4 justify-center">
                    <h1 className="pt-2 text-white md:text-[4rem] text-[3rem] leading-16 font-semibold md:w-[900px] text-center">
                        Customer management For Any
                        Web3 Protocol
                    </h1>
                    <p className="text-gray-400 text-center pt-6 text-[18px] md:w-[900px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nisi at orci dapibus eleifend. Cras malesuada est ut quam bibendum, nec sodales est aliquet.
                    </p>
                </div>
                <div className="relative bg-[#0a2f2a] w-full py-16  overflow-hidden mt-8" >
                    <div className="absolute top-0 left-0 w-32 h-32 ">
                        <Image src={el1} alt="el1" />
                    </div>
                    <div className="absolute left-[50%] -translate-x-1/2 top-[35%] w-[400px] h-[400px]">
                        <Image src={el2} alt="el2" />
                    </div>
                    <div className="absolute bottom-20 left-0 w-[250px] h-[250px] ">
                        <Image src={el4} alt="el4" />
                    </div>
                    <div className="absolute -bottom-5 right-0 w-[250px] h-[250px]">
                        <Image src={el5} alt="el5" />
                    </div>

                    <div className="absolute top-0 right-0 w-[350px] h-[350px]">
                        <Image src={el3} alt="el3" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-white text-center mb-12">
                            Earn Rewards With Every Action
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {rewardCards.map((card, index) => (
                                <div
                                    key={index}
                                    className="bg-teal-900/80 backdrop-blur-sm border border-teal-700 rounded-lg p-6 flex flex-col items-center text-center hover:bg-teal-900 transition-colors duration-300"
                                >
                                    <div className="bg-black rounded-full p-4 mb-4">{card.icon}</div>
                                    <h3 className="text-white text-xl font-semibold mb-2">{card.title}</h3>
                                    <p className="text-teal-100 text-sm">{card.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <p className="text-white text-xl font-medium">Unlock All Privileges With Sumex</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
