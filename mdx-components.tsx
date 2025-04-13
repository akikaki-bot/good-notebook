import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => <Link className={props.className ?? ""} href={(props.href ?? "")} {...props}>{props.children}</Link>,
    ...components,
  }
}
