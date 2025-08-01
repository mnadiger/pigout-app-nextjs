import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <Link href="/about" style={{ display: 'block', textAlign: 'center', marginTop: '20px', color: '#fff', textDecoration: 'underline' }}>
        Go to About Page
      </Link>
      <br />
      <Link href="/blog" style={{ display: 'block', textAlign: 'center', marginTop: '20px', color: '#fff', textDecoration: 'underline' }}>
        Go to Blog Page
      </Link>
    </main>
  );
}
