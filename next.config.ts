import createMDX from '@next/mdx'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'

import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}
 
const withMDX = createMDX({
  options: {
    remarkPlugins:[
      remarkBreaks,
      remarkGfm
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          keepBackground: false
        },
      ]
    ]
  },
})
 
export default withMDX(nextConfig)
