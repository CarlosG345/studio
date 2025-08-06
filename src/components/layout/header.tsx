'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Coffee, User } from 'lucide-react';

import { SidebarTrigger } from '@/components/ui/sidebar';
import Logo from '@/components/logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/menu', label: 'Menu', icon: Coffee },
  { href: '/profile', label: 'Profile', icon: User },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="lg:hidden" />
        <Logo />
      </div>

      <nav className="hidden items-center gap-2 md:flex">
        {navLinks.map((link) => (
          <Button
            key={link.href}
            variant="ghost"
            asChild
            className={cn(
              'font-headline text-base',
              pathname === link.href ? 'text-primary' : 'text-foreground/70'
            )}
          >
            <Link href={link.href}>
              <link.icon className="mr-2 h-4 w-4" />
              {link.label}
            </Link>
          </Button>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Button variant="ghost" className="hidden lg:inline-flex">
          Cart (0)
        </Button>
        <SidebarTrigger className="hidden lg:flex" />
      </div>
    </header>
  );
}
