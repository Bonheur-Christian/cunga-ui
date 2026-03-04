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

type Period = "today" | "weekly" | "monthly" | "yearly";

export default function OwnerPage() {
  const [period, setPeriod] = useState<Period>("today");

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
    <div className="min-h-screen bg-background m-2 rounded-xl">
      <div className="px-12 sm:px-6 py-8 space-y-10">
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
        <div>
          <h1 className="pb-4 uppercase text-primary tracking-wider">
            Business Stats
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
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

        {/* Quick Actions Section */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;

                return (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-auto flex items-start gap-4 p-5 rounded-xl justify-start hover:border-primary"
                  >
                    <Icon className="w-5 h-5 mt-1 text-primary" />
                    <div className="text-left">
                      <p className="font-medium">{action.title}</p>
                      <p className="text-sm text-muted-foreground">
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
  );
}