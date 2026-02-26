"use client";

interface ICloudStorageIcon {
  usedStorage?: number;
  totalStorage?: number;
}

const CloudStorageIcon: React.FC<ICloudStorageIcon> = ({
  usedStorage = 456,
  totalStorage = 1000,
}) => {
  const particles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    top: (i * 16.67) % 100,
    left: (i * 26.87) % 100,
  }));

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-4 p-4 bg-gradient-to-br from-slate-50/80 to-slate-100/80 backdrop-blur-sm rounded-3xl overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1000ms" }}
      />

      {/* Floating particles (tiny dots) */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
            style={{
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              animationDelay: `${particle.id * 0.5}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      {/* Database/Inventory icon with modern styling */}
      <div className="absolute top-5 right-8 group">
        <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl transform hover:scale-110 hover:rotate-3 transition-all duration-300">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-blue-400 blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />

          {/* Database icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 14 14"
            fill="none"
            className="relative z-10"
            aria-label="Inventory database icon"
          >
            <ellipse cx="7" cy="3" rx="5" ry="2" fill="white" className="drop-shadow-md" />
            <path d="M2 3v4c0 1.1 2.2 2 5 2s5-.9 5-2V3" fill="white" className="drop-shadow-md" />
            <path d="M2 7v4c0 1.1 2.2 2 5 2s5-.9 5-2V7" fill="white" className="drop-shadow-md" />
          </svg>

          {/* Connection dots */}
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-400 rounded-full border-2 border-white animate-pulse" />
        </div>
      </div>

      {/* Main inventory card with 3D effect */}
      <div className="relative mt-6 group perspective">
        <div className="relative transform -rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          {/* Card shadow */}
          <div className="absolute inset-0 bg-blue-600 rounded-xl blur-xl opacity-50 transform translate-y-2" />

          {/* Card with gradient and border */}
          <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 shadow-2xl border border-blue-400/50 backdrop-blur-sm">
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-white/20 to-transparent opacity-60" />

            {/* Decorative top bar */}
            <div className="absolute top-0 left-4 right-4 h-1 bg-gradient-to-r from-yellow-400/50 via-white to-yellow-400/50 rounded-full" />

            <div className="relative z-10">
              {/* Header with chart icon */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg transform hover:scale-110 hover:rotate-3 transition-all duration-300">
                  <svg width="14" height="14" viewBox="0 0 10 10" fill="none">
                    <rect
                      x="1"
                      y="2"
                      width="2"
                      height="6"
                      fill="white"
                      rx="0.5"
                      className="drop-shadow"
                    />
                    <rect
                      x="4"
                      y="1"
                      width="2"
                      height="7"
                      fill="white"
                      rx="0.5"
                      className="drop-shadow"
                    />
                    <rect
                      x="7"
                      y="3"
                      width="2"
                      height="5"
                      fill="white"
                      rx="0.5"
                      className="drop-shadow"
                    />
                  </svg>
                </div>

                {/* Inventory capacity indicator */}
                <div className="flex-1">
                  <div className="h-1.5 bg-white/30 rounded-full overflow-hidden">
                    <div className="h-full w-3/5 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Inventory info with animated counters */}
              <div className="space-y-1">
                <p className="text-white font-bold text-lg tracking-tight drop-shadow-md flex items-center gap-2">
                  Total Stock
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                    Updated
                  </span>
                </p>
                <div className="flex items-center gap-3 text-white/90">
                  <p className="text-sm font-medium flex items-center gap-1">
                    <span className="text-yellow-300">●</span> {usedStorage} Items
                  </p>
                  <p className="text-xs bg-white/10 px-2 py-0.5 rounded-full">
                    {Math.round((usedStorage / totalStorage) * 1000)} SKUs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sales chart with modern styling */}
      <div className="relative mt-2 w-full px-2">
        {/* Chart label */}
        <div className="flex justify-between items-center mb-2 px-1">
          <span className="text-xs font-medium text-slate-600">
            Weekly Sales
          </span>
          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
            +12% vs last week
          </span>
        </div>

        {/* Bars container */}
        <div className="flex items-end justify-center gap-2">
          {[
            { height: 60, day: "Mon" },
            { height: 80, day: "Tue" },
            { height: 45, day: "Wed" },
            { height: 90, day: "Thu" },
            { height: 70, day: "Fri" },
            { height: 55, day: "Sat" },
            { height: 85, day: "Sun" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1 group">
              {/* Bar with hover effect */}
              <div className="relative">
                <div
                  className="w-4 rounded-t-lg bg-gradient-to-t from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl group-hover:scale-105"
                  style={{ height: `${item.height * 0.4}px` }}
                >
                  {/* Glow on hover */}
                  <div className="absolute inset-0 bg-blue-300 blur-sm opacity-0 group-hover:opacity-50 transition-opacity rounded-t-lg" />

                  {/* Value tooltip on hover */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    ${item.height}k
                  </div>
                </div>
              </div>

              {/* Day label */}
              <span className="text-[10px] font-medium text-slate-500 group-hover:text-blue-600 transition-colors">
                {item.day}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Inventory summary */}
      <div className="flex justify-between items-center w-full mt-1 px-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="text-xs text-slate-600">
              In Stock: {usedStorage}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-slate-300 rounded-full" />
            <span className="text-xs text-slate-600">
              Capacity: {totalStorage - usedStorage}
            </span>
          </div>
        </div>
        <div className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
          {Math.round((usedStorage / totalStorage) * 100)}% filled
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default CloudStorageIcon;