const score = 82;
const status = "Good";
const risk = "Low";

const getScoreColor = (s: number) => {
  if (s >= 75) return "text-success";
  if (s >= 50) return "text-warning";
  return "text-danger";
};

const HealthScore = () => (
  <section className="space-y-3">
    <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Inventory Health</h2>
    <div className="rounded-xl border border-border bg-card px-5 py-5 flex items-center gap-6">
      <div className="relative w-20 h-20 shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
          <circle
            cx="50" cy="50" r="42" fill="none"
            stroke="hsl(var(--success))"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${score * 2.64} 264`}
          />
        </svg>
        <span className={`absolute inset-0 flex items-center justify-center text-xl font-mono font-bold ${getScoreColor(score)}`}>
          {score}
        </span>
      </div>
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">Status: <span className="text-success font-medium">{status}</span></p>
        <p className="text-sm text-muted-foreground">Risk: <span className="text-foreground font-medium">{risk}</span></p>
      </div>
    </div>
  </section>
);

export default HealthScore;
