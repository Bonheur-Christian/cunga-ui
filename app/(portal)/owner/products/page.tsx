"use client";

import StatCard from "@/components/custom/portals/owner/StatCard";
import PopularProducts from "@/components/custom/portals/owner/PopularProducts";
import LowSaleProducts from "@/components/custom/portals/owner/LowSaleProducts";
import ExpiredProducts from "@/components/custom/portals/owner/ExpiredProducts";
import ExpensiveProducts from "@/components/custom/portals/owner/ExpensiveProducts";
import CheapProducts from "@/components/custom/portals/owner/CheapProducts";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CloudUpload } from "lucide-react";
import { Period } from "@/types/period";

interface Product {
  id: string;
  name: string;
  price: number;
  expiryDate?: string | null;
  createdAt: string;
  inventories?: Array<{
    id: string;
    productId: string;
    quantity: number;
    location: string;
    inStock: boolean;
  }>;
  sales?: Array<{ id: string }>;
}

// Mock data for UI demonstration
const MOCK_POPULAR_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Wireless Earbuds",
    price: 79.99,
    createdAt: new Date().toISOString(),
    inventories: [
      {
        id: "i1",
        productId: "1",
        quantity: 150,
        location: "SHOP",
        inStock: true,
      },
    ],
    sales: Array(127)
      .fill(null)
      .map((_, i) => ({ id: `s${i}` })),
  },
  {
    id: "2",
    name: "USB-C Cable",
    price: 12.99,
    createdAt: new Date().toISOString(),
    inventories: [
      {
        id: "i2",
        productId: "2",
        quantity: 340,
        location: "STOCK",
        inStock: true,
      },
    ],
    sales: Array(98)
      .fill(null)
      .map((_, i) => ({ id: `s${i}` })),
  },
  {
    id: "3",
    name: "Phone Stand",
    price: 24.99,
    createdAt: new Date().toISOString(),
    inventories: [
      {
        id: "i3",
        productId: "3",
        quantity: 89,
        location: "SHOP",
        inStock: true,
      },
    ],
    sales: Array(76)
      .fill(null)
      .map((_, i) => ({ id: `s${i}` })),
  },
  {
    id: "4",
    name: "Laptop Cooling Pad",
    price: 45.99,
    createdAt: new Date().toISOString(),
    inventories: [
      {
        id: "i4",
        productId: "4",
        quantity: 52,
        location: "STOCK",
        inStock: true,
      },
    ],
    sales: Array(64)
      .fill(null)
      .map((_, i) => ({ id: `s${i}` })),
  },
  {
    id: "5",
    name: "Wireless Mouse",
    price: 34.99,
    createdAt: new Date().toISOString(),
    inventories: [
      {
        id: "i5",
        productId: "5",
        quantity: 120,
        location: "SHOP",
        inStock: true,
      },
    ],
    sales: Array(56)
      .fill(null)
      .map((_, i) => ({ id: `s${i}` })),
  },
];

const MOCK_LOW_SALE_PRODUCTS: Product[] = [
  {
    id: "10",
    name: "Vintage Desk Lamp",
    price: 89.99,
    createdAt: new Date().toISOString(),
    inventories: [
      {
        id: "i10",
        productId: "10",
        quantity: 8,
        location: "STOCK",
        inStock: true,
      },
    ],
    sales: Array(3)
      .fill(null)
      .map((_, i) => ({ id: `s${i}` })),
  },
  {
    id: "11",
    name: "Premium USB Hub",
    price: 62.99,
    createdAt: new Date().toISOString(),
    inventories: [
      {
        id: "i11",
        productId: "11",
        quantity: 15,
        location: "SHOP",
        inStock: true,
      },
    ],
    sales: Array(5)
      .fill(null)
      .map((_, i) => ({ id: `s${i}` })),
  },
  {
    id: "12",
    name: "Monitor Arm Mount",
    price: 72.99,
    createdAt: new Date().toISOString(),
    inventories: [
      {
        id: "i12",
        productId: "12",
        quantity: 12,
        location: "STOCK",
        inStock: true,
      },
    ],
    sales: Array(4)
      .fill(null)
      .map((_, i) => ({ id: `s${i}` })),
  },
  {
    id: "13",
    name: "Desk Organizer Set",
    price: 35.99,
    createdAt: new Date().toISOString(),
    inventories: [
      {
        id: "i13",
        productId: "13",
        quantity: 20,
        location: "SHOP",
        inStock: true,
      },
    ],
    sales: Array(2)
      .fill(null)
      .map((_, i) => ({ id: `s${i}` })),
  },
  {
    id: "14",
    name: "Ergonomic Keyboard",
    price: 95.99,
    createdAt: new Date().toISOString(),
    inventories: [
      {
        id: "i14",
        productId: "14",
        quantity: 6,
        location: "STOCK",
        inStock: true,
      },
    ],
    sales: Array(1)
      .fill(null)
      .map((_, i) => ({ id: `s${i}` })),
  },
];

const MOCK_EXPENSIVE_PRODUCTS: Product[] = [
  {
    id: "20",
    name: "Premium Gaming Monitor",
    price: 599.99,
    createdAt: new Date().toISOString(),
    inventories: [
      {
        id: "i20",
        productId: "20",
        quantity: 5,
        location: "STOCK",
        inStock: true,
      },
    ],
  },
  {
    id: "21",
    name: "4K Webcam Pro",
    price: 349.99,
    createdAt: new Date().toISOString(),
    inventories: [
      {
        id: "i21",
        productId: "21",
        quantity: 12,
        location: "SHOP",
        inStock: true,
      },
    ],
  },
  {
    id: "22",
    name: "Studio Microphone Set",
    price: 289.99,
    createdAt: new Date().toISOString(),
    inventories: [
      {
        id: "i22",
        productId: "22",
        quantity: 8,
        location: "STOCK",
        inStock: true,
      },
    ],
  },
  {
    id: "23",
    name: "Professional Headphones",
    price: 249.99,
    createdAt: new Date().toISOString(),
    inventories: [
      {
        id: "i23",
        productId: "23",
        quantity: 15,
        location: "SHOP",
        inStock: true,
      },
    ],
  },
  {
    id: "24",
    name: "Mechanical Keyboard RGB",
    price: 199.99,
    createdAt: new Date().toISOString(),
    inventories: [
      {
        id: "i24",
        productId: "24",
        quantity: 22,
        location: "STOCK",
        inStock: true,
      },
    ],
  },
];

const MOCK_CHEAP_PRODUCTS: Product[] = [
  {
    id: "30",
    name: "Screen Protector",
    price: 4.99,
    createdAt: new Date().toISOString(),
    inventories: [
      {
        id: "i30",
        productId: "30",
        quantity: 500,
        location: "SHOP",
        inStock: true,
      },
    ],
  },
  {
    id: "31",
    name: "Cable Organizer",
    price: 6.99,
    createdAt: new Date().toISOString(),
    inventories: [
      {
        id: "i31",
        productId: "31",
        quantity: 300,
        location: "STOCK",
        inStock: true,
      },
    ],
  },
  {
    id: "32",
    name: "USB Adapter",
    price: 7.99,
    createdAt: new Date().toISOString(),
    inventories: [
      {
        id: "i32",
        productId: "32",
        quantity: 450,
        location: "SHOP",
        inStock: true,
      },
    ],
  },
  {
    id: "33",
    name: "Sticky Notes Pack",
    price: 3.99,
    createdAt: new Date().toISOString(),
    inventories: [
      {
        id: "i33",
        productId: "33",
        quantity: 600,
        location: "STOCK",
        inStock: true,
      },
    ],
  },
  {
    id: "34",
    name: "Pen Set",
    price: 8.99,
    createdAt: new Date().toISOString(),
    inventories: [
      {
        id: "i34",
        productId: "34",
        quantity: 280,
        location: "SHOP",
        inStock: true,
      },
    ],
  },
];

const MOCK_EXPIRED_SHOP: Product[] = [
  {
    id: "40",
    name: "Organic Coffee Beans",
    price: 24.99,
    expiryDate: "2026-02-15",
    createdAt: "2025-08-15T10:00:00Z",
    inventories: [
      {
        id: "i40",
        productId: "40",
        quantity: 15,
        location: "SHOP",
        inStock: true,
      },
    ],
  },
  {
    id: "41",
    name: "Herbal Tea Set",
    price: 18.99,
    expiryDate: "2026-01-30",
    createdAt: "2025-07-30T10:00:00Z",
    inventories: [
      {
        id: "i41",
        productId: "41",
        quantity: 8,
        location: "SHOP",
        inStock: true,
      },
    ],
  },
];

const MOCK_EXPIRED_STOCK: Product[] = [
  {
    id: "50",
    name: "Vitamin Supplements",
    price: 34.99,
    expiryDate: "2026-02-28",
    createdAt: "2025-08-28T10:00:00Z",
    inventories: [
      {
        id: "i50",
        productId: "50",
        quantity: 42,
        location: "STOCK",
        inStock: true,
      },
    ],
  },
  {
    id: "51",
    name: "Protein Powder",
    price: 45.99,
    expiryDate: "2026-01-15",
    createdAt: "2025-07-15T10:00:00Z",
    inventories: [
      {
        id: "i51",
        productId: "51",
        quantity: 28,
        location: "STOCK",
        inStock: true,
      },
    ],
  },
  {
    id: "52",
    name: "Energy Bars Box",
    price: 22.99,
    expiryDate: "2026-02-10",
    createdAt: "2025-08-10T10:00:00Z",
    inventories: [
      {
        id: "i52",
        productId: "52",
        quantity: 35,
        location: "STOCK",
        inStock: true,
      },
    ],
  },
];

export default function ProductsPage() {
  const [period, setPeriod] = useState<Period>("today");

  const dashboardStats = [
    {
      title: "Products In Inventory",
      value: "1050",
    },
    {
      title: "Products In Shop",
      value: "200",
    },
    {
      title: "Products Sold",
      value: "5200",
    },
    {
      title: "Expired Products",
      value: "5",
    },
    {
      title: "New Products",
      value: "62",
    },
  ];

  return (
    <div className="min-h-screen bg-background rounded-lg m-2">
      <div className="px-6 lg:px-12 py-8 space-y-8">
        {/* header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground tracking-tight">
            Products Based Overview
          </h1>
          <Button
            size="lg"
            variant="outline"
            className="text-primary border border-primary flex items-center gap-2 hover:text-white hover:bg-primary hover:scale-105 duration-300 transition-all cursor-pointer"
          >
            Export Report
            <CloudUpload size={20} />
          </Button>
        </div>

        {/* Product based stats */}
        <div className="space-y-4">
          <h2 className="text-sm font-medium uppercase text-primary tracking-wider">
            Products Based Stats
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {dashboardStats.map((stat, index) => (
              <StatCard
                key={index}
                title={stat.title}
                value={stat.value}
                period={period}
              />
            ))}
          </div>
        </div>

        {/* Product Analytics Sections */}
        <div className="space-y-8">
          {/* Popular and Low Sale */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PopularProducts products={MOCK_POPULAR_PRODUCTS} />
            <LowSaleProducts products={MOCK_LOW_SALE_PRODUCTS} />
          </div>

          {/* Expensive and Cheap */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ExpensiveProducts products={MOCK_EXPENSIVE_PRODUCTS} />
            <CheapProducts products={MOCK_CHEAP_PRODUCTS} />
          </div>

          {/* Expired Products */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ExpiredProducts products={MOCK_EXPIRED_SHOP} location="shop" />
            <ExpiredProducts products={MOCK_EXPIRED_STOCK} location="stock" />
          </div>
        </div>
      </div>
    </div>
  );
}
