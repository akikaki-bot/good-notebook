import Link from "next/link";
import { Roboto } from "next/font/google";
import { ToggleMenu } from "./(components)/toggleMenu";
import { SidebarCategory, SidebarLink } from "./(components)/sidebarChildren";
import { ToggleableAccordionMenu } from "./(components)/toggleableAccordionMenu";
import { blogPosts } from "@/constants/blogPosts";
import { Fragment } from "react";
import { DaisySidebar } from "./(components)/daisySidebar";

const roboto = Roboto({
    subsets: ["latin"],
});


export default function PostsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
                <div style={{ fontFamily: "--font-geist --noto-sans" }} className="prose lg:px-12 p-6 pt-[4vh] w-full lg:h-screen overflow-x-hidden max-w-none scroll-smooth">
                    {children}
                </div>
    );
}