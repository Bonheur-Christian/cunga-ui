"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import {
  Menu,
  Sun,
  Moon,
  Monitor,
  User,
  LogOut,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

interface NavBarProps {
  onMenuToggle?: () => void;
}

export default function NavBar({ onMenuToggle }: NavBarProps) {
  const { theme, setTheme } = useTheme();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const getThemeIcon = () => {
    if (theme === "light") return <Sun className="w-5 h-5" />;
    if (theme === "dark") return <Moon className="w-5 h-5" />;
    return <Monitor className="w-5 h-5" />;
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  return (
    <>
      <header className="w-full border-b bg-slate-100 dark:bg-gray-900 dark:border-gray-800">
        <div className="flex items-center justify-between px-4 py-2">

          {/* LEFT SECTION */}
          <div className="flex items-center gap-3">

            {/* Mobile Menu Button */}
            <button
              onClick={onMenuToggle}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>

            {/* Greeting */}
            <div className="hidden md:flex flex-col">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {getGreeting()}, John
              </p>
              <span className="text-xs text-gray-400">
                Owner
              </span>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-2">

            {/* Theme Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                  {getThemeIcon()}
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun className="w-4 h-4 mr-2" /> Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon className="w-4 h-4 mr-2" /> Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  <Monitor className="w-4 h-4 mr-2" /> System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-blue-900 text-white">
                      J
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-52">
                <DropdownMenuItem>
                  <User className="mr-2 w-4 h-4" />
                  My Account
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() => setShowLogoutDialog(true)}
                  className="text-red-500"
                >
                  <LogOut className="mr-2 w-4 h-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>
        </div>
      </header>

      {/* Logout Confirmation Dialog */}
      <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Logout</AlertDialogTitle>
            <AlertDialogDescription>
              This is just a demo logout dialog.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white">
              Logout
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}