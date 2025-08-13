
function AboutPage() {
  return (
    // make the below main section in the center of the page

    <main> 
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}> AboutPage</h1>  
        <br/>
        <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>This is the about page.</p>
        <br/>

        <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}> back to <a href="/" style={{ color: '#fff', textDecoration: 'underline' }}> Home</a></p>
    </main>
  )
}

export default AboutPage