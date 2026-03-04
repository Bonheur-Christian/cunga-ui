import { Sun, Sunrise, Sunset, Moon } from "lucide-react";

const getContext = () => {
  const now = new Date();

  const day = now.toLocaleDateString("en-US", { weekday: "long" });
  const date = now.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const hour = now.getHours();

  let greeting = "";
  let Icon = Sun;
  let iconColor = "orange";

  if (hour >= 5 && hour < 12) {
    greeting = "Good morning";
    Icon = Sunrise;
    iconColor = "#f59e0b"; 
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good afternoon";
    Icon = Sun;
    iconColor = "#f97316"; 
  } else  {
    greeting = "Good evening";
    Icon = Sunset;
    iconColor = "#fb923c"; 
  } 

  return { day, date, greeting, Icon, iconColor };
};

const ContextBanner = () => {
  const { day, date, greeting, Icon, iconColor } = getContext();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      <div>
        <h1 className="text-2xl flex items-center gap-4 font-bold text-foreground tracking-tight">
          {greeting}
          <Icon size={30} color={iconColor} />
        </h1>
        <p className="text-sm text-muted-foreground font-mono">
          {day} · {date}
        </p>
      </div>
    </div>
  );
};

export default ContextBanner;
