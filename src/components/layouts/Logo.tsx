import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <img src="/assets/logo.png" alt="logo" className="w-12 h-12" />
    </Link>
  );
}
