"use client"
type HeadingProps = 
| "h1" 
| "h2" 
| "h3" 

export function CopyableHeading({
    As = "h2",
    children,
    ...props
} : {
    As ?: HeadingProps,
    children: React.ReactNode,
    props: React.HTMLProps<HTMLHeadingElement>
}) {
    const Component = As as HeadingProps;

    const copyableHeading = (e: React.MouseEvent<HTMLHeadingElement>) => {
        const target = e.currentTarget.getAttribute("id");
        if (target) {
            navigator.clipboard.writeText(`${location.origin}${location.pathname}#${target}`);

        }
    };

    return (
        <Component onClick={copyableHeading} aria-label={`。見出し。${children?.toString()}。`} {...props} className={`cursor-pointer hover:underline underline-offset-[5px] decoration-[2px] decoration-gray-500 `}>
            {children}
        </Component>
    );
}