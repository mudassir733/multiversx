import Link from "next/link"

export default function CTASection() {
    return (
        <div className="container mx-auto px-4 pb-12">
            <div className="bg-[#041c19] rounded-3xl h-[300px] shadow-[#041c19] shadow-lg p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="max-w-2xl mb-6 md:mb-0">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Partner with Us?</h2>
                    <p className="text-white text-lg">
                        Join the many clients who trust SUMEX 3D to protect their assets and secure their legacies.
                    </p>
                </div>
                <div className="flex items-center justify-center lg:justify-end w-full">
                    <Link
                        href="#contact"
                        className="bg-teal-400 hover:bg-teal-500 text-black font-medium py-3 px-6 rounded-lg  transition-colors duration-300"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </div>
    )
}
