import { Sun } from "lucide-react";

const getContext = () => {
  const day = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const date = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  
 
  return { day, date,};
};

const ContextBanner = () => {
  const { day, date } = getContext();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      <div>
        <h1 className="text-2xl flex items-center  gap-4  font-bold text-foreground tracking-tight">
          Good morning 
          <Sun size={30} color="orange"/>
        </h1>
        <p className="text-sm text-muted-foreground font-mono">{day} · {date}</p>
      </div>
     
    </div>
  );
};

export default ContextBanner;
