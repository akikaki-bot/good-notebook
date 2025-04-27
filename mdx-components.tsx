import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import { CopyableHeading } from './components/copyableHeading'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => <Link className={props.className ?? ""} href={(props.href ?? "")} {...props}>{props.children}</Link>,
    h1: (props) => <h1 {...props} />,
    // h1: (props) => <CopyableHeading As="h1" className={props.className ?? ""} {...props} />,
    h2: (props) => <CopyableHeading As="h2" className={props.className ?? ""} {...props} />,
    h3: (props) => <CopyableHeading As="h3" className={props.className ?? ""} {...props} />,
    pre: (props) => <pre {...props} aria-label={`コードブロック。`} {...props}>{props.children}</pre>,
    code: (props) => <code {...props} aria-hidden={true} {...props}>{props.children}</code>,
    ...components,
  }
}
