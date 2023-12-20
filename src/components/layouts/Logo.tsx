import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" aria-label="메인 페이지로 이동">
      <Image src="/logo.webp" width={800} height={800} priority alt="logo" className="h-12 w-12" />
    </Link>
  );
}
