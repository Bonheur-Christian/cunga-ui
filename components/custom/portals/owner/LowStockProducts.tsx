"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Package, Plus } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface Product {
  id: string;
  name: string;
  currentStock: number;
  minimumStock: number;
  maxStock: number;
  unit: string;
  lastRestocked?: string;
}

interface LowStockProductsProps {
  products: Product[];
  onRestock?: (productId: string) => void;
}

export default function LowStockProducts({
  products,
  onRestock,
}: LowStockProductsProps) {
  // Calculate stock level percentage
  const getStockPercentage = (current: number, max: number) => {
    return (current / max) * 100;
  };

  // Get stock status
  const getStockStatus = (current: number, minimum: number, max: number) => {
    const percentage = (current / max) * 100;
    if (current === 0) return { label: "Out of Stock", color: "destructive" };
    if (current < minimum) return { label: "Critical", color: "destructive" };
    if (percentage < 30) return { label: "Low Stock", color: "warning" };
    return { label: "In Stock", color: "success" };
  };

  // Get progress bar color
  const getProgressColor = (current: number, minimum: number, max: number) => {
    const percentage = (current / max) * 100;
    if (current === 0 || current < minimum) return "bg-red-500";
    if (percentage < 30) return "bg-amber-500";
    return "bg-teal-500";
  };

  // Sort products by urgency (lowest stock percentage first)
  const sortedProducts = [...products].sort((a, b) => {
    const aPercentage = getStockPercentage(a.currentStock, a.maxStock);
    const bPercentage = getStockPercentage(b.currentStock, b.maxStock);
    return aPercentage - bPercentage;
  });

  return (
    <Card className="rounded-2xl w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Package className="w-5 h-5 text-teal-600" />
          <CardTitle>Low Stock Alerts</CardTitle>
        </div>
        <Badge
          variant="outline"
          className="bg-amber-50 text-amber-700 border-amber-200"
        >
          {products.filter((p) => p.currentStock < p.minimumStock).length}{" "}
          Critical
        </Badge>
      </CardHeader>

      <CardContent>
        {sortedProducts.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Package className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>All products are well stocked!</p>
          </div>
        ) : (
          <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedProducts.map((product) => {
              const status = getStockStatus(
                product.currentStock,
                product.minimumStock,
                product.maxStock,
              );
              const percentage = getStockPercentage(
                product.currentStock,
                product.maxStock,
              );

              return (
                <div
                  key={product.id}
                  className="border rounded-xl p-4 hover:border-teal-300 transition-colors"
                >
                  {/* Product Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-base">
                          {product.name}
                        </h3>
                        {product.currentStock < product.minimumStock && (
                          <AlertTriangle className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                    </div>

                    <Badge
                      variant={
                        status.color === "destructive"
                          ? "destructive"
                          : "outline"
                      }
                      className={
                        status.color === "warning"
                          ? "bg-amber-50 text-amber-700 border-amber-200"
                          : status.color === "success"
                            ? "bg-teal-50 text-teal-700 border-teal-200"
                            : ""
                      }
                    >
                      {status.label}
                    </Badge>
                  </div>

                  {/* Stock Info */}
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Current Stock
                      </span>
                      <span className="font-semibold">
                        {product.currentStock} {product.unit}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-3 border-t">
                    {product.lastRestocked && (
                      <span className="text-xs text-muted-foreground">
                        Last restocked: {product.lastRestocked}
                      </span>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      className="ml-auto hover:bg-teal-50 hover:text-teal-700 hover:border-teal-300"
                      onClick={() => onRestock?.(product.id)}
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Restock
                    </Button>
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
