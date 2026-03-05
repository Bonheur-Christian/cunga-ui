"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

interface ChartData {
  labels: string[];
  revenue: number[];
  sales: number[];
}

interface SalesChartProps {
  data: ChartData;
  type?: "line" | "bar" | "combo";
}

export default function SalesChart({ data, type = "combo" }: SalesChartProps) {
  // Transform data for recharts
  const chartData = data.labels.map((label, index) => ({
    name: label,
    revenue: data.revenue[index],
    sales: data.sales[index],
  }));

  // Format Y-axis for revenue
  const formatRevenue = (value: number) => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
    return value.toString();
  };

  return (
    <Card className="rounded-2xl border-none shadow-lg">
      <CardHeader>
        <CardTitle>Sales & Revenue Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          {type === "line" ? (
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="name"
                stroke="#6b7280"
                style={{ fontSize: "12px" }}
              />
              <YAxis
                yAxisId="left"
                stroke="#14b8a6"
                style={{ fontSize: "12px" }}
                tickFormatter={formatRevenue}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="#0d9488"
                style={{ fontSize: "12px" }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="line" />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="revenue"
                stroke="#14b8a6"
                strokeWidth={3}
                dot={{ fill: "#14b8a6", r: 4 }}
                activeDot={{ r: 6 }}
                name="Revenue"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="sales"
                stroke="#0d9488"
                strokeWidth={3}
                dot={{ fill: "#0d9488", r: 4 }}
                activeDot={{ r: 6 }}
                name="Sales"
              />
            </LineChart>
          ) : type === "bar" ? (
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="name"
                stroke="#6b7280"
                style={{ fontSize: "12px" }}
              />
              <YAxis
                yAxisId="left"
                stroke="#14b8a6"
                style={{ fontSize: "12px" }}
                tickFormatter={formatRevenue}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="#0d9488"
                style={{ fontSize: "12px" }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="rect" />
              <Bar
                yAxisId="left"
                dataKey="revenue"
                fill="#14b8a6"
                radius={[8, 8, 0, 0]}
                name="Revenue"
              />
              <Bar
                yAxisId="right"
                dataKey="sales"
                fill="#0d9488"
                radius={[8, 8, 0, 0]}
                name="Sales"
              />
            </BarChart>
          ) : (
            // Combo chart (Line + Bar)
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="name"
                stroke="#6b7280"
                style={{ fontSize: "12px" }}
              />
              <YAxis
                yAxisId="left"
                stroke="#14b8a6"
                style={{ fontSize: "12px" }}
                tickFormatter={formatRevenue}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="#0d9488"
                style={{ fontSize: "12px" }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="line" />
              <Bar
                yAxisId="left"
                dataKey="revenue"
                fill="#14b8a6"
                radius={[8, 8, 0, 0]}
                name="Revenue"
                opacity={0.8}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="sales"
                stroke="#0d9488"
                strokeWidth={3}
                dot={{ fill: "#0d9488", r: 4 }}
                activeDot={{ r: 6 }}
                name="Sales"
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
