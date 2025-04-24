
interface Posts {
    title: string;
    description ?: string;
    link: `/posts/${string}`
    date: `${string}-${string}-${string}`
}

export const blogPosts : Posts[] = [
    {
        title: "Next.js@15 Parallel Routesを使ってみただけ",
        description: "Next.js@15 Parallel Routesを使ってみただけのメモ",
        link: "/posts/nextjs-15-parallel-routes",
        date: "2025-04-13"
    },
    {
        title : "抽象クラスは使え。",
        description: "もうほんと使うだけで世界変わったって感じ♪毎日これで仕事してまーす☆",
        link: "/posts/use-abstract-class",
        date: "2025-04-24"
    }
]