import Link from "next/link"

export default function PartnersSection() {
    const partners = [
        { name: "jump", logo: "/logo1.png" },
        { name: "TOKERO", logo: "/logo2.png" },
        { name: "BINANCE", logo: "/logo3.png" },
        { name: "CoinDesk", logo: "/logo4.png" },
        { name: "bitcoin", logo: "/logo1.png" },
        { name: "crypto.com", logo: "/logo1.png" },
        { name: "theTradeDesk", logo: "/logo1.png" },
    ]

    return (
        <section className="w-full">
            <div className="flex items-center justify-center pb-12">
                <h1 className="pt-2 text-white md:text-[4rem] text-[3rem] leading-16 font-semibold md:w-[650px] text-center">
                    Our Partner
                </h1>
            </div>
            {/* Partners logos bar */}
            <div className="w-full bg-teal-800 py-8 px-4">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
                        {partners.map((partner, index) => (
                            <div key={index} className="h-8 flex items-center">
                                <div className="text-white font-bold">
                                    {partner.name === "jump" && (
                                        <span className="text-2xl">
                                            jump<span className="text-3xl">—</span>
                                        </span>
                                    )}
                                    {partner.name === "TOKERO" && (
                                        <span className="text-2xl">
                                            TOKERO<sup>+</sup>
                                        </span>
                                    )}
                                    {partner.name === "BINANCE" && (
                                        <div className="flex items-center">
                                            <span className="text-2xl mr-1">◆</span>
                                            <span className="text-2xl">BINANCE</span>
                                        </div>
                                    )}
                                    {partner.name === "CoinDesk" && <span className="text-2xl">CoinDesk</span>}
                                    {partner.name === "bitcoin" && (
                                        <div className="flex items-center">
                                            <span className="text-2xl mr-1">₿</span>
                                            <span className="text-2xl italic">bitcoin</span>
                                        </div>
                                    )}
                                    {partner.name === "crypto.com" && (
                                        <div className="flex items-center">
                                            <span className="text-2xl mr-1">⚪</span>
                                            <span className="text-2xl">crypto.com</span>
                                        </div>
                                    )}
                                    {partner.name === "theTradeDesk" && (
                                        <div className="flex items-center">
                                            <span className="text-2xl mr-1">⊙</span>
                                            <span className="text-2xl">theTradeDesk</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* View All button */}
            <div className="w-full py-12 px-4">
                <div className="container mx-auto flex justify-center">
                    <Link
                        href="#"
                        className="bg-teal-400 hover:bg-teal-500 text-black font-semibold py-3 px-12 rounded-md transition-colors duration-300 text-center min-w-[200px]"
                    >
                        VIEW ALL
                    </Link>
                </div>
            </div>
        </section>
    )
}
