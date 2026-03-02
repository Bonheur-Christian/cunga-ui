const metrics = [
  { icon: "⚡", label: "Avg approval time", value: "1h 23m" },
  { icon: "🚚", label: "Avg fulfillment", value: "3h 10m" },
  { icon: "🎯", label: "Request accuracy", value: "98%" },
];

const SpeedMetrics = () => (
  <section className="space-y-3">
    <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Speed</h2>
    <div className="grid grid-cols-3 gap-2">
      {metrics.map((m, i) => (
        <div key={i} className="rounded-xl border border-border bg-card px-3 py-4 text-center space-y-2">
          <p className="text-2xl">{m.icon}</p>
          <p className="text-lg font-mono font-bold text-foreground">{m.value}</p>
          <p className="text-[11px] text-muted-foreground leading-tight">{m.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default SpeedMetrics;
