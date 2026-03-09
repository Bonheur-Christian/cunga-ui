interface StatCardProps {
  title: string;
  value?: string;
  values?: {
    today: string;
    weekly: string;
    monthly: string;
    yearly: string;
  };
  period?: "today" | "weekly" | "monthly" | "yearly";
}

export default function StatCard({ title, value, values, period }: StatCardProps) {
  const displayValue = value ?? (values && period ? values[period] : "");
  
  return (
    <div
      className="h-32 rounded-lg border border-gray-300 hover:border-primary 
                    space-y-4 px-4 py-4 transition-all duration-300 
                    hover:scale-105 hover:border-2 hover:z-10"
    >
      <h1 className="text-sm text-gray-400 border-b border-gray-200 pb-4">
        {title}
      </h1>
      <p className="text-2xl font-semibold">{displayValue}</p>
    </div>
  );
}