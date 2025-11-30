import Link from "next/link";
import { Roboto } from "next/font/google";
import { ToggleMenu } from "./(components)/toggleMenu";
import { SidebarCategory, SidebarLink } from "./(components)/sidebarChildren";
import { ToggleableAccordionMenu } from "./(components)/toggleableAccordionMenu";
import { blogPosts } from "@/constants/blogPosts";
import { Fragment } from "react";

const roboto = Roboto({
    subsets: ["latin"],
});


export default function PostsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex lg:flex-row flex-col">
            <ToggleMenu>
                <SidebarCategory>最近の記事</SidebarCategory>
                {
                    blogPosts.map(( post, index , arr ) => arr.length - 2 <= index ? (
                        <SidebarLink key={index} href={post.link}>
                            { arr.length == index + 1 ? <span>🔥</span> : ""}
                            {post.title}
                        </SidebarLink>
                    ): <Fragment key={index} />).reverse()
                }
                <SidebarCategory>すべての記事</SidebarCategory>
                {
                    blogPosts.map(( post, index ) => (
                        <SidebarLink key={index} href={post.link}>{post.title}</SidebarLink>
                    ))
                }
                <SidebarCategory> </SidebarCategory>
                <SidebarLink href="/">ホームに戻る</SidebarLink>
            </ToggleMenu>
            <div style={{ fontFamily:"--font-geist --noto-sans" }} className="prose lg:px-12 p-6 pt-[12vh] w-full lg:h-screen overflow-x-hidden  max-w-none scroll-smooth"> 
                {children} 
            </div>
        </div>
    );
}