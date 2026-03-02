const highlights = [
  { rank: "🥇", label: "Most requested today", value: "Cooking Oil" },
  { rank: "🥈", label: "Most active shop", value: "Nyamirambo Branch" },
  { rank: "🥉", label: "Fastest approval", value: "2 minutes" },
];

const TopHighlights = () => (
  <section className="space-y-3">
    <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Top Highlights</h2>
    <div className="space-y-2">
      {highlights.map((h, i) => (
        <div key={i} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
          <span className="text-xl">{h.rank}</span>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground">{h.label}</p>
            <p className="text-sm font-semibold text-foreground truncate">{h.value}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TopHighlights;
