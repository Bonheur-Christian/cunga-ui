const metrics = [
  { label: "Requests", direction: "up" as const, value: "18%" },
  { label: "Rejections", direction: "down" as const, value: "6%" },
  { label: "Stock purchases", direction: "stable" as const, value: "stable" },
  { label: "Products at risk", direction: "warn" as const, value: "2" },
];

const arrow = {
  up: { icon: "↑", color: "text-success" },
  down: { icon: "↓", color: "text-success" },
  stable: { icon: "→", color: "text-muted-foreground" },
  warn: { icon: "!", color: "text-danger" },
};

const WeeklySnapshot = () => (
  <section className="space-y-3">
    <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">This Week</h2>
    <div className="grid grid-cols-2 gap-2">
      {metrics.map((m, i) => (
        <div key={i} className="rounded-xl border border-border bg-card px-4 py-3 space-y-1">
          <p className="text-xs text-muted-foreground">{m.label}</p>
          <p className="text-lg font-mono font-semibold text-foreground">
            <span className={arrow[m.direction].color}>{arrow[m.direction].icon}</span>{" "}
            {m.value}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default WeeklySnapshot;
