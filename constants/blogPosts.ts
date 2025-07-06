
interface Posts {
    title: string;
    description ?: string;
    link: `/posts/${string}`
    date: `${string}-${string}-${string}`
}

export const blogPosts : Posts[] = [
    {
        title : "抽象クラスは使え。",
        description: "もうほんと使うだけで世界変わったって感じ♪毎日これで仕事してまーす☆",
        link: "/posts/use-abstract-class",
        date: "2025-04-24"
    },
    {
        title: "Next.js@15 Parallel Routesを使ってみただけ",
        description: "Next.js@15 Parallel Routesを使ってみただけのメモ",
        link: "/posts/nextjs-15-parallel-routes",
        date: "2025-04-13"
    },
    {
        title : "Next.jsをこれまで書いてて思ったこと",
        description: "Next.jsをこれまで書いてて思ったことをまとめたメモ",
        link: "/posts/thought-of-nextjs",
        date: "2025-06-29"
    },
    {
        title: "TypeScriptで遊ぼう",
        description: "TypeScriptで遊んでるだけ",
        link: "/posts/lets-play-typescript",
        date: "2025-07-06"
    }
]