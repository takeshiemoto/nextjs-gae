import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Next.js GAE</h1>
      <Link href={'/profile'}>
        <a>Profile</a>
      </Link>
    </div>
  )
}
