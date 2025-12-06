import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react'
import blogs from '../../data/allBlogs'
import '../../styling/blogStyling.css'

const BlogReader = () => {
    const goToTop = () => {
    window.scrollTo(0, 0);
  }
    const { id } = useParams()
    const navigate = useNavigate()
    const blog = blogs.find((b) => b.id === parseInt(id))

    if (!blog) {
        return (
            <div className="blogNotFound">
                <h1>Blog not found</h1>
                <Link to="/my-blogs" className="backLink">
                    <ArrowLeft size={20} />
                    Back to Blogs
                </Link>
            </div>
        )
    }

    // Get related blogs (same category or 2 random blogs)
    const relatedBlogs = blogs
        .filter((b) => b.id !== blog.id && b.category === blog.category)
        .slice(0, 2)

    return (
        <div onLoad={goToTop()} className="blogReader">
            {/* Hero with Image */}
            <div className="readerHero">
                <img src={blog.img} alt={blog.title} className="readerHeroImage" />
                <div className="readerHeroOverlay">
                    <Link to="/my-blogs" className="backLink">
                        <ArrowLeft size={20} />
                        Back to Blogs
                    </Link>
                </div>
            </div>

            {/* Content */}
            <article className="readerContent">
                <div className="readerContainer">
                    {/* Header */}
                    <div className="readerHeader">
                        <span className="categoryBadge blogpageBadge">Author: {blog.writer} • Category: {blog.category}</span>
                        <h1 className="readerTitle">{blog.title}</h1>

                        {/* Meta */}
                        <div className="readerMeta">
                            <div className="authorSection">
                                <img src={blog.writerImg} alt={blog.writer} className="authorImg" />
                                <div>
                                    <p className="authorName">{blog.writer}</p>
                                    <p className="authorRole">Author</p>
                                </div>
                            </div>

                            <div className="metaStats">
                                <span className="metaStat">
                                    <Calendar size={16} />
                                    {new Date(blog.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </span>
                                <span className="metaStat">
                                    <Clock size={16} />
                                    {blog.readTime} min read
                                </span>
                            </div>

                            <button className="shareBtn">
                                <Share2 size={18} />
                                Share
                            </button>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="readerBody">
                        <div
                            className="richContent"
                            dangerouslySetInnerHTML={{ __html: blog.fullContent }}
                        />
                    </div>

                    {/* Footer */}
                    <footer className="readerFooter">
                        <div className="footerAuthor">
                            <img src={blog.writerImg} alt={blog.writer} className="authorImg" />
                            <div>
                                <h3>{blog.writer}</h3>
                                <p>Passionate Software Development Engineer. Loves to write code as well as self help essays or passages. Love to hear your thoughts.</p>
                            </div>
                        </div>

                        {/* Related Posts */}
                        {relatedBlogs.length > 0 && (
                            <div className="relatedPosts">
                                <h3>Related Articles</h3>
                                <div className="relatedGrid">
                                    {relatedBlogs.map((related) => (
                                        <Link key={related.id} to={`/blog/${related.id}`} className="relatedCard">
                                            <img src={related.img} alt={related.title} />
                                            <h4>{related.title}</h4>
                                            <p>{related.readTime} min read</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </footer>

                    {/* Navigation */}
                    <nav className="blogNavigation">
                        {blogs[blogs.indexOf(blog) - 1] && (
                            <Link to={`/blog/${blogs[blogs.indexOf(blog) - 1].id}`} className="prevBlog">
                                <ArrowLeft size={20} />
                                <div>
                                    <span>Previous</span>
                                    <p>{blogs[blogs.indexOf(blog) - 1].title}</p>
                                </div>
                            </Link>
                        )}

                        <Link to="/my-blogs" className="allBlogsBtn">
                            View All Blogs
                        </Link>

                        {blogs[blogs.indexOf(blog) + 1] && (
                            <Link to={`/blog/${blogs[blogs.indexOf(blog) + 1].id}`} className="nextBlog">
                                <div>
                                    <span>Next</span>
                                    <p>{blogs[blogs.indexOf(blog) + 1].title}</p>
                                </div>
                                <ArrowLeft size={20} style={{ transform: 'rotate(180deg)' }} />
                            </Link>
                        )}
                    </nav>
                </div>
            </article>
        </div>
    )
}

export default BlogReader
