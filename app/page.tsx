import { Post } from "@/components/posts";
import { blogPosts } from "@/constants/blogPosts";
import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
    return (
        <div className="flex flex-col  min-h-screen sm:p-24 p-6">
            <div className="flex flex-col items-start text-start gap-0">
                <h1 className="text-4xl font-bold mb-4">さいこうのメモ帳</h1>
                <p className="text-gray-500"><Link href="https://akikaki.net/">あきかき</Link>のブログ兼備忘録</p>
            </div>
            <div className="flex flex-col items-start text-start gap-4 mt-8">
                <h2 className="text-2xl font-bold">最近の投稿</h2>
                {
                    blogPosts.map(( post, index , arr ) => arr.length - 2 <= index ? (
                        <Post key={`recentPosts-${index}`} title={post.title} subtitle={post.description ?? ""} date={post.date} link={post.link} />
                    ): <Fragment key={`recentPosts-fragment-${index}`}></Fragment>).reverse()
                }
                <h2 className="text-2xl font-bold mt-8">すべての記事</h2>
                {
                    blogPosts.map(( post, index ) => (
                        <Post key={`allPosts-${index}`} title={post.title} subtitle={post.description ?? ""} date={post.date} link={post.link} />
                    ))
                }
            </div>
        </div>
    );
}
