"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQSection() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "What is Cunga?",
      answer:
        "Cunga is a comprehensive shop management platform designed to streamline your daily operations. It helps you manage inventory, track sales, handle product requests, and manage multi-location stores all in one place.",
    },
    {
      id: 2,
      question: "How does inventory management work?",
      answer:
        "Cunga tracks your inventory across different locations (stock and shop). You can monitor product quantities, set stock levels, and receive real-time alerts when items are running low. The system tracks expiry dates and helps prevent stockouts.",
    },
    {
      id: 3,
      question: "Can I manage multiple store locations?",
      answer:
        "Yes! Cunga is built for multi-location management. You can manage inventory, sales, and operations across multiple shops and stock locations from a single dashboard, making it perfect for growing retail businesses.",
    },
    {
      id: 4,
      question: "How do sales tracking and analytics work?",
      answer:
        "Every sale is recorded in Cunga with details including product, quantity, total amount, and the staff member who made the sale. You can view comprehensive analytics and reports to understand your sales trends and make data-driven decisions.",
    },
    {
      id: 5,
      question: "What are product requests and how do they work?",
      answer:
        "Product requests allow staff to request products from your main stock. Requests have statuses (Pending, Approved, Rejected, Fulfilled) so you can manage stock distribution between locations efficiently.",
    },
    {
      id: 6,
      question: "What roles and permissions are available?",
      answer:
        "Cunga supports three main roles: Owner (full access), Stock Manager (inventory management), and Shop Keeper (sales and basic operations). This allows you to delegate responsibilities while maintaining control.",
    },
    {
      id: 7,
      question: "Is my data secure?",
      answer:
        "Yes, we prioritize security with encrypted connections, secure authentication, and regular backups. Your business data is protected with enterprise-grade security standards.",
    },
    {
      id: 8,
      question: "Can I track product expiry dates?",
      answer:
        "Yes, Cunga allows you to set and track expiry dates for products. You'll receive notifications for products approaching expiration, helping you minimize waste and ensure product quality.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <section className="border-b border-border/50 bg-gradient-to-b from-background to-background/50">
      <div className="mx-auto max-w-[90%] px-12 py-16">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about Cunga and how it can help
              your business
            </p>
          </motion.div>

          {/* FAQs Grid */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-border/50 rounded-lg overflow-hidden hover:border-teal-500/50 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-card/50 hover:bg-card transition-colors text-left"
                >
                  <h3 className="font-semibold text-foreground text-lg">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedFAQ === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-teal-500" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedFAQ === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 py-4 bg-background/50 border-t border-border/50"
                    >
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Additional Help CTA */}
          <motion.div
            className="mt-12 p-8 rounded-lg border border-teal-500/30 bg-teal-500/5 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Didn&apos;t find your answer?
            </h3>
            <p className="text-muted-foreground mb-4">
              Our support team is here to help. Get in touch with us for any
              additional questions.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#"
                className="inline-block px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-colors"
              >
                Contact Support
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
