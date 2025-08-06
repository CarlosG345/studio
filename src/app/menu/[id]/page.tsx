'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const { toast } = useToast();

  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    if (product.sizes.length > 1 && !selectedSize) {
      toast({
        title: 'Please select a size',
        description: 'You must choose a size before adding to the cart.',
        variant: 'destructive',
      });
      return;
    }
    toast({
      title: 'Added to cart!',
      description: `${product.name} (${selectedSize || product.sizes[0]}) has been added to your cart.`,
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
      <div className="aspect-square">
         <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              data-ai-hint={`coffee ${product.category}`}
            />
          </div>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="font-headline text-4xl md:text-5xl">{product.name}</h1>
          <p className="text-2xl font-semibold text-primary mt-2">${product.price.toFixed(2)}</p>
          <div className="flex items-center gap-2 mt-2 text-muted-foreground">
              <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5" />
              </div>
              <span>(123 reviews)</span>
          </div>
        </div>
        
        <p className="text-lg text-muted-foreground">{product.longDescription}</p>
        
        <Separator />

        {product.sizes.length > 1 && (
            <div>
              <h3 className="text-lg font-headline mb-4">Size</h3>
              <RadioGroup
                onValueChange={setSelectedSize}
                defaultValue={selectedSize}
                className="flex gap-4"
              >
                {product.sizes.map((size) => (
                  <div key={size} className="flex items-center">
                    <RadioGroupItem value={size} id={`size-${size}`} />
                    <Label htmlFor={`size-${size}`} className="ml-2 cursor-pointer text-base">
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
        )}
        
        <Button size="lg" className="w-full font-headline text-lg" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
        </Button>
      </div>
    </div>
  );
}
