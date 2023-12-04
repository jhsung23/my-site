import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <img src="/logo.png" className="w-12 h-12" />
    </Link>
  );
}
