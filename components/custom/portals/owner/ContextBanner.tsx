const getContext = () => {
  const day = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const date = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  
  const dayTips: Record<string, string> = {
    Monday: "Highest request day — stay sharp.",
    Tuesday: "Steady flow expected today.",
    Wednesday: "Mid-week — good time to review pending items.",
    Thursday: "Prepare for end-of-week demand.",
    Friday: "Usually low activity — clear your backlog.",
    Saturday: "Weekend mode — minimal requests expected.",
    Sunday: "Weekend mode — minimal requests expected.",
  };

  return { day, date, tip: dayTips[day] || "" };
};

const ContextBanner = () => {
  const { day, date, tip } = getContext();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      <div>
        <h1 className="text-2xl font-bold text-foreground tracking-tight">
          Good morning <span className="text-gradient">☀️</span>
        </h1>
        <p className="text-sm text-muted-foreground font-mono">{day} · {date}</p>
      </div>
      {tip && (
        <p className="text-xs font-mono text-primary/80 bg-primary/5 border border-primary/20 rounded-lg px-3 py-1.5">
          🕒 {tip}
        </p>
      )}
    </div>
  );
};

export default ContextBanner;
