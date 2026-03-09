// "use client";

// import ContextBanner from "@/components/custom/portals/owner/ContextBanner";
// import StatCard from "@/components/custom/portals/owner/StatCard";
// import { useState } from "react";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Plus,
//   Package,
//   ShoppingCart,
//   Users,
//   FileText,
//   Settings,
// } from "lucide-react";
// import SalesChart from "@/components/custom/portals/owner/SalesChart";
// import LowStockProducts from "@/components/custom/portals/owner/LowStockProducts";
// import OldestStockProducts from "@/components/custom/portals/owner/OldestStockProducts";

// type Period = "today" | "weekly" | "monthly" | "yearly";

// export default function OwnerPage() {
//   const [period, setPeriod] = useState<Period>("today");

//   const handleRestock = (productId: string) => {
//     console.log("Restocking product:", productId);
//   };

//   const handlePromote = (productId: string) => {
//     console.log("Promote product:", productId);
//     // Add your promotion logic here
//   };

//   const handleDiscount = (productId: string) => {
//     console.log("Apply discount to product:", productId);
//     // Add your discount logic here
//   };

//   //Mock Data Section

//   const dashboardStats = [
//     {
//       title: "Pending Requests",
//       values: { today: "2", weekly: "7", monthly: "28", yearly: "142" },
//     },
//     {
//       title: "Products Sold",
//       values: { today: "15", weekly: "100", monthly: "420", yearly: "5200" },
//     },
//     {
//       title: "Revenue",
//       values: {
//         today: "RWF 45,000",
//         weekly: "RWF 285,000",
//         monthly: "RWF 1,200,000",
//         yearly: "RWF 15,600,000",
//       },
//     },
//     {
//       title: "Fulfilled Requests",
//       values: { today: "8", weekly: "52", monthly: "215", yearly: "2680" },
//     },
//     {
//       title: "Rejected Requests",
//       values: { today: "1", weekly: "5", monthly: "18", yearly: "62" },
//     },
//   ];

//   const chartData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     revenue: [120000, 210000, 180000, 250000, 300000, 225000],
//     sales: [32, 45, 40, 60, 75, 50],
//   };

//   const lowStockProducts = [
//     {
//       id: "1",
//       name: "Sugar 1kg",
//       category: "Groceries",
//       currentStock: 5,
//       minimumStock: 20,
//       maxStock: 100,
//       unit: "bags",
//       lastRestocked: "2 days ago",
//     },
//     {
//       id: "2",
//       name: "Rice 5kg",
//       category: "Groceries",
//       currentStock: 0,
//       minimumStock: 15,
//       maxStock: 80,
//       unit: "bags",
//       lastRestocked: "1 week ago",
//     },
//     {
//       id: "3",
//       name: "Cooking Oil 2L",
//       category: "Groceries",
//       currentStock: 12,
//       minimumStock: 25,
//       maxStock: 120,
//       unit: "bottles",
//       lastRestocked: "3 days ago",
//     },
//     {
//       id: "4",
//       name: "Maize Flour 1kg",
//       category: "Groceries",
//       currentStock: 8,
//       minimumStock: 30,
//       maxStock: 150,
//       unit: "bags",
//       lastRestocked: "5 days ago",
//     },
//     {
//       id: "5",
//       name: "Salt 500g",
//       category: "Groceries",
//       currentStock: 18,
//       minimumStock: 20,
//       maxStock: 100,
//       unit: "packets",
//       lastRestocked: "1 day ago",
//     },
//   ];

//   const oldStockProducts = [
//     {
//       id: "1",
//       name: "Instant Noodles Pack",
//       category: "Groceries",
//       currentStock: 45,
//       unit: "packs",
//       daysInStock: 120,
//       lastSold: "4 months ago",
//       purchasePrice: 500,
//       sellingPrice: 800,
//     },
//     {
//       id: "2",
//       name: "Canned Beans 400g",
//       category: "Canned Goods",
//       currentStock: 32,
//       unit: "cans",
//       daysInStock: 95,
//       lastSold: "3 months ago",
//       purchasePrice: 1200,
//       sellingPrice: 1800,
//     },
//     {
//       id: "3",
//       name: "Tomato Paste 70g",
//       category: "Condiments",
//       currentStock: 28,
//       unit: "tubes",
//       daysInStock: 75,
//       lastSold: "2 months ago",
//       purchasePrice: 300,
//       sellingPrice: 500,
//     },
//     {
//       id: "4",
//       name: "Wheat Flour 2kg",
//       category: "Groceries",
//       currentStock: 15,
//       unit: "bags",
//       daysInStock: 65,
//       lastSold: "2 months ago",
//       purchasePrice: 2500,
//       sellingPrice: 3500,
//     },
//     {
//       id: "5",
//       name: "Cornflakes 500g",
//       category: "Breakfast",
//       currentStock: 20,
//       unit: "boxes",
//       daysInStock: 50,
//       lastSold: "7 weeks ago",
//       purchasePrice: 3000,
//       sellingPrice: 4500,
//     },
//   ];

//   const quickActions = [
//     {
//       title: "Add Product",
//       description: "Create and publish a new product",
//       icon: Plus,
//     },
//     {
//       title: "New Order",
//       description: "Register a new customer order",
//       icon: ShoppingCart,
//     },
//     {
//       title: "Manage Inventory",
//       description: "Update stock quantities",
//       icon: Package,
//     },
//     {
//       title: "Add Customer",
//       description: "Register a new customer",
//       icon: Users,
//     },
//     {
//       title: "Generate Report",
//       description: "Download sales analytics",
//       icon: FileText,
//     },
//     {
//       title: "Settings",
//       description: "Configure system preferences",
//       icon: Settings,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-background m-2 rounded-xl">
//       <div className="px-12 sm:px-6 py-8 space-y-10">
//         {/* Header */}
//         <div className="flex items-start justify-between">
//           <ContextBanner />
//         </div>

//         {/* Period Tabs */}
//         <div className="flex justify-end">
//           <Tabs
//             defaultValue="today"
//             onValueChange={(value) => setPeriod(value as Period)}
//           >
//             <TabsList className="bg-primary/10 py-6 px-6">
//               <TabsTrigger value="today" className="py-4 rounded-full px-6">
//                 Today
//               </TabsTrigger>
//               <TabsTrigger value="weekly" className="py-4 rounded-full px-6">
//                 Weekly
//               </TabsTrigger>
//               <TabsTrigger value="monthly" className="py-4 rounded-full px-6">
//                 Monthly
//               </TabsTrigger>
//               <TabsTrigger value="yearly" className="py-4 rounded-full px-6">
//                 Yearly
//               </TabsTrigger>
//             </TabsList>
//           </Tabs>
//         </div>

//         {/* Business Stats */}
//         <div>
//           <h1 className="pb-4 uppercase text-primary tracking-wider">
//             Business Stats
//           </h1>

//           <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
//             {dashboardStats.map((stat, index) => (
//               <StatCard
//                 key={index}
//                 title={stat.title}
//                 values={stat.values}
//                 period={period}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Quick Actions Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2">
//             <SalesChart data={chartData} type="combo" />
//           </div>
//           <Card className="rounded-2xl">
//             <CardHeader>
//               <CardTitle>Quick Actions</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-1 gap-4">
//                 {quickActions.map((action, index) => {
//                   const Icon = action.icon;
//                   return (
//                     <Button
//                       key={index}
//                       variant="outline"
//                       className="h-auto flex items-start gap-4 p-5 rounded-xl justify-start hover:border-primary"
//                     >
//                       <Icon className="w-5 h-5 mt-1 text-primary" />
//                       <div className="text-left">
//                         <p className="font-medium">{action.title}</p>
//                         <p className="text-sm text-muted-foreground">
//                           {action.description}
//                         </p>
//                       </div>
//                     </Button>
//                   );
//                 })}
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         <div>
//           <h1 className="pb-4 uppercase text-primary tracking-wider">
//             Inventory Alerts
//           </h1>

//           <div className="flex gap-6 justify-between items-start w-full">
//             {/* Low Stock Products */}
//             <LowStockProducts
//               products={lowStockProducts}
//               onRestock={handleRestock}
//             />

//             {/* Oldest Stock Products */}
//             <OldestStockProducts
//               products={oldStockProducts}
//               onPromote={handlePromote}
//               onDiscount={handleDiscount}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import ContextBanner from "@/components/custom/portals/owner/ContextBanner";
import StatCard from "@/components/custom/portals/owner/StatCard";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Package,
  ShoppingCart,
  Users,
  FileText,
  Settings,
} from "lucide-react";
import SalesChart from "@/components/custom/portals/owner/SalesChart";
import LowStockProducts from "@/components/custom/portals/owner/LowStockProducts";
import OldestStockProducts from "@/components/custom/portals/owner/OldestStockProducts";
import { Period } from "@/types/period";


export default function OwnerPage() {
  const [period, setPeriod] = useState<Period>("today");

  const handleRestock = (productId: string) => {
    console.log("Restocking product:", productId);
  };

  const handlePromote = (productId: string) => {
    console.log("Promote product:", productId);
  };

  const handleDiscount = (productId: string) => {
    console.log("Apply discount to product:", productId);
  };

  //Mock Data Section
  const dashboardStats = [
    {
      title: "Pending Requests",
      values: { today: "2", weekly: "7", monthly: "28", yearly: "142" },
    },
    {
      title: "Products Sold",
      values: { today: "15", weekly: "100", monthly: "420", yearly: "5200" },
    },
    {
      title: "Revenue",
      values: {
        today: "RWF 45,000",
        weekly: "RWF 285,000",
        monthly: "RWF 1,200,000",
        yearly: "RWF 15,600,000",
      },
    },
    {
      title: "Fulfilled Requests",
      values: { today: "8", weekly: "52", monthly: "215", yearly: "2680" },
    },
    {
      title: "Rejected Requests",
      values: { today: "1", weekly: "5", monthly: "18", yearly: "62" },
    },
  ];

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    revenue: [120000, 210000, 180000, 250000, 300000, 225000],
    sales: [32, 45, 40, 60, 75, 50],
  };

  const lowStockProducts = [
    {
      id: "1",
      name: "Sugar 1kg",
      category: "Groceries",
      currentStock: 5,
      minimumStock: 20,
      maxStock: 100,
      unit: "bags",
      lastRestocked: "2 days ago",
    },
    {
      id: "2",
      name: "Rice 5kg",
      category: "Groceries",
      currentStock: 0,
      minimumStock: 15,
      maxStock: 80,
      unit: "bags",
      lastRestocked: "1 week ago",
    },
    {
      id: "3",
      name: "Cooking Oil 2L",
      category: "Groceries",
      currentStock: 12,
      minimumStock: 25,
      maxStock: 120,
      unit: "bottles",
      lastRestocked: "3 days ago",
    },
    {
      id: "4",
      name: "Maize Flour 1kg",
      category: "Groceries",
      currentStock: 8,
      minimumStock: 30,
      maxStock: 150,
      unit: "bags",
      lastRestocked: "5 days ago",
    },
    {
      id: "5",
      name: "Salt 500g",
      category: "Groceries",
      currentStock: 18,
      minimumStock: 20,
      maxStock: 100,
      unit: "packets",
      lastRestocked: "1 day ago",
    },
  ];

  const oldStockProducts = [
    {
      id: "1",
      name: "Instant Noodles Pack",
      category: "Groceries",
      currentStock: 45,
      unit: "packs",
      daysInStock: 120,
      lastSold: "4 months ago",
      purchasePrice: 500,
      sellingPrice: 800,
    },
    {
      id: "2",
      name: "Canned Beans 400g",
      category: "Canned Goods",
      currentStock: 32,
      unit: "cans",
      daysInStock: 95,
      lastSold: "3 months ago",
      purchasePrice: 1200,
      sellingPrice: 1800,
    },
    {
      id: "3",
      name: "Tomato Paste 70g",
      category: "Condiments",
      currentStock: 28,
      unit: "tubes",
      daysInStock: 75,
      lastSold: "2 months ago",
      purchasePrice: 300,
      sellingPrice: 500,
    },
    {
      id: "4",
      name: "Wheat Flour 2kg",
      category: "Groceries",
      currentStock: 15,
      unit: "bags",
      daysInStock: 65,
      lastSold: "2 months ago",
      purchasePrice: 2500,
      sellingPrice: 3500,
    }
  ];

  const quickActions = [
    {
      title: "Add Product",
      description: "Create and publish a new product",
      icon: Plus,
    },
    {
      title: "New Order",
      description: "Register a new customer order",
      icon: ShoppingCart,
    },
    {
      title: "Manage Inventory",
      description: "Update stock quantities",
      icon: Package,
    },
    {
      title: "Add Customer",
      description: "Register a new customer",
      icon: Users,
    },
    {
      title: "Generate Report",
      description: "Download sales analytics",
      icon: FileText,
    },
    {
      title: "Settings",
      description: "Configure system preferences",
      icon: Settings,
    },
  ];

  return (
    <div className="min-h-screen bg-background rounded-lg m-2">
      <div className="px-6 lg:px-12 py-8 space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <ContextBanner />
        </div>

        {/* Period Tabs */}
        <div className="flex justify-end">
          <Tabs
            defaultValue="today"
            onValueChange={(value) => setPeriod(value as Period)}
          >
            <TabsList className="bg-primary/10 py-6 px-6">
              <TabsTrigger value="today" className="py-4 rounded-full px-6">
                Today
              </TabsTrigger>
              <TabsTrigger value="weekly" className="py-4 rounded-full px-6">
                Weekly
              </TabsTrigger>
              <TabsTrigger value="monthly" className="py-4 rounded-full px-6">
                Monthly
              </TabsTrigger>
              <TabsTrigger value="yearly" className="py-4 rounded-full px-6">
                Yearly
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Business Stats */}
        <div className="space-y-4">
          <h2 className="text-sm font-medium uppercase text-primary tracking-wider">
            Business Stats
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {dashboardStats.map((stat, index) => (
              <StatCard
                key={index}
                title={stat.title}
                values={stat.values}
                period={period}
              />
            ))}
          </div>
        </div>

        {/* Sales Chart and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sales Chart - Takes 2 columns */}
          <div className="lg:col-span-2">
            <SalesChart data={chartData} type="combo" />
          </div>

          {/* Quick Actions - Takes 1 column */}
          <div className="lg:col-span-1">
            <Card className="rounded-2xl h-full">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {quickActions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full h-auto flex items-start gap-4 p-4 rounded-xl justify-start hover:border-primary transition-colors"
                      >
                        <Icon className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                        <div className="text-left flex-1">
                          <p className="font-medium text-sm">{action.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {action.description}
                          </p>
                        </div>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Inventory Alerts */}
        <div className="space-y-4">
          <h2 className="text-sm font-medium uppercase text-primary tracking-wider">
            Inventory Alerts
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Low Stock Products */}
            <div className="w-full">
              <LowStockProducts
                products={lowStockProducts}
                onRestock={handleRestock}
              />
            </div>

            {/* Oldest Stock Products */}
            <div className="w-full">
              <OldestStockProducts
                products={oldStockProducts}
                onPromote={handlePromote}
                onDiscount={handleDiscount}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}