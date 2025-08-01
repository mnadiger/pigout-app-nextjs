import React from 'react'

function BlogPostDetails({params}) {
  return (
    <div style={{ textAlign: 'center', color: '#fff' }} >
        <h1>Blog Post Details</h1>
        <p>Post ID: {params.slug}</p>
        <p>back to <a href="/blog" style={{ color: '#fff', textDecoration: 'underline' }}>Blog</a></p>
    </div>
  )
}

export default BlogPostDetails
