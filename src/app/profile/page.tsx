import Image from 'next/image';
import { user, orderHistory, favorites } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Award, Eye } from 'lucide-react';
import ProductCard from '@/components/product-card';

export default function ProfilePage() {
  return (
    <div className="space-y-12">
      <section className="flex flex-col sm:flex-row items-center gap-6">
        <Avatar className="h-24 w-24 border-4 border-primary/50">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-headline text-4xl">{user.name}</h1>
          <p className="text-lg text-muted-foreground">{user.email}</p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Order History</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orderHistory.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            order.status === 'Delivered'
                              ? 'default'
                              : order.status === 'Cancelled'
                              ? 'destructive'
                              : 'secondary'
                          }
                          className="bg-green-600 data-[variant=destructive]:bg-red-600 data-[variant=secondary]:bg-yellow-500 text-white"
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div>
            <h2 className="font-headline text-3xl mb-4">My Favorites</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {favorites.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

        </div>
        <div className="space-y-8">
            <Card className="bg-gradient-to-br from-primary/80 to-primary text-primary-foreground">
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-2">
                        <Award />
                        Loyalty Program
                    </CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                        Earn points with every purchase!
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-6xl font-bold">{user.loyaltyPoints}</p>
                    <p className="text-lg">points</p>
                    <Button variant="secondary" className="mt-4 w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                        <Eye className="mr-2 h-4 w-4" /> View My Points
                    </Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
