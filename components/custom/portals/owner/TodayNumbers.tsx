const today = [
  { label: "Requests made", value: 12 },
  { label: "Approved", value: 9 },
  { label: "Fulfilled", value: 6 },
  { label: "Rejected", value: 2 },
];

const yesterday = [
  { label: "Requests made", value: 8 },
];

const TodayNumbers = () => (
  <section className="space-y-3">
    <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Today in Numbers</h2>
    <div className="rounded-xl border border-border bg-card px-5 py-4 space-y-4">
      <div>
        <p className="text-xs font-mono text-muted-foreground mb-2">TODAY</p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          {today.map((t, i) => (
            <div key={i} className="flex justify-between items-baseline">
              <span className="text-sm text-foreground/80">{t.label}</span>
              <span className="text-sm font-mono font-semibold text-foreground">{t.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-border pt-3">
        <p className="text-xs font-mono text-muted-foreground mb-2">YESTERDAY</p>
        {yesterday.map((t, i) => (
          <div key={i} className="flex justify-between items-baseline">
            <span className="text-sm text-foreground/80">{t.label}</span>
            <span className="text-sm font-mono font-semibold text-foreground">{t.value}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TodayNumbers;
