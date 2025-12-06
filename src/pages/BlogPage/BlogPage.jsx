import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, Clock, User, Calendar, ArrowRight } from 'lucide-react'
import blogs from '../../data/allBlogs'
import '../../styling/blogStyling.css'

const BlogPage = () => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  }
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Get unique categories
  const categories = ['All', ...new Set(blogs.map((blog) => blog.category))]

  // Filter blogs
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <div onLoad={goToTop()} className="blogPage">
      {/* Hero Section */}
      <section className="blogHero">
        <div className="blogHeroContent">
          <h1 className="blogHeroTitle">Thoughts, <span>Trends</span> & Takeaways</h1>
          <p className="blogHeroSubtitle">
            A collection of stories, reflections, and explorations that invite you to slow down, think differently, and reconnect with the creativity that fuels everyday life.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="blogContent">
        <div className="blogContainer">
          {/* Sidebar / Search & Filter */}
          <aside className="blogSidebar">
            {/* Search */}
            <div className="searchBox">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="searchInput"
              />
            </div>

            {/* Categories */}
            <div className="categoriesBox">
              <h3 className="boxTitle">Categories</h3>
              <div className="categoryTags">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`categoryTag ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="statsBox">
              <h3 className="boxTitle">Stats</h3>
              <div className="statItem">
                <span>Total Blogs</span>
                <strong>{blogs.length}</strong>
              </div>
              <div className="statItem">
                <span>Avg Read Time</span>
                <strong>
                  {Math.round(blogs.reduce((sum, b) => sum + b.readTime, 0) / blogs.length)} min
                </strong>
              </div>
            </div>
          </aside>

          {/* Blog Grid */}
          <main className="blogMain">
            {filteredBlogs.length > 0 ? (
              <div className="blogGrid">
                {filteredBlogs.map((blog) => (
                  <article key={blog.id} className="blogCard">
                    {/* Card Image */}
                    <div className="blogCardImage">
                      <img src={blog.img} alt={blog.title} />
                      <span className="categoryBadge">{blog.category}</span>
                    </div>

                    {/* Card Content */}
                    <div className="blogCardContent">
                      <h2 className="blogCardTitle">{blog.title}</h2>
                      <p className="blogCardExcerpt">{blog.excerpt}</p>

                      {/* Meta Info */}
                      <div className="blogMeta">
                        <span className="metaItem">
                          <Calendar size={14} />
                          {new Date(blog.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                        <span className="metaItem">
                          <Clock size={14} />
                          {blog.readTime} min read
                        </span>
                      </div>

                      {/* Author */}
                      <div className="authorBio">
                        <img src={blog.writerImg} alt={blog.writer} className="authorImg" />
                        <div>
                          <p className="authorName">{blog.writer}</p>
                          <p className="authorRole">Writer</p>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <Link to={`/blog/${blog.id}`} className="readMoreBtn">
                        Read Full Article
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="noResults">
                <p>No blogs found matching your search.</p>
              </div>
            )}
          </main>
        </div>
      </section>
    </div>
  )
}

export default BlogPage