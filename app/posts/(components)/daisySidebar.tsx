import { blogPosts } from "@/constants/blogPosts";
import Link from "next/link";



export function DaisySidebar({ children }: { children: React.ReactNode }) {
    return (
        <div className="drawer lg:drawer-open">
            <input id="drawer-open" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <nav className="navbar w-full bg-base-300">
                    <label htmlFor="drawer-open" aria-label="サイドバーを開く" className="btn btn-square btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                    </label>
                    <div className="px-4 text-xl font-semibold">さいこうのメモ帳</div>
                </nav>
                <div className="p-4">{children}</div>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="drawer-open" aria-label="サイドバーを閉じる" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">
                        <li>
                            <label htmlFor="drawer-open" aria-label="サイドバーを開く" className="is-drawer-close:tooltip is-drawer-close:tooltip-right hidden lg:inline-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                                <span className="is-drawer-close:hidden">サイドバーを閉じる</span>
                            </label>
                        </li>
                        <li>
                            <Link href="/" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                                <span className="is-drawer-close:hidden">一番最初にもどる</span>
                            </Link>
                        </li>
                        <div className="divider is-drawer-close:hidden"> Newest Memo </div>
                        <li>
                            <Link href={blogPosts[0]?.link} className="is-drawer-close:tooltip is-drawer-close:hidden" data-tip={blogPosts[0]?.title} key={`sidebar-post-${0}`}>
                                <span
                                    className="is-drawer-close:hidden"
                                    aria-label={`ここを押すことで記事のページに遷移します。この記事のタイトル、${blogPosts[0]?.title}。この記事は${blogPosts[0]?.date}に書かれ、投稿されている記事です。`}
                                >{blogPosts[0]?.title}</span>
                            </Link>
                        </li>
                        <div className="divider is-drawer-close:hidden"> All Memos </div>
                        <li>
                            {
                                blogPosts.map((post, index) => (
                                    (
                                        <Link href={post.link} className="is-drawer-close:tooltip is-drawer-close:hidden" data-tip={post.title} key={`sidebar-post-${index}`}>
                                            <span 
                                                className="is-drawer-close:hidden"
                                                aria-label={`ここを押すことで記事のページに遷移します。この記事のタイトル、${post.title}。この記事は${post.date}に書かれ、投稿されている記事です。`}
                                            >{post.title}</span>
                                        </Link>
                                    )
                                ))
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}