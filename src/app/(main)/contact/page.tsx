"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { Button } from "@/components/forms/Button";
import { Input } from "@/components/forms/Input";


const LeafletMap = dynamic(
    () => import("@/app/(main)/rent/components/Detail-page/LocationMap"),
    { ssr: false }
);

export default function ContactPage() {
    return (
        <section className="w-full flex justify-center px-4 py-10">
            <div className="w-full max-w-7xl bg-white rounded-[5px] lg:rounded-[20px] lg:shadow-lg overflow-hidden flex flex-col lg:flex-row">
                {/* ================= LEFT: FORM ================= */}
                <div className="order-2 lg:order-1 w-full lg:w-1/2 p-6 sm:p-8">
                    <h2
                        className="mb-6 text-[28px] font-bold
            bg-gradient-to-r from-secondary-start to-secondary-end
            bg-clip-text text-transparent"
                    >
                        Get in Touch
                    </h2>

                    <form className="space-y-6">
                        {/* First + Last Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Input
                                placeholder="First Name"
                                variant="underline"
                                className="lg:hidden"
                            />
                            <Input
                                placeholder="Last Name"
                                variant="underline"
                                className="lg:hidden"
                            />

                            <Input
                                placeholder="First Name"
                                variant="boxed"
                                className="hidden lg:block"
                            />
                            <Input
                                placeholder="Last Name"
                                variant="boxed"
                                className="hidden lg:block"
                            />
                        </div>

                        {/* Email */}
                        <Input
                            placeholder="Email"
                            variant="underline"
                            className="lg:hidden"
                        />
                        <Input
                            placeholder="Email"
                            variant="boxed"
                            className="hidden lg:block"
                        />

                        {/* Phone */}
                        <Input
                            placeholder="+1 012 3456 789"
                            variant="underline"
                            className="lg:hidden"
                        />
                        <Input
                            placeholder="+1 012 3456 789"
                            variant="boxed"
                            className="hidden lg:block"
                        />

                        {/* Message */}
                        <div>
                            <textarea
                                rows={4}
                                placeholder="Write your message..."
                                className="w-full resize-none border-b px-1 py-3 text-sm outline-none lg:hidden"
                            />
                            <textarea
                                rows={4}
                                placeholder="Write your message..."
                                className="hidden lg:block w-full resize-none rounded-lg border px-4 py-3 text-sm outline-none"
                            />
                        </div>

                        <Button className="w-full rounded-md">
                            Send Message
                        </Button>
                    </form>

                </div>

                {/* ================= RIGHT: INFO + MAP ================= */}
                <div className="order-1 lg:order-2 w-full lg:w-1/2 lg:bg-[#FFF9E6] lg:p-8 lg:rounded-[20px]">
                    {/* ---------- MOBILE CONTACT CARD (ONLY) ---------- */}
                    <div className="relative lg:hidden rounded-xl bg-[#FFF3CC] px-6 pt-8 pb-16 text-center overflow-hidden">

                        {/* Decorative blobs (bottom-right only) */}
                        <div
                            className="
                            pointer-events-none
                            absolute
                            -bottom-16
                            -right-16
                            h-40
                            w-40
                            rounded-full
                            bg-gradient-to-r
                            from-secondary-start
                            to-secondary-end
                            opacity-90
                            "
                        />
                        <div
                            className="
                                pointer-events-none
                                absolute
                                bottom-12
                                right-8
                                h-15
                                w-15
                                rounded-full
                                bg-black/20
                                "
                        />

                        {/* CONTENT */}
                        <h3 className="text-[22px] font-semibold mb-2 relative z-10">
                            Contact Information
                        </h3>

                        <p className="text-sm text-gray-400 mb-8 relative z-10">
                            Say something to start a live chat!
                        </p>

                        {/* Contact items */}
                        <div className="space-y-7 text-sm relative z-10">

                            <div className="flex flex-col items-center gap-2">
                                <Image src="/images/contact/phone-call.svg" alt="Phone" width={22} height={22} />
                                <p className="font-medium">+1012 3456 789</p>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <Image src="/images/contact/sharp-email.svg" alt="Email" width={22} height={22} />
                                <p className="font-medium">demo@gmail.com</p>
                            </div>

                            <div className="flex flex-col items-center gap-2 px-4">
                                <Image src="/images/contact/carbon-location.svg" alt="Location" width={22} height={22} />
                                <p className="leading-relaxed text-center">
                                    132 Dartmouth Street Boston,<br />
                                    Massachusetts 02156 United States
                                </p>
                            </div>

                        </div>

                        {/* Social icon */}
                        <div className="mt-10 flex justify-center relative z-10">
                            <div className="flex h-10 w-10 items-center justify-center  text-white">
                                <Image src="/images/contact/instagram-filled.svg" alt="Instagram" width={50} height={50} />
                            </div>
                        </div>
                    </div>



                    {/* ---------- DESKTOP MAP ---------- */}
                    <div className="hidden lg:block w-full h-[220px] rounded-xl overflow-hidden mb-6">
                        <LeafletMap center={[12.9716, 77.5946]} />
                    </div>

                    {/* ---------- DESKTOP CONTACT INFO ---------- */}
                    <div className="hidden lg:block space-y-5 text-sm">
                        <ContactItem
                            icon="/images/telephoneW.svg"
                            text="+91 9508161405"
                        />
                        <ContactItem
                            icon="/images/mail-icon.svg"
                            text="contact@realaura.in"
                        />
                        <ContactItem
                            icon="/images/locationW.svg"
                            text="AG-4, F Zone, Rose Mansion, Ayyappaswamy Temple Road, Belathur, Kadugodi, Bengaluru – 560067"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

/* ================= REUSABLE ITEM ================= */

function ContactItem({ icon, text }: { icon: string; text: string }) {
    return (
        <div className="flex flex-col items-center gap-2 lg:flex-row lg:items-start lg:gap-3 text-center lg:text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md lg:bg-[#E6A800] text-white">
                <Image src={icon} alt="" width={20} height={20} />
            </div>
            <p className="leading-relaxed">{text}</p>
        </div>
    );
}
