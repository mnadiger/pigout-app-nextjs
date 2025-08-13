import Link from 'next/link'

    const linkStyle = {
        display: 'block',
        textAlign: 'center',
        marginTop: '20px',
        color: '#fff',
        textDecoration: 'underline'
    };

    const headerStyle = {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '2rem',
        margin: '20px 0',
    };

function BlogPostPage() {

  return (
    <>
    <div style={headerStyle}>Blog Post Page</div>

    <Link href={"/blog/post-1"} style={linkStyle}>Go to Post 1</Link>

    <br/>

    <Link href={"/blog/post-2"} style={linkStyle}>Go to Post 2</Link>
<br />
        <Link href={"/blog/anything-else"} style={linkStyle}>Go to Anything Else</Link>

        <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}> back to <a href="/" style={{ color: '#fff', textDecoration: 'underline' }}> Blog</a></p>

    </>
  )
}

export default BlogPostPage