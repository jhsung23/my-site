import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.webp" width={800} height={800} alt="logo" className="h-12 w-12" />
    </Link>
  );
}
