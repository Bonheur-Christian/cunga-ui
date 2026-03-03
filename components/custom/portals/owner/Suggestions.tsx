const suggestions = [
  { text: "Consider restocking Sugar — only 2 units remain." },
  { text: "You haven't reviewed 3 requests from this morning." },
  { text: "Kicukiro shop has had no activity this week." },
];

const Suggestions = () => (
  <section className="space-y-3">
    <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
      Suggestions
    </h2>
    <ol className="space-y-2 list-disc list-inside">
      {suggestions.map((s, i) => (
        <li key={i} className="text-sm text-foreground bg-primary/5 p-4 border border-primary/50 rounded-lg hover:scale-103 duration-300 transition-all">
          {s.text}
        </li>
      ))}
    </ol>
  </section>
);

export default Suggestions;
