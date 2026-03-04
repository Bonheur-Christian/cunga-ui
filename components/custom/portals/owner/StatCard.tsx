interface StatCardProps {
  title: string;
  values: {
    today: string;
    weekly: string;
    monthly: string;
    yearly: string;
  };
  period: "today" | "weekly" | "monthly" | "yearly";
}

export default function StatCard({ title, values, period }: StatCardProps) {
  return (
    <div
      className="rounded-lg border border-gray-300 hover:border-primary 
                    space-y-4 px-6 py-4 transition-all duration-300 hover:scale-102 hover:border-2"
    >
      <h1 className="text-sm text-gray-400">{title}</h1>

      <p className="text-2xl font-semibold">{values[period]}</p>
    </div>
  );
}
