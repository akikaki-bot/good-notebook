import Link from "next/link";



export function Post({
    title,
    subtitle = "さぶたいとるなし",
    date,
    link,
}: {
    title: string;
    date: string;
    subtitle: string;
    link: string;
}) {
    return (
        <Link 
            href={link} 
            className="flex flex-col items-start text-start gap-4 p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 dark:text-white"
            aria-label={`ここを押すことで記事のページに遷移します。この記事のタイトル、${title}。この記事の簡単な説明、${subtitle}。この記事は${date}に書かれ、投稿されている記事です。`}
        >
            <div className="flex flex-row items-center gap-3">
                <div className="flex flex-col items-start text-start gap-1">
                    <h1 className="text-xl font-bold">{title}</h1>
                    <p className="text-gray-500">{subtitle}</p>
                </div>
                <div className="flex flex-col items-end text-end">
                    <p className="text-gray-500">{date}</p>
                </div>
            </div>
        </Link>
    );
}