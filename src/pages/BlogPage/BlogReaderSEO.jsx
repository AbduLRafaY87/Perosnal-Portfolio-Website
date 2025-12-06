import React from 'react'
import SEO from '../../components/common/SEO'
import { useParams } from 'react-router-dom'
import '../../styling/blogStyling.css'
import allBlogs from '../../data/allBlogs'
import { createBlogPostSchema } from '../../utils/seoHelpers'

const BlogReaderSEO = () => {
  const { id } = useParams()
  const blog = allBlogs.find((b) => b.id === parseInt(id))

  if (!blog) {
    return <div>Blog not found</div>
  }

  const blogSchema = createBlogPostSchema(blog, blog.image)

  return (
    <>
      <SEO
        pageKey="blog"
        title={blog.title}
        description={blog.excerpt || blog.title}
        keywords={`${blog.title}, blog, web design, development`}
        canonical={`https://www.archatriwala.com/blog/${id}`}
        image={blog.image}
        publishedDate={blog.date}
        type="article"
        customStructuredData={blogSchema}
      />
      <div className="blogReader">
        <article className="blogArticle">
          <header className="articleHeader">
            <h1>{blog.title}</h1>
            <div className="articleMeta">
              <span className="date">{blog.date}</span>
              <span className="readTime">{blog.readTime || '5 min read'}</span>
            </div>
          </header>
          {blog.image && (
            <img src={blog.image} alt={blog.title} className="articleImage" />
          )}
          <div className="articleContent">
            {typeof blog.fullContent === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: blog.fullContent }} />
            ) : (
              <p>{blog.fullContent}</p>
            )}
          </div>
        </article>
      </div>
    </>
  )
}

export default BlogReaderSEO
