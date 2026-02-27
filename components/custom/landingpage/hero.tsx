"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FuturisticBackground } from "./FuturisticBackground";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.div
      ref={ref}
      className="max-w-[90%] mx-auto relative"
      style={{ opacity }}
    >
      <FuturisticBackground />
      <section className="max-h-screen flex items-center h-[90vh]">
        <div className="px-4 md:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="flex flex-col justify-center space-y-6 pt-32 md:pt-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-2 leading-tight text-pretty">
                  We&apos;re to Empower Your Business Growth
                </h1>
                <motion.div
                  className="h-1 w-48 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full mt-4 -skew-y-1"
                  initial={{ width: 0 }}
                  animate={{ width: 192 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </motion.div>
              <motion.p
                className="text-gray-700 text-lg leading-relaxed max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Streamline your daily operations from inventory management to
                sales tracking. Built specifically for business owners who want
                to focus on growth, not paperwork.
              </motion.p>
              {/* CTA Buttons */}
              <motion.div
                className="flex items-center gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 rounded-full font-semibold cursor-pointer hover:scale-105 duration-300 transition-all">
                  Try free trial
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 text-gray-600 hover:text-teal-600 font-semibold transition-colors py-6 rounded-full cursor-pointer border border-teal-600 hover:scale-105 duration-300 transition-all"
                >
                  {/* <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <Play size={18} className="fill-gray-700 text-gray-700" />
                  </div> */}
                  See How It Works
                </Button>
              </motion.div>
            </motion.div>
            {/* Right Side - Hero Image Area */}
            <motion.div
              className="relative h-96 md:h-full flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                y: useTransform(scrollYProgress, [0, 1], [0, 150]),
                scale: scale,
              }}
            >
              {/* Background gradient shapes */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-300 to-teal-500 rounded-3xl opacity-80 -z-10"></div>
              {/* Main image placeholder - replace with actual image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                  className="text-center"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Image
                    src="/images/hero.jpg"
                    alt="Hero section Image"
                    width={800}
                    height={200}
                  />
                </motion.div>
              </div>
              {/* Floating card 1 - Payment form */}
              <motion.div
                className="absolute top-12 right-8 bg-white rounded-lg p-4 shadow-lg z-10 w-40"
                initial={{ opacity: 0, y: -30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <p className="text-xs text-gray-500 mb-1">
                  Visualize your operations
                </p>
                <p className="text-lg font-bold text-gray-900 mb-2"></p>
                <div className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 flex justify-center rounded-lg text-sm font-semibold transition-colors">
                  Record
                </div>
              </motion.div>
              {/* Floating card 2 - Credit card */}
              <motion.div
                className="absolute bottom-16 right-4 bg-gray-900 rounded-xl p-4 shadow-xl z-10 w-48 h-32 text-white"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ scale: 1.05, y: 5 }}
              >
                <p className="text-xs font-semibold mb-8">Track sales</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-gray-400">
                      Overview os the sales summary daily
                    </p>
                  </div>
                </div>
              </motion.div>
              {/* Floating icon 1 - Checkmark */}
              <motion.div
                className="absolute top-1/3 left-8 bg-indigo-600 text-white p-3 rounded-lg shadow-lg z-10"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
              {/* Floating icon 2 - Chart/Notification */}
              <motion.div
                className="absolute top-4 right-12 bg-orange-400 rounded-full p-3 shadow-lg z-10"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                whileHover={{ scale: 1.15, rotate: -10 }}
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.5 1.5H19V10H10.5z" />
                </svg>
              </motion.div>
              {/* Bar chart indicator */}
              <motion.div
                className="absolute bottom-24 left-12 bg-white rounded-lg p-3 shadow-lg z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <p className="text-lg font-bold text-gray-900">
                  Business Growth
                </p>
                <p className="text-xs text-gray-600 mb-2">
                  Revenus checking and stock updates
                </p>
                <div className="flex gap-1 mt-2">
                  <div className="w-1 h-4 bg-teal-500 rounded"></div>
                  <div className="w-1 h-6 bg-teal-400 rounded"></div>
                  <div className="w-1 h-3 bg-teal-300 rounded"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* how we deliver support to our client  */}
      <div className="px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-12">
        {/* Left Column */}
        <div className="space-y-8 w-[80%]">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              How we support shop owners all over the world
            </h1>
            <p className="text-base text-gray-500 leading-relaxed">
              Our shop management platform has become the trusted solution for
              retail businesses worldwide, including inventory control systems,
              point of sale software, sales tracking tools, business analytics
              platforms, and multi-store management software
            </p>
          </div>
        </div>
        {/* Right Column - Feature Cards */}
        <div className="space-y-6 w-[80%]">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Inventory Control
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Track, organize, and manage your stock with real-time updates
                and automated low-stock alerts that keep your business running
                smoothly
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Sales Analytics
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Monitor your business performance with comprehensive sales
                reports and detailed insights into revenue trends
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Team Collaboration
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Manage staff access and permissions while tracking team activity
                and performance across your shop
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
