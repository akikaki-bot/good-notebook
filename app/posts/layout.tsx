import Link from "next/link";

export default function PostsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col items-start text-start gap-4 p-6 sm:px-24 sm:py-12">
            <div className="fixed bottom-4 left-0 w-full h-20 p-3 sm:px-32">
                <div className="flex flex-col gap-8 h-full bg-white/60 border border-gray-300 rounded-xl shadow-xl px-6 py-4 justify-center backdrop-blur-sm">
                    <div className="flex flex-row items-center justify-between gap-0">
                        <h1 className="text-2xl font-bold">さいこうのメモ帳</h1>
                        <Link href="/" className="flex flex-col items-start text-start gap-4 px-4 py-2 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-gray-100">
                            <h1 className="text-xl font-bold">もどる</h1>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="prose sm:prose-lg mb-10 w-full">
                {children}
            </div>
        </div>
    );
}