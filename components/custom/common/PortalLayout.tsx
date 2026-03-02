"use client";

import NavBar from "@/components/custom/common/Navbar";
import Sidebar from "@/components/custom/common/Sidebar";
import { SideBarItem } from "@/types/sidebar";
import { useState } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  sidebarItems: SideBarItem[]; // later you can strongly type this
}

export default function DashboardLayout({
  children,
  sidebarItems,
}: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-100">
      {/* Desktop Sidebar */}
      <Sidebar
        sidebarItems={sidebarItems}
        className="hidden md:flex flex-none"
      />

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          />

          {/* Sidebar */}
          <div className="md:hidden fixed inset-y-0 left-0 z-50 w-64">
            <Sidebar
              sidebarItems={sidebarItems}
              className="flex shadow-xl"
              isMobile
              onClose={() => setIsSidebarOpen(false)}
            />
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Pass toggle function to Navbar */}
        <NavBar onMenuToggle={() => setIsSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-3 sm:p-4">
          {children}
        </main>
      </div>
    </div>
  );
}