
"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

export function Footer() {
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const checkIfMobile = () => {
                setMobile(window.innerWidth < 1024)
            }

            checkIfMobile()
            window.addEventListener('resize', checkIfMobile)
            return () => window.removeEventListener('resize', checkIfMobile)
        }
    }, [])
    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-8 lg:mb-12">
                    <div className="flex items-center space-x-2 ">
                        {!mobile && <Image src={"/images/logo.png"} alt="Logo" width={150} height={43} />}
                        
                        {mobile && <Image src="/images/mobile-logo.svg" alt="Logo" width={80} height={30} />}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="order-2 md:order-1">
                        <h3 className="text-yellow-500 font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#rent"
                                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                                >
                                    Rent
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#sell"
                                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                                >
                                    Sell
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                                >
                                    Upcoming Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#blog"
                                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="order-3 md:order-1">
                        <h3 className="text-yellow-500 font-semibold mb-4">
                            Acknowledgement
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#terms"
                                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                                >
                                    Terms and Condition
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#property"
                                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                                >
                                    Property Management
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#faq"
                                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#privacy"
                                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#refund"
                                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                                >
                                    Refund Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="order-1 md:order-1">
                        <h3 className="text-yellow-500 font-semibold mb-4">Contact</h3>
                        <div className="mb-6 sm:hidden">
                            <p className="text-gray-300 text-sm leading-relaxed">
                                AG-4, F Zone, Rose Mansion,
                                <br />
                                Ayyappaswamy Temple Road,
                                <br />
                                Belathur, Kadugodi,
                                <br />
                                Bengaluru, Karnataka – 560067
                            </p>
                        </div>
                        <div className="space-y-4">
                            <a
                                href="tel:+919508161405"
                                className="flex items-center space-x-2 text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                            >
                                <Image src="/images/phone.svg" alt="Phone" width={20} height={20} />
                                <span>+91 9508161405</span>
                            </a>
                            <a
                                href="mailto:Contact@RealAura.in"
                                className="flex items-center space-x-3 text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                            >
                                <Image src="/images/email.svg" alt="Mail" width={20} height={20} />
                                <span>Contact@RealAura.in</span>
                            </a>

                            <div className="flex items-center space-x-4 pt-2">
                                <Image src="/images/icons.png" alt="Icon" width={120} height={25} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="text-center text-gray-400 text-sm">
                        © 2025{" "}
                        <a href="#" className="text-yellow-500 hover:underline">
                            RealAura
                        </a>
                        . All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};
