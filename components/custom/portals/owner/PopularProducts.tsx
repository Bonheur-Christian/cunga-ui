"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Zap } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  sales?: Array<{ id: string }>;
  inventories?: Array<{ quantity: number }>;
}

interface PopularProductsProps {
  products: Product[];
}

export default function PopularProducts({ products }: PopularProductsProps) {
  const totalSales = products.reduce(
    (sum, p) => sum + (p.sales?.length || 0),
    0,
  );

  return (
    <Card className="rounded-2xl w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <CardTitle>Popular Products</CardTitle>
        </div>
        <Badge
          variant="outline"
          className="bg-green-50 text-green-700 border-green-200"
        >
          {products.length} Products
        </Badge>
      </CardHeader>

      <CardContent>
        {products.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Zap className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>No popular products yet</p>
          </div>
        ) : (
          <div className="space-y-3">
            {products.map((product, index) => {
              const salesCount = product.sales?.length || 0;
              const salesPercentage =
                totalSales > 0 ? (salesCount / totalSales) * 100 : 0;

              return (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-green-300 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{product.name}</p>
                      <p className="text-xs text-gray-500">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 rounded-full bg-gray-200">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-600 transition-all"
                          style={{ width: `${salesPercentage}%` }}
                        />
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800"
                      >
                        {salesCount} sales
                      </Badge>
                    </div>
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
