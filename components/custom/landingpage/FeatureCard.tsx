import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-start gap-5">
      <div className="w-full aspect-[4/3] rounded-2xl bg-feature-card flex items-center justify-center p-6 overflow-hidden border border-teal-600">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
