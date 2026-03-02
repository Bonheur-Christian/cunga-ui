import { SideBarItem } from "@/types/sidebar";
import {
  Home,
  Package,
  Users,
  BarChart3,
  MessageSquare,
  Settings,
  Store,
} from "lucide-react";

export const OwnerSidebarItems: SideBarItem[] = [
  {
    title: "Dashboard",
    href: "/owner",
    icon: <Home size={20} />,
  },
  {
    title: "Products",
    href: "/owner/products",
    icon: <Package size={20} />,
  },
  {
    title: "Staff Management",
    href: "/owner/staff",
    icon: <Users size={20} />,
  },
  {
    title: "Sales & Reports",
    href: "/owner/reports",
    icon: <BarChart3 size={20} />,
  },
  {
    title: "Service Requests",
    href: "/owner/requests",
    icon: <MessageSquare size={20} />,
  },
  {
    title: "Shop Settings",
    href: "/owner/settings",
    icon: <Store size={20} />,
  },
];