"use client"
import { Children, ReactNode, useState, Fragment } from "react";
import { SidebarLink } from "./sidebarChildren";



export function ToggleableAccordionMenu({ href, title, children }: { href: string, title: string, children: ReactNode }) {

    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <Fragment> 
            <div className="flex flex-row items-center justify-between w-full pr-3">
                <SidebarLink 
                    href={href}
                >{title}</SidebarLink>
                <p className="text-[18px]" onClick={() => setIsOpen(!isOpen)} > {isOpen ? "△" : "▽"} </p>
            </div>
            <ul 
                className={`flex flex-col overflow-hidden ml-6 transition-all transform-gpu gap-4 border-l-2 `}
                style={{
                    maxHeight: isOpen ? `${(Children.count(children) * ( 30 + 16 ))}px` : "0px",
                    opacity: isOpen ? 1 : 0,
                    transition: "max-height 0.5s ease-in-out, opacity 0.3s ease-in-out ",
                }}
            >
                {children}
            </ul>
        </Fragment>
    )
}