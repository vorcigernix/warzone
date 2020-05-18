import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">WARZONE</a>
      </Link>
    </h2>
  )
}
