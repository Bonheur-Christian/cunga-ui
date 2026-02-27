import { CheckCircle2, Search, FileCheck2, BarChart3 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const benefits = [
  "Real-Time Inventory Tracking & Alerts",
  "Point of Sale & Online Payments",
  "Sales Reports & Analytics Every Month",
  "Multi-Store Management Made Easy",
  "Seamless Online Transactions",
];

const BenefitsSection = () => {
  return (
    <motion.section
      className="w-full py-20 px-4 md:px-12 lg:px-20"
      style={{ background: "var(--gradient-mint)" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-[90%] mx-auto px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left side */}
        <motion.div
          className="flex-1 min-w-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-10">
            What Benefit Will
            <br />
            You Get
          </h2>
          <ul className="space-y-5">
            {benefits.map((item, index) => (
              <motion.li
                key={item}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
              >
                <CheckCircle2
                  className="flex-shrink-0  text-white fill-teal-500"
                  size={30}
                />
                <span className="text-base font-medium text-foreground">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right side */}
        <motion.div
          className="flex-1 relative min-w-0 min-h-[420px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Main image */}
          <div
            className="relative w-full max-w-[500px] ml-auto mr-24 rounded-2xl overflow-hidden"
            style={{ boxShadow: "var(--shadow-float)" }}
          >
            <Image
              src="/images/workspace.jpeg"
              alt="Modern retail shop with POS system"
              className="w-full h-auto object-cover"
              height={400}
              width={500}
            />
          </div>

          {/* Floating card - Expert */}
          <motion.div
            className="absolute -top-2 left-0 lg:-left-4 bg-card rounded-xl px-4 py-3 flex items-center gap-3"
            style={{ boxShadow: "var(--shadow-card)" }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center overflow-hidden">
              <span className="text-sm font-bold text-muted-foreground">
                AY
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Amanda Young
              </p>
              <p className="text-xs text-muted-foreground">
                Expert Saving Money
              </p>
            </div>
            <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center ml-1">
              <Search className="w-4 h-4 text-primary-foreground" />
            </div>
          </motion.div>

          {/* Floating card - Total Income */}
          <motion.div
            className="absolute top-16 -right-2 lg:-right-6 bg-card rounded-xl px-4 py-3"
            style={{ boxShadow: "var(--shadow-card)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: 5 }}
          >
            <p className="text-xs text-muted-foreground mb-1">Total Income</p>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-foreground">$245.00</span>
              <BarChart3 className="w-5 h-5 text-primary" />
            </div>
          </motion.div>

          {/* Floating icon */}
          <motion.div
            className="absolute top-1/2 -left-2 lg:-left-6 w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center"
            style={{ boxShadow: "var(--shadow-card)" }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <FileCheck2 className="text-white " size={40} />
          </motion.div>

          {/* Floating card - Success */}
          <motion.div
            className="absolute -bottom-4 left-4 lg:left-0 bg-card rounded-xl px-5 py-3 flex items-center gap-3"
            style={{ boxShadow: "var(--shadow-card)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <CheckCircle2 className="w-6 h-6 text-primary fill-teal-500 stroke-primary-foreground" />
            <span className="text-sm font-semibold text-foreground">
              Money Transfer Successful
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BenefitsSection;
