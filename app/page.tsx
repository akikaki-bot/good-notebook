import { Post } from "@/components/posts";
import { blogPosts } from "@/constants/blogPosts";

export default function Home() {
    return (
        <div className="flex flex-col  min-h-screen sm:p-24 p-6">
            <div className="flex flex-col items-start text-start gap-0">
                <h1 className="text-4xl font-bold mb-4">さいこうのメモ帳</h1>
                <p className="text-gray-500">メモ帳兼何かほざくブログ的適当いい感じのWebサイト（Next.js）</p>
            </div>
            <div className="flex flex-col items-start text-start gap-4 mt-8">
                <h2 className="text-2xl font-bold">たぶん最近の投稿（更新どうせされません）</h2>
                {
                    blogPosts.map(( post, index , arr ) => arr.length - 2 <= index ? (
                        <Post key={index} title={post.title} subtitle={post.description ?? ""} date={post.date} link={post.link} />
                    ): <></>)
                }
                <h2 className="text-2xl font-bold mt-8">すべての記事</h2>
                {
                    blogPosts.map(( post, index ) => (
                        <Post key={index} title={post.title} subtitle={post.description ?? ""} date={post.date} link={post.link} />
                    ))
                }
            </div>
        </div>
    );
}
