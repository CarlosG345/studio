import type { Product } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 border-2 border-transparent">
      <CardHeader className="p-0">
        <Link href={`/menu/${product.id}`} className="block">
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              data-ai-hint={`coffee ${product.category}`}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <Link href={`/menu/${product.id}`} className="hover:underline">
          <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
        </Link>
        <CardDescription className="mt-2">{product.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <p className="text-lg font-semibold text-primary">
          ${product.price.toFixed(2)}
        </p>
        <Button asChild size="sm">
          <Link href={`/menu/${product.id}`}>
            View <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
