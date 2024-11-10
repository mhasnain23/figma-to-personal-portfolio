"use client";

import { navMenuItems } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {

    const router = useRouter()

    return (
        <div className="max-w-7xl mx-auto">
            <nav className="flex flex-wrap items-center justify-between lg:px-10 px-2 h-16 rounded-full bg-[#ffffffa4]">
                <div className="flex">
                    <Link href={"/"} className="logo">
                        <Image src={"hasnaindev.svg"} alt="hasnain developer" width={200} height={60} priority quality={100} />
                    </Link>
                </div>
                <div className="hidden lg:flex">
                    <ul className="flex flex-wrap gap-[30px] text-[13px] font-semibold uppercase">
                        {
                            navMenuItems.map((item, index) => (
                                <li key={index} className="hover:border-b-[3px] hover:border-[#9900FF] transition-all ease-linear duration-[0.1s]">
                                    <Link href={item.path}>{item.text}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
}