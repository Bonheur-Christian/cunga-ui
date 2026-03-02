type Status = "stable" | "watch" | "risk";

const config: Record<Status, { label: string; emoji: string; color: string }> = {
  stable: { label: "Stable", emoji: "🟢", color: "border-success/40 bg-success/10 text-success" },
  watch: { label: "Watch", emoji: "🟡", color: "border-warning/40 bg-warning/10 text-warning" },
  risk: { label: "Risk", emoji: "🔴", color: "border-danger/40 bg-danger/10 text-danger" },
};

const StabilityBadge = ({ status = "stable" }: { status?: Status }) => {
  const c = config[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono font-medium ${c.color}`}>
      {c.emoji} {c.label}
    </span>
  );
};

export default StabilityBadge;
