"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  expiryDate?: string | Date | null;
  inventories?: Array<{ quantity: number; location: string }>;
}

interface ExpiredProductsProps {
  products: Product[];
  location?: "shop" | "stock" | "all";
}

export default function ExpiredProducts({
  products,
  location = "all",
}: ExpiredProductsProps) {
  const formatDate = (date: string | Date | null | undefined) => {
    if (!date) return "N/A";
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Card className="rounded-2xl w-full border-red-200">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-600" />
          <CardTitle>
            Expired Products {location !== "all" && `(${location})`}
          </CardTitle>
        </div>
        <Badge
          variant="destructive"
          className="bg-red-100 text-red-700 border-red-300"
        >
          {products.length} Products
        </Badge>
      </CardHeader>

      <CardContent>
        {products.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Clock className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>No expired products found</p>
          </div>
        ) : (
          <div className="space-y-3">
            {products.map((product) => {
              const totalStock =
                product.inventories?.reduce(
                  (sum, inv) => sum + inv.quantity,
                  0,
                ) || 0;
              const locations =
                product.inventories?.map((inv) => inv.location).join(", ") ||
                "N/A";

              return (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-3 rounded-lg border border-red-200 bg-red-50 hover:border-red-400 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-200 text-red-700">
                      <AlertTriangle size={16} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{product.name}</p>
                      <p className="text-xs text-gray-600">
                        Expired: {formatDate(product.expiryDate)} • {locations}{" "}
                        • Stock: {totalStock}
                      </p>
                    </div>
                  </div>
                  <Badge variant="destructive" className="bg-red-600">
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
