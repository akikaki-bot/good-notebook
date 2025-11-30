import Link from "next/link";
import { FocusEventHandler, MouseEventHandler } from "react";


export function SidebarCategory({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col w-full">
            <p className="text-sm text-layout600 font-semibold pt-4 w-full px-3">{ children }</p>
            <div className="w-full h-[1px] bg-slate-300 -mt-[0.85px]" />
        </div>
    )
}

export function SidebarLink({ href, children, onClick, onBlur }: { href: string, children: React.ReactNode, onClick ?: MouseEventHandler, onBlur?: FocusEventHandler  }) {
    return (
        <li style={{ fontFamily:"--font-geist" }} className="pl-4 text-[18px] hover:bg-gray-100 rounded-sm" onClick={onClick} onBlur={onBlur}>
            <Link href={href}>{ children }</Link>
        </li>
    )
}

