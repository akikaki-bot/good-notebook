"use client"
import Link from "next/link"
import { useEffect, useState } from "react"


export function ToggleMenu({ children }: Readonly<{ children: React.ReactNode }>) {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {        
        const allLinks = document.querySelectorAll("a")
        allLinks.forEach(link => {
            link.addEventListener("click", () => {
                //setIsOpen(false)
            })
        })

        return () => {
            allLinks.forEach(link => {
                link.removeEventListener("click", () => {
                    //setIsOpen(false)
                })
            })
        }
    }, [])

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-[7vh] bg-white z-10 border-b border-gray-300">
                <div className="flex flex-row justify-between w-full items-center h-full px-[15px]">
                    <div className="flex flex-col items-start h-full justify-center">
                        <Link href="/" className="text-2xl font-bold">さいこうのメモ帳</Link>
                    </div>
                    <button onClick={() => setIsOpen(isOpen ? false : true)} aria-controls="default-sidebar" type="button" className="h-full inline-flex items-center p-4 text-sm text-gray-500 rounded-lg outline-none lg:hidden ">
                        <span className="sr-only">Open sidebar</span>
                        <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                        { /* <p className="lg:hidden block ml-2"> メニューを{ isOpen ? "閉じる" : "開く" } </p> */ }
                    </button>
                </div>
            </div>
            <aside id="default-sidebar" className={`hidden-scrollbar fixed lg:relative top-[7vh] left-0 z-40 lg:w-[400px] w-full max-h-[93vh] h-full lg:h-screen transition-transform lg:-translate-x-0 ${isOpen ? "-translate-x-0" : "-translate-x-full"}`}>
                <div className="h-full overflow-y-auto bg-opacity-[0.95] bg-white dark:bg-gray-800 max-w-[300px] border-r border-gray-300 px-2">
                    <ul className="space-y-2 font-medium">
                        {children}
                    </ul>
                </div>                      
            </aside>
        </>
    )
}