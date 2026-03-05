"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, TrendingDown, Tag, ChevronDown } from "lucide-react";
import { useState } from "react";

interface OldStockProduct {
  id: string;
  name: string;
  category: string;
  currentStock: number;
  unit: string;
  daysInStock: number;
  lastSold?: string;
  purchasePrice: number;
  sellingPrice: number;
}

interface OldestStockProductsProps {
  products: OldStockProduct[];
  onPromote?: (productId: string) => void;
  onDiscount?: (productId: string) => void;
}

export default function OldestStockProducts({
  products,
  onPromote,
  onDiscount,
}: OldestStockProductsProps) {
  // Track expanded products as a set, allow multiple open at once
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => {
    const ids = new Set<string>();
    if (products[0]) ids.add(products[0].id);
    if (products[1]) ids.add(products[1].id);
    return ids;
  });

  const toggleExpand = (productId: string) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };
  // Get urgency level based on days in stock
  const getUrgencyLevel = (days: number) => {
    if (days >= 90)
      return {
        label: "Critical",
        color: "destructive",
        bgColor: "bg-red-50 text-red-700 border-red-200",
      };
    if (days >= 60)
      return {
        label: "High",
        color: "warning",
        bgColor: "bg-amber-50 text-amber-700 border-amber-200",
      };
    if (days >= 30)
      return {
        label: "Medium",
        color: "default",
        bgColor: "bg-orange-50 text-orange-700 border-orange-200",
      };
    return {
      label: "Low",
      color: "secondary",
      bgColor: "bg-gray-50 text-gray-700 border-gray-200",
    };
  };

  // Format days to readable text
  const formatDaysInStock = (days: number) => {
    if (days >= 365)
      return `${Math.floor(days / 365)} year${Math.floor(days / 365) > 1 ? "s" : ""}`;
    if (days >= 30)
      return `${Math.floor(days / 30)} month${Math.floor(days / 30) > 1 ? "s" : ""}`;
    return `${days} day${days > 1 ? "s" : ""}`;
  };

  // Calculate potential loss (stock value tied up)
  const calculateStockValue = (product: OldStockProduct) => {
    return product.currentStock * product.purchasePrice;
  };

  // Sort products by days in stock (oldest first)
  const sortedProducts = [...products].sort(
    (a, b) => b.daysInStock - a.daysInStock,
  );

  return (
    <Card className="rounded-2xl h-full w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-orange-600" />
          <CardTitle>Slow Moving Stock</CardTitle>
        </div>
        <Badge
          variant="outline"
          className="bg-orange-50 text-orange-700 border-orange-200"
        >
          {products.filter((p) => p.daysInStock >= 60).length} Urgent
        </Badge>
      </CardHeader>

      <CardContent>
        {sortedProducts.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <TrendingDown className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>All products are moving well!</p>
          </div>
        ) : (
          <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedProducts.map((product) => {
              const urgency = getUrgencyLevel(product.daysInStock);
              const stockValue = calculateStockValue(product);

              return (
                <div
                  key={product.id}
                  className="border rounded-xl overflow-hidden hover:border-orange-300 transition-colors"
                >
                  {/* Product Header - Always Visible - Compact */}
                  <div
                    className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                    onClick={() => toggleExpand(product.id)}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-sm truncate">
                          {product.name}
                        </h3>
                        {product.daysInStock >= 90 && (
                          <Clock className="w-4 h-4 text-red-500 flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {formatDaysInStock(product.daysInStock)} in stock
                      </p>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                      <Badge
                        variant={
                          urgency.color === "destructive"
                            ? "destructive"
                            : "outline"
                        }
                        className={`${urgency.bgColor} text-xs`}
                      >
                        {urgency.label}
                      </Badge>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          expandedIds.has(product.id) ? "" : "-rotate-90"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {expandedIds.has(product.id) && (
                    <div className="border-t px-4 py-4 space-y-3 bg-gray-50">
                      {/* Product Info */}
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          Category:{" "}
                          <span className="font-medium text-foreground">
                            {product.category}
                          </span>
                        </p>
                      </div>

                      {/* Stock Duration Info */}
                      <div className="bg-white rounded-lg p-3 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            Time in Stock
                          </span>
                          <span className="font-semibold text-orange-600">
                            {formatDaysInStock(product.daysInStock)}
                          </span>
                        </div>

                        {product.lastSold && (
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">
                              Last Sold
                            </span>
                            <span className="text-sm font-medium">
                              {product.lastSold}
                            </span>
                          </div>
                        )}

                        <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                          <span className="text-sm text-muted-foreground">
                            Stock Quantity
                          </span>
                          <span className="text-sm font-medium">
                            {product.currentStock} {product.unit}
                          </span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            Stock Value
                          </span>
                          <span className="text-sm font-semibold text-teal-600">
                            RWF {stockValue.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {/* Pricing Info */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-blue-50 rounded-lg p-2">
                          <p className="text-muted-foreground mb-1">
                            Purchase Price
                          </p>
                          <p className="font-semibold">
                            RWF {product.purchasePrice.toLocaleString()}
                          </p>
                        </div>
                        <div className="bg-teal-50 rounded-lg p-2">
                          <p className="text-muted-foreground mb-1">
                            Selling Price
                          </p>
                          <p className="font-semibold">
                            RWF {product.sellingPrice.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2 border-t">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-300"
                          onClick={() => onPromote?.(product.id)}
                        >
                          <TrendingDown className="w-4 h-4 mr-1" />
                          Promote
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-300"
                          onClick={() => onDiscount?.(product.id)}
                        >
                          <Tag className="w-4 h-4 mr-1" />
                          Discount
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
