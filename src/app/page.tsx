import Image from 'next/image';
import { featuredProducts } from '@/lib/data';
import ProductCard from '@/components/product-card';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="space-y-12">
      <section>
        <Card className="overflow-hidden shadow-lg">
          <CardContent className="p-0">
            <div className="relative h-64 md:h-96">
              <Image
                src="https://placehold.co/1200x400.png"
                alt="Latte art"
                layout="fill"
                objectFit="cover"
                className="brightness-75"
                data-ai-hint="latte art"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl drop-shadow-lg">
                  Experience Coffee Artistry
                </h1>
                <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow-md">
                  Discover unique blends and handcrafted beverages that will awaken your senses.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="font-headline text-3xl md:text-4xl text-center mb-8">
          Favorites of the Month
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
