const feed = [
  { time: "2m ago", text: "John approved 20 Sugar for Kimironko Shop", icon: "✅" },
  { time: "8m ago", text: "Stock updated: Rice +100 units", icon: "📦" },
  { time: "15m ago", text: "Nyabugogo shop made 3 new requests", icon: "📝" },
  { time: "22m ago", text: "Kicukiro shop fulfilled order #1247", icon: "🚚" },
  { time: "30m ago", text: "Low stock alert triggered for Flour", icon: "⚠️" },
];

const ActivityFeed = () => (
  <section className="space-y-3">
    <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Live Activity</h2>
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      {feed.map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-3 px-4 py-3 border-b border-border last:border-b-0 hover:bg-secondary/30 transition-colors"
        >
          <span className="text-base mt-0.5">{item.icon}</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-foreground/90">{item.text}</p>
          </div>
          <span className="text-[11px] font-mono text-muted-foreground shrink-0 mt-0.5">{item.time}</span>
        </div>
      ))}
    </div>
  </section>
);

export default ActivityFeed;
