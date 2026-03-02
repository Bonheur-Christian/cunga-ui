const items = [
  { level: "critical", dot: "bg-danger", text: "Sugar is critically low", detail: "2 units left" },
  { level: "warning", dot: "bg-warning", text: "4 requests pending", detail: "2+ days" },
  { level: "ok", dot: "bg-success", text: "All shops submitted weekly reports", detail: "" },
];

const NeedsAttention = () => (
  <section className="space-y-3">
    <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Needs Attention</h2>
    <div className="rounded-xl border border-border bg-card p-1">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
        >
          <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${item.dot}`} />
          <span className="text-sm text-foreground flex-1">{item.text}</span>
          {item.detail && (
            <span className="text-xs font-mono text-muted-foreground">{item.detail}</span>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default NeedsAttention;
