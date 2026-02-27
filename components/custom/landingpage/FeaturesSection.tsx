import { Button } from "@/components/ui/button";
import AnalyticsIcon from "../icons/AnalyticsIcon";
import CloudStorageIcon from "../icons/CloudStorageIcon";
import CollaborationIcon from "../icons/CollaborationIcon";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";

const features = [
  {
    title: "Multi-User Access",
    description:
      "Manage your shop with your team - grant access to staff and track activity in real-time",
    icon: <CollaborationIcon />,
  },
  {
    title: "Inventory Management",
    description:
      "Track unlimited products with comprehensive stock control and automated low-stock alerts",
    icon: <CloudStorageIcon />,
  },
  {
    title: "Sales Analytics",
    description:
      "Get real-time insights into your sales performance with detailed reports and trends",
    icon: <AnalyticsIcon />,
  },
];

const FeaturesSection = () => {
  return (
    <motion.section
      className="w-full bg-slate-200/50 py-20 px-6 md:px-16 lg:px-24 mt-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-[90%] mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-xs">
            Features Built for Business Owners
          </h2>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            Everything you need to run your Business efficiently - from
            inventory tracking to sales analytics and team collaboration
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="self-start md:self-center p-6 rounded-full bg-teal-600 text-primary-foreground font-medium text-sm hover:bg-teal-600/80 transition-all hover:scale-105 duration-300 cursor-pointer">
              Start Free Trial
            </Button>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
