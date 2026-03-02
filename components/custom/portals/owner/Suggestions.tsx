const suggestions = [
  { icon: "💡", text: "Consider restocking Sugar — only 2 units remain." },
  { icon: "📋", text: "You haven't reviewed 3 requests from this morning." },
  { icon: "👁️", text: "Kicukiro shop has had no activity this week." },
];

const Suggestions = () => (
  <section className="space-y-3">
    <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Suggestions</h2>
    <div className="space-y-2">
      {suggestions.map((s, i) => (
        <div
          key={i}
          className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 flex items-start gap-3 cursor-pointer hover:bg-primary/10 transition-colors"
        >
          <span className="text-base mt-0.5">{s.icon}</span>
          <p className="text-sm text-foreground/90">{s.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Suggestions;
