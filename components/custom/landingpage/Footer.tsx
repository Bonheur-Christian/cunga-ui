"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="dark bg-background text-foreground">
      <div className="bg-background/50 mx-auto max-w-[90%] px-12">
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          {/* Brand Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-teal-500 mb-2">Cunga</h2>
            <p className="text-muted-foreground">
              Get started now, try our product
            </p>
          </div>

          {/* Footer Links Grid */}
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {/* Support */}
            <div>
              <h3 className="mb-4 font-semibold text-foreground">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Help Centre
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Account Information
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help and Solution */}
            <div>
              <h3 className="mb-4 font-semibold text-foreground">
                Help and Solution
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Talk to Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Support Docs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    System Status
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    API Reference
                  </Link>
                </li>
              </ul>
            </div>

            {/* Product */}
            <div>
              <h3 className="mb-4 font-semibold text-foreground">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Updates
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Beta Test
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-teal-500/30 pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2025 Cunga Inc. Copyright • All rights reserved{" "}
              <Link href="#" className="hover:text-accent transition-colors">
                Terms and Conditions
              </Link>{" "}
              •{" "}
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
