"use client";

import DashboardLayout from "@/components/custom/common/PortalLayout";
import { OwnerSidebarItems } from "@/constants/SidebarItems";

export default function OwnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout sidebarItems={OwnerSidebarItems}>
      {children}
    </DashboardLayout>
  );
}