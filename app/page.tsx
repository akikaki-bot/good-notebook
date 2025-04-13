import { Post } from "@/components/posts";

export default function Home() {
    return (
        <div className="flex flex-col  min-h-screen sm:p-24 p-6">
            <div className="flex flex-col items-start text-start gap-0">
                <h1 className="text-4xl font-bold mb-4">さいこうのメモ帳</h1>
                <p className="text-gray-500">メモ帳兼何かほざくブログ的適当いい感じのWebサイト（Next.js）</p>
            </div>
            <div className="flex flex-col items-start text-start gap-4 mt-8">
                <h2 className="text-2xl font-bold">たぶん最近の投稿（更新どうせされません）</h2>
                <Post
                    title="Next.js 15のParallel Routesを使ってみた"
                    subtitle="いいけど、まぁうん。"
                    date="2025/04/13"
                    link="/posts/nextjs-15-parallel-routes"
                />
            </div>
        </div>
    );
}
