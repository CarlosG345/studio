import { products } from '@/lib/data';
import ProductCard from '@/components/product-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const categories = ['Hot Coffee', 'Iced Coffee', 'Desserts'];

export default function MenuPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl md:text-5xl">Our Menu</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Expertly crafted beverages and delightful treats.
        </p>
      </div>

      <Tabs defaultValue="Hot Coffee" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="font-headline">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mt-6">
              {products
                .filter((p) => p.category === category)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
