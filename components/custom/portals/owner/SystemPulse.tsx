const pulseItems = [
  { emoji: "🟢", text: "Inventory is stable today.", status: "good" as const },
  { emoji: "⚠️", text: "3 products are running low.", status: "warn" as const },
  { emoji: "📦", text: "5 requests are waiting for approval.", status: "neutral" as const },
  { emoji: "🚀", text: "Fulfillment speed improved by 12% this week.", status: "good" as const },
];

const statusColor = {
  good: "border-success/30 bg-success/5",
  warn: "border-warning/30 bg-warning/5",
  neutral: "border-border bg-secondary/50",
};

const SystemPulse = () => (
  <section className="space-y-3">
    <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">System Pulse</h2>
    <div className="space-y-2">
      {pulseItems.map((item, i) => (
        <div
          key={i}
          className={`rounded-lg border px-4 py-3 text-sm opacity-0 animate-fade-up stagger-${i + 1} ${statusColor[item.status]}`}
        >
          <span className="mr-2">{item.emoji}</span>
          <span className="text-foreground/90">{item.text}</span>
           
        </div>
      ))}
    </div>
  </section>
);

export default SystemPulse;
