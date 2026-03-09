"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, AlertCircle } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  sales?: Array<{ id: string }>;
  inventories?: Array<{ quantity: number }>;
}

interface LowSaleProductsProps {
  products: Product[];
}

export default function LowSaleProducts({ products }: LowSaleProductsProps) {
  return (
    <Card className="rounded-2xl w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingDown className="w-5 h-5 text-amber-600" />
          <CardTitle>Low Sale Products</CardTitle>
        </div>
        <Badge
          variant="outline"
          className="bg-amber-50 text-amber-700 border-amber-200"
        >
          {products.length} Products
        </Badge>
      </CardHeader>

      <CardContent>
        {products.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <AlertCircle className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>No low sale products found</p>
          </div>
        ) : (
          <div className="space-y-3">
            {products.map((product, index) => {
              const salesCount = product.sales?.length || 0;
              const totalStock =
                product.inventories?.reduce(
                  (sum, inv) => sum + inv.quantity,
                  0,
                ) || 0;

              return (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-amber-300 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-semibold text-sm">
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
                    <Badge
                      variant="secondary"
                      className="bg-amber-100 text-amber-800"
                    >
                      {salesCount} sales
                    </Badge>
                    <p className="text-xs text-gray-500 mt-1">
                      Stock: {totalStock}
                    </p>
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
