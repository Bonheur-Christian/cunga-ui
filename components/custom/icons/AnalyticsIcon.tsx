const AnalyticsIcon = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center gap-4 px-4 py-32 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm rounded-2xl">
    {/* Decorative background elements */}
    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-feature-accent/5 rounded-2xl" />
    <div className="absolute top-2 right-2 w-12 h-12 bg-accent/10 rounded-full blur-xl" />
    <div className="absolute bottom-2 left-2 w-16 h-16 bg-feature-accent/10 rounded-full blur-xl" />
    
    {/* Donut chart with glow effect */}
    <div className="relative w-24 h-24 transform transition-transform duration-700 hover:scale-105">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl animate-pulse" />
      
      {/* Chart */}
      <svg viewBox="0 0 100 100" className="relative w-full h-full -rotate-90 drop--lg">
        {/* Background circle with gradient */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--feature-card-accent))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--feature-card-accent))" stopOpacity="1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="hsl(var(--feature-card-line))"
          strokeWidth="10"
          strokeOpacity="0.2"
        />
        
        {/* Animated segments */}
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="12"
          strokeDasharray="238.76"
          strokeDashoffset="95.5"
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
          style={{ filter: 'url(#glow)' }}
        />
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="12"
          strokeDasharray="238.76"
          strokeDashoffset="143.26"
          strokeLinecap="round"
          className="transition-all duration-1000 delay-150 ease-out"
        />
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="#FACC15"
          strokeWidth="12"
          strokeDasharray="238.76"
          strokeDashoffset="191"
          strokeLinecap="round"
          className="transition-all duration-1000 delay-300 ease-out"
          style={{ filter: 'drop-(0 0 6px rgba(250, 204, 21, 0.6))' }}
        />
      </svg>
      
      {/* Center dot with pulse */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
      </div>
      
      {/* Percentage labels with modern styling */}
      <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-xs font-medium bg-white/90 px-2 py-1 rounded-full -sm text-accent backdrop-blur-sm">
        60%
      </span>
      <span className="absolute -right-6 top-1/2 -translate-y-1/2 text-xs font-medium bg-white/90 px-2 py-1 rounded-full -sm text-feature-accent backdrop-blur-sm">
        40%
      </span>
    </div>

    {/* Mini cards with glassmorphism */}
    <div className="flex flex-col gap-2 w-full mt-2">
      {[
        { color: "from-accent to-accent/80", icon: "📦", value: 75, label: "Stock Level", trend: "+12%" },
        { color: "from-feature-accent to-feature-accent/80", icon: "💰", value: 45, label: "Revenue", trend: "+8%" },
      ].map((item, i) => (
        <div
          key={i}
          className="group relative flex items-center gap-3 bg-white/70 backdrop-blur-md rounded-xl p-2 -lg hover:-xl transition-all duration-300 hover:-translate-y-0.5 border border-white/50"
        >
          {/* Icon with gradient background */}
          <div className={`
            relative w-8 h-8 rounded-xl bg-gradient-to-br ${item.color} 
            flex items-center justify-center text-lg -md
            group-hover:scale-110 transition-transform duration-300
          `}>
            {item.icon}
            <div className="absolute inset-0 rounded-xl bg-white/20 animate-pulse" />
          </div>
          
          {/* Progress bar with label */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium text-gray-600">{item.label}</span>
              <span className="text-xs font-semibold bg-white/60 px-1.5 py-0.5 rounded-full">
                {item.value}%
              </span>
            </div>
            <div className="h-1.5 bg-gray-200/50 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-700 ease-out`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
          
          {/* Trend indicator */}
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            item.trend.startsWith('+') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
          }`}>
            {item.trend}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default AnalyticsIcon;