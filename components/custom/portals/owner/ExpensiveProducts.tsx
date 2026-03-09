"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Gem } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  inventories?: Array<{ quantity: number }>;
}

interface ExpensiveProductsProps {
  products: Product[];
}

export default function ExpensiveProducts({
  products,
}: ExpensiveProductsProps) {
  const maxPrice =
    products.length > 0 ? Math.max(...products.map((p) => p.price)) : 0;

  return (
    <Card className="rounded-2xl w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Gem className="w-5 h-5 text-purple-600" />
          <CardTitle>Expensive Products</CardTitle>
        </div>
        <Badge
          variant="outline"
          className="bg-purple-50 text-purple-700 border-purple-200"
        >
          {products.length} Products
        </Badge>
      </CardHeader>

      <CardContent>
        {products.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <DollarSign className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>No expensive products found</p>
          </div>
        ) : (
          <div className="space-y-3">
            {products.map((product, index) => {
              const pricePercentage = (product.price / maxPrice) * 100;
              const totalStock =
                product.inventories?.reduce(
                  (sum, inv) => sum + inv.quantity,
                  0,
                ) || 0;

              return (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{product.name}</p>
                      <div className="w-full h-2 rounded-full bg-gray-200 mt-1">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-purple-400 to-purple-600 transition-all"
                          style={{ width: `${pricePercentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant="secondary"
                      className="bg-purple-100 text-purple-800 mb-1"
                    >
                      ${product.price.toFixed(2)}
                    </Badge>
                    <p className="text-xs text-gray-500">Stock: {totalStock}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
