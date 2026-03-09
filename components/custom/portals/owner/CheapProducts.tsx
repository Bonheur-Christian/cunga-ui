"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Tag } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  inventories?: Array<{ quantity: number }>;
}

interface CheapProductsProps {
  products: Product[];
}

export default function CheapProducts({ products }: CheapProductsProps) {
  return (
    <Card className="rounded-2xl w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Tag className="w-5 h-5 text-cyan-600" />
          <CardTitle>Budget Friendly Products</CardTitle>
        </div>
        <Badge
          variant="outline"
          className="bg-cyan-50 text-cyan-700 border-cyan-200"
        >
          {products.length} Products
        </Badge>
      </CardHeader>

      <CardContent>
        {products.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <DollarSign className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>No budget products found</p>
          </div>
        ) : (
          <div className="space-y-3">
            {products.map((product, index) => {
              const totalStock =
                product.inventories?.reduce(
                  (sum, inv) => sum + inv.quantity,
                  0,
                ) || 0;

              return (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-cyan-300 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-100 text-cyan-700 font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{product.name}</p>
                      <p className="text-xs text-gray-500">
                        Stock: {totalStock}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-cyan-100 text-cyan-800"
                  >
                    ${product.price.toFixed(2)}
                  </Badge>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
