"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="max-h-screen flex items-center max-w-[90%] mx-auto h-[90vh]">
      <div className="mx-auto px-4 md:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-2 leading-tight text-pretty">
                We&apos;re here to Increase your Productivity
              </h1>
              <div className="h-1 w-48 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full mt-4 -skew-y-1"></div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed max-w-md">
              Let&apos;s make your work more organize and easily using the
              Taskio Dashboard with many of the latest featuresin managing work
              every day.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 rounded-full font-semibold transition-colors cursor-pointer hover:scale-105 duration-300">
                Try free trial
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 text-gray-800 hover:text-teal-600 font-semibold transition-colors py-6 rounded-full cursor-pointer border border-teal-600 hover:scale-105 duration-300"
              >
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <Play size={18} className="fill-gray-700 text-gray-700" />
                </div>
                View Demo
              </Button>
            </div>
          </div>

          {/* Right Side - Hero Image Area */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            {/* Background gradient shapes */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-300 to-teal-500 rounded-3xl opacity-80 -z-10"></div>

            {/* Main image placeholder - replace with actual image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="text-center text-">
                <Image
                  src="/images/hero.jpg"
                  alt="Hero section Image"
                  width={800}
                  height={200}
                />
              </div>
            </div>

            {/* Floating card 1 - Payment form */}
            <div className="absolute top-12 right-8 bg-white rounded-lg p-4 shadow-lg z-10 w-40">
              <p className="text-xs text-gray-500 mb-1">Enter amount</p>
              <p className="text-lg font-bold text-gray-900 mb-2">$450.00</p>
              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg text-sm font-semibold transition-colors">
                Send
              </button>
            </div>

            {/* Floating card 2 - Credit card */}
            <div className="absolute bottom-16 right-4 bg-gray-900 rounded-xl p-4 shadow-xl z-10 w-48 h-32 text-white">
              <p className="text-xs font-semibold mb-8">Credit Card</p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-gray-400">Total income</p>
                  <p className="text-xl font-bold">$245.00</p>
                </div>
                <p className="text-sm">09/25</p>
              </div>
            </div>

            {/* Floating icon 1 - Checkmark */}
            <div className="absolute top-1/3 left-8 bg-indigo-600 text-white p-3 rounded-lg shadow-lg z-10">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Floating icon 2 - Chart/Notification */}
            <div className="absolute top-4 right-12 bg-orange-400 rounded-full p-3 shadow-lg z-10">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.5 1.5H19V10H10.5z" />
              </svg>
            </div>

            {/* Bar chart indicator */}
            <div className="absolute bottom-24 left-12 bg-white rounded-lg p-3 shadow-lg z-10">
              <p className="text-xs text-gray-600 mb-2">Total income</p>
              <p className="text-lg font-bold text-gray-900">$245.00</p>
              <div className="flex gap-1 mt-2">
                <div className="w-1 h-4 bg-teal-500 rounded"></div>
                <div className="w-1 h-6 bg-teal-400 rounded"></div>
                <div className="w-1 h-3 bg-teal-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
