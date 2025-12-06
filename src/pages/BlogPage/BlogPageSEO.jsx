import React from 'react'
import SEO from '../../components/common/SEO'
import '../../styling/blogStyling.css'
import BlogPageOriginal from './BlogPage'

const BlogPageSEO = () => {
  return (
    <>
      <SEO pageKey="blog" />
      <BlogPageOriginal />
    </>
  )
}

export default BlogPageSEO
