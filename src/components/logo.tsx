import Link from 'next/link';
import { Coffee } from 'lucide-react';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
      <Coffee className="h-7 w-7 text-primary" />
      <span className="font-headline text-xl font-bold tracking-tight">Aura Coffee</span>
    </Link>
  );
}
