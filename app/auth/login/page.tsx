"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted", { email, password });
  };
  return (
    <div className="flex min-h-screen">
      {/* Form section */}
      <div className="w-full lg:w-1/2 flex-shrink-0">
        <div className="w-full h-full flex items-center justify-center bg-card px-6 lg:px-16">
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="mb-10">
              <Link href="/" className="text-3xl font-bold text-teal-500">
                Cunga
              </Link>

              <motion.h1
                className="text-3xl font-bold text-foreground mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Sign in
              </motion.h1>
              <motion.p
                className="text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Enter your credentials to access your account
              </motion.p>
            </div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-11 bg-background border-input focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="password"
                    className="text-sm font-medium text-foreground"
                  >
                    Password
                  </Label>
                  <a
                    href="#"
                    className="text-xs text-teal-500 hover:text-teal-500/80 font-medium transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-11 bg-background border-input focus:ring-2 focus:ring-ring"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label
                  htmlFor="remember"
                  className="text-sm text-muted-foreground font-normal cursor-pointer"
                >
                  Remember me for 30 days
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full h-11 font-semibold text-sm"
              >
                Sign in
              </Button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-card px-3 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  type="button"
                  className="h-11 font-medium text-sm"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  className="h-11 font-medium text-sm"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </Button>
              </div>
            </motion.form>

           
          </motion.div>
        </div>
      </div>

      {/* animated panel */}
      <div className="hidden lg:block lg:w-1/2">
        <div className="relative w-full h-full overflow-hidden bg-teal-600 flex items-center justify-center">
          {/* Grid lines */}
          {["15%", "30%", "50%", "70%", "85%"].map((pos, i) => (
            <GridLine
              key={`h-${i}`}
              horizontal
              position={pos}
              delay={i * 0.7}
            />
          ))}
          {["20%", "40%", "60%", "80%"].map((pos, i) => (
            <GridLine
              key={`v-${i}`}
              horizontal={false}
              position={pos}
              delay={i * 0.9}
            />
          ))}

          {/* Floating orbs */}
          <FloatingOrb delay={0} x="10%" y="20%" size={120} opacity={0.15} />
          <FloatingOrb delay={1.5} x="60%" y="15%" size={80} opacity={0.1} />
          <FloatingOrb delay={3} x="75%" y="60%" size={160} opacity={0.12} />
          <FloatingOrb delay={2} x="25%" y="70%" size={60} opacity={0.18} />
          <FloatingOrb delay={4} x="50%" y="45%" size={100} opacity={0.08} />
          <FloatingOrb delay={1} x="85%" y="80%" size={90} opacity={0.14} />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Pulse rings */}
            <div className="relative flex items-center justify-center">
              <PulseRing delay={0} size={200} />
              <PulseRing delay={1.3} size={280} />
              <PulseRing delay={2.6} size={360} />

              {/* Logo / icon */}
              <motion.div
                className="relative w-24 h-24 rounded-2xl backdrop-blur-sm border borde-teal-400 flex items-center justify-center shadow-2xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="w-10 h-10 rounded-lg bg-teal-200"
                  animate={{
                    scale: [1, 0.85, 1],
                    borderRadius: ["20%", "50%", "20%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-3">
                Welcome Back
              </h2>
              <p className="text-white text-sm max-w-xs leading-relaxed">
                Secure access to your dashboard with enterprise-grade
                authentication.
              </p>
            </motion.div>

            {/* Floating dots row */}
            <motion.div
              className="flex gap-2 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-teal-100"
                  animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

//External Functions

const FloatingOrb = ({
  delay,
  x,
  y,
  size,
  opacity,
}: {
  delay: number;
  x: string;
  y: string;
  size: number;
  opacity: number;
}) => (
  <motion.div
    className="absolute rounded-full bg-white"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -30, 0, 20, 0],
      x: [0, 15, -10, 5, 0],
      scale: [1, 1.15, 0.95, 1.05, 1],
      opacity: [opacity, opacity * 1.3, opacity * 0.8, opacity * 1.1, opacity],
    }}
    transition={{ duration: 8, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const PulseRing = ({ delay, size }: { delay: number; size: number }) => (
  <motion.div
    className="absolute rounded-full border-2 border-teal-100"
    style={{ width: size, height: size }}
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: [0.5, 1.5, 0.5], opacity: [0, 0.6, 0] }}
    transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const GridLine = ({
  horizontal,
  position,
  delay,
}: {
  horizontal: boolean;
  position: string;
  delay: number;
}) => (
  <motion.div
    className={`absolute bg-teal-300 ${horizontal ? "h-px w-full" : "w-px h-full"}`}
    style={horizontal ? { top: position, left: 0 } : { left: position, top: 0 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.5, 0] }}
    transition={{ duration: 5, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);
