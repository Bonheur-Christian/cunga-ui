// "use client";

// const CollaborationIcon = () => (
//   <div className="relative w-full h-full flex flex-col gap-4 p-5 bg-gradient-to-br from-white via-white to-indigo-50/50 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm">
//     {/* Animated background elements */}
//     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent" />
//     <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/5 to-violet-500/5 blur-2xl animate-pulse" />

//     {/* Floating connection lines */}
//     <svg className="absolute inset-0 w-full h-full opacity-20">
//       <defs>
//         <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//           <stop offset="0%" stopColor="#3B82F6" />
//           <stop offset="100%" stopColor="#8B5CF6" />
//         </linearGradient>
//       </defs>
//       <line
//         x1="20"
//         y1="30"
//         x2="80"
//         y2="30"
//         stroke="url(#line-gradient)"
//         strokeWidth="1.5"
//         strokeDasharray="4 4"
//       />
//       <line
//         x1="30"
//         y1="100"
//         x2="100"
//         y2="80"
//         stroke="url(#line-gradient)"
//         strokeWidth="1.5"
//         strokeDasharray="4 4"
//       />
//       <circle cx="80" cy="30" r="2" fill="#3B82F6" className="animate-ping" />
//     </svg>

//     {/* Top section - Message Thread */}
//     <div className="relative group">
//       {/* Background glow on hover */}
//       <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//       <div className="relative flex items-center gap-3 p-2 rounded-xl hover:bg-white/60 transition-all duration-300">
//         {/* Avatar with gradient and status */}
//         <div className="relative">
//           <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
//             JD
//             {/* Online indicator */}
//             <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
//           </div>
//           {/* Ripple effect */}
//           <div className="absolute inset-0 rounded-xl bg-blue-400 animate-ping opacity-20" />
//         </div>

//         {/* Message preview with animated lines */}
//         <div className="flex-1 space-y-2">
//           <div className="flex items-center gap-2">
//             <div
//               className="h-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full w-3/4 animate-pulse"
//               style={{ animationDelay: "0.1s" }}
//             />
//             <span className="text-[10px] text-slate-500">2m ago</span>
//           </div>
//           <div className="h-2.5 bg-gradient-to-r from-slate-400 to-slate-300 rounded-full w-1/2" />
//         </div>

//         {/* User avatars with animation */}
//         <div className="flex items-center -space-x-2">
//           <div className="relative group/avatar">
//             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-white shadow-xl transform hover:scale-110 hover:rotate-6 transition-all duration-300" />
//             <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white opacity-0 group-hover/avatar:opacity-100 transition-opacity" />
//           </div>
//           <div className="relative group/avatar">
//             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-violet-600 border-2 border-white shadow-xl transform hover:scale-110 hover:-rotate-6 transition-all duration-300" />
//           </div>
//           {/* Expand arrow with animation */}
//           <div className="ml-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer">
//             <div className="w-0 h-0 border-l-[6px] border-l-blue-600 border-y-[4px] border-y-transparent transform hover:translate-x-0.5 transition-transform" />
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Middle section - Content Card */}
//     <div className="relative group">
//       <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//       <div className="relative flex items-center gap-3 p-2 rounded-xl hover:bg-white/60 transition-all duration-300">
//         {/* Thumbnail with overlay */}
//         <div className="relative">
//           <div className="w-12 h-16 rounded-xl bg-gradient-to-br from-blue-500/30 to-indigo-500/30 border-2 border-blue-500/30 overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300">
//             {/* Document lines */}
//             <div className="absolute top-2 left-2 right-2 space-y-1">
//               <div className="h-1 bg-blue-500/50 rounded-full w-full" />
//               <div className="h-1 bg-blue-500/50 rounded-full w-2/3" />
//               <div className="h-1 bg-blue-500/50 rounded-full w-4/5" />
//             </div>
//           </div>
//           {/* Play button overlay on hover */}
//           <div className="absolute inset-0 bg-blue-600/50 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//             <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
//               <div className="w-0 h-0 border-l-[6px] border-l-blue-600 border-y-[4px] border-y-transparent ml-0.5" />
//             </div>
//           </div>
//         </div>

//         {/* Content preview with animated bars */}
//         <div className="flex-1 space-y-2">
//           <div className="flex justify-between items-center">
//             <div
//               className="h-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full w-2/3 animate-pulse"
//               style={{ animationDelay: "0.2s" }}
//             />
//             <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
//               New
//             </span>
//           </div>
//           <div className="h-2 bg-gradient-to-r from-slate-400 to-slate-300 rounded-full w-3/4" />
//           <div className="h-2 bg-gradient-to-r from-slate-400 to-slate-300 rounded-full w-5/6" />

//           {/* Collaboration indicators */}
//           <div className="flex items-center gap-2 mt-1">
//             <div className="flex -space-x-1">
//               <div className="w-4 h-4 rounded-full bg-blue-500 border border-white" />
//               <div className="w-4 h-4 rounded-full bg-violet-500 border border-white" />
//             </div>
//             <span className="text-[10px] text-slate-500">2 people editing</span>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Bottom section - User Avatars Row */}
//     <div className="relative mt-auto pt-2 border-t border-slate-200/50">
//       {/* Active now indicator */}
//       <div className="absolute -top-3 left-4 bg-green-100 text-green-600 text-[10px] px-2 py-0.5 rounded-full">
//         3 active now
//       </div>

//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <span className="text-xs font-medium text-slate-600">
//             Team members
//           </span>
//           <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full">
//             8 online
//           </span>
//         </div>

//         <div className="flex items-center -space-x-3">
//           {/* Avatars with hover animations */}
//           {[
//             { color: "from-blue-500 to-blue-600", initial: "JD", delay: 0 },
//             {
//               color: "from-violet-500 to-violet-600",
//               initial: "MK",
//               delay: 0.1,
//             },
//             {
//               color: "from-emerald-500 to-emerald-600",
//               initial: "AL",
//               delay: 0.2,
//             },
//             { color: "from-amber-500 to-amber-600", initial: "RJ", delay: 0.3 },
//           ].map((avatar, i) => (
//             <div key={i} className="relative group/avatar">
//               <div
//                 className={`
//                 w-9 h-9 rounded-full bg-gradient-to-br ${avatar.color} 
//                 border-2 border-white shadow-xl flex items-center justify-center
//                 text-white text-xs font-bold
//                 transform hover:scale-125 hover:-translate-y-2 hover:rotate-6
//                 transition-all duration-300
//               `}
//                 style={{ transitionDelay: `${avatar.delay}s` }}
//               >
//                 {avatar.initial}
//                 {/* Online indicator */}
//                 <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white animate-pulse" />
//               </div>
//               {/* Hover tooltip */}
//               <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover/avatar:opacity-100 transition-opacity whitespace-nowrap">
//                 {avatar.initial} • Online
//               </div>
//             </div>
//           ))}

//           {/* More users indicator with animation */}
//           <div className="relative group/more">
//             <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-500 to-slate-600 border-2 border-white shadow-xl flex items-center justify-center transform hover:scale-125 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
//               <div className="flex gap-0.5">
//                 <div
//                   className="w-1 h-1 rounded-full bg-white animate-pulse"
//                   style={{ animationDelay: "0s" }}
//                 />
//                 <div
//                   className="w-1 h-1 rounded-full bg-white animate-pulse"
//                   style={{ animationDelay: "0.2s" }}
//                 />
//                 <div
//                   className="w-1 h-1 rounded-full bg-white animate-pulse"
//                   style={{ animationDelay: "0.4s" }}
//                 />
//               </div>
//             </div>
//             <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover/more:opacity-100 transition-opacity whitespace-nowrap">
//               +5 others
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Collaboration activity bar */}
//       <div className="mt-3 flex items-center gap-2">
//         <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
//           <div
//             className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full animate-pulse"
//             style={{ animationDuration: "2s" }}
//           />
//         </div>
//         <span className="text-[10px] text-slate-500">75% active</span>
//       </div>
//     </div>

//     <style jsx>{`
//       @keyframes float {
//         0%,
//         100% {
//           transform: translateY(0px);
//         }
//         50% {
//           transform: translateY(-5px);
//         }
//       }
//       .animate-float {
//         animation: float 3s ease-in-out infinite;
//       }
//     `}</style>
//   </div>
// );

// export default CollaborationIcon;


"use client";

const CollaborationIcon = () => (
  <div className="relative w-full h-full flex flex-col gap-4 p-5 bg-gradient-to-br from-white via-white to-indigo-50/50 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm">
    {/* Animated background elements */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent" />
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/5 to-violet-500/5 blur-2xl animate-pulse" />

    {/* Floating connection lines */}
    <svg className="absolute inset-0 w-full h-full opacity-20">
      <defs>
        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <line
        x1="20"
        y1="30"
        x2="80"
        y2="30"
        stroke="url(#line-gradient)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <line
        x1="30"
        y1="100"
        x2="100"
        y2="80"
        stroke="url(#line-gradient)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <circle cx="80" cy="30" r="2" fill="#3B82F6" className="animate-ping" />
    </svg>

    {/* Top section - Stock Alert/Notification */}
    <div className="relative group">
      {/* Background glow on hover */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex items-center gap-3 p-2 rounded-xl hover:bg-white/60 transition-all duration-300">
        {/* Avatar with gradient and status */}
        <div className="relative">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            SM
            {/* Active indicator */}
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
          </div>
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-xl bg-blue-400 animate-ping opacity-20" />
        </div>

        {/* Notification preview with animated lines */}
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <div
              className="h-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full w-3/4 animate-pulse"
              style={{ animationDelay: "0.1s" }}
            />
            <span className="text-[10px] text-slate-500">2m ago</span>
          </div>
          <div className="h-2.5 bg-gradient-to-r from-slate-400 to-slate-300 rounded-full w-1/2" />
        </div>

        {/* Staff/Manager avatars with animation */}
        <div className="flex items-center -space-x-2">
          <div className="relative group/avatar">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-white shadow-xl transform hover:scale-110 hover:rotate-6 transition-all duration-300" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white opacity-0 group-hover/avatar:opacity-100 transition-opacity" />
          </div>
          <div className="relative group/avatar">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-violet-600 border-2 border-white shadow-xl transform hover:scale-110 hover:-rotate-6 transition-all duration-300" />
          </div>
          {/* Expand arrow with animation */}
          <div className="ml-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer">
            <div className="w-0 h-0 border-l-[6px] border-l-blue-600 border-y-[4px] border-y-transparent transform hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>

    {/* Middle section - Inventory/Sales Card */}
    <div className="relative group">
      <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex items-center gap-3 p-2 rounded-xl hover:bg-white/60 transition-all duration-300">
        {/* Thumbnail with overlay */}
        <div className="relative">
          <div className="w-12 h-16 rounded-xl bg-gradient-to-br from-blue-500/30 to-indigo-500/30 border-2 border-blue-500/30 overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300">
            {/* Invoice/Report lines */}
            <div className="absolute top-2 left-2 right-2 space-y-1">
              <div className="h-1 bg-blue-500/50 rounded-full w-full" />
              <div className="h-1 bg-blue-500/50 rounded-full w-2/3" />
              <div className="h-1 bg-blue-500/50 rounded-full w-4/5" />
            </div>
          </div>
          {/* View button overlay on hover */}
          <div className="absolute inset-0 bg-blue-600/50 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[6px] border-l-blue-600 border-y-[4px] border-y-transparent ml-0.5" />
            </div>
          </div>
        </div>

        {/* Stock update preview with animated bars */}
        <div className="flex-1 space-y-2">
          <div className="flex justify-between items-center">
            <div
              className="h-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full w-2/3 animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
            <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
              Low Stock
            </span>
          </div>
          <div className="h-2 bg-gradient-to-r from-slate-400 to-slate-300 rounded-full w-3/4" />
          <div className="h-2 bg-gradient-to-r from-slate-400 to-slate-300 rounded-full w-5/6" />

          {/* Staff updating indicators */}
          <div className="flex items-center gap-2 mt-1">
            <div className="flex -space-x-1">
              <div className="w-4 h-4 rounded-full bg-blue-500 border border-white" />
              <div className="w-4 h-4 rounded-full bg-violet-500 border border-white" />
            </div>
            <span className="text-[10px] text-slate-500">2 staff updating</span>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom section - Staff/Team Avatars Row */}
    <div className="relative mt-auto pt-2 border-t border-slate-200/50">
      {/* Active now indicator */}
      <div className="absolute -top-3 left-4 bg-green-100 text-green-600 text-[10px] px-2 py-0.5 rounded-full">
        3 staff online
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-slate-600">
            Shop staff
          </span>
          <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full">
            5 active
          </span>
        </div>

        <div className="flex items-center -space-x-3">
          {/* Avatars with hover animations */}
          {[
            { color: "from-blue-500 to-blue-600", initial: "MG", delay: 0 },
            {
              color: "from-violet-500 to-violet-600",
              initial: "SA",
              delay: 0.1,
            },
            {
              color: "from-emerald-500 to-emerald-600",
              initial: "JK",
              delay: 0.2,
            },
            { color: "from-amber-500 to-amber-600", initial: "TP", delay: 0.3 },
          ].map((avatar, i) => (
            <div key={i} className="relative group/avatar">
              <div
                className={`
                w-9 h-9 rounded-full bg-gradient-to-br ${avatar.color} 
                border-2 border-white shadow-xl flex items-center justify-center
                text-white text-xs font-bold
                transform hover:scale-125 hover:-translate-y-2 hover:rotate-6
                transition-all duration-300
              `}
                style={{ transitionDelay: `${avatar.delay}s` }}
              >
                {avatar.initial}
                {/* Online indicator */}
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white animate-pulse" />
              </div>
              {/* Hover tooltip */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover/avatar:opacity-100 transition-opacity whitespace-nowrap">
                {avatar.initial} • Online
              </div>
            </div>
          ))}

          {/* More staff indicator with animation */}
          <div className="relative group/more">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-500 to-slate-600 border-2 border-white shadow-xl flex items-center justify-center transform hover:scale-125 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="flex gap-0.5">
                <div
                  className="w-1 h-1 rounded-full bg-white animate-pulse"
                  style={{ animationDelay: "0s" }}
                />
                <div
                  className="w-1 h-1 rounded-full bg-white animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                />
                <div
                  className="w-1 h-1 rounded-full bg-white animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                />
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover/more:opacity-100 transition-opacity whitespace-nowrap">
              +3 others
            </div>
          </div>
        </div>
      </div>

      {/* Shop activity bar */}
      <div className="mt-3 flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full animate-pulse"
            style={{ animationDuration: "2s" }}
          />
        </div>
        <span className="text-[10px] text-slate-500">75% active</span>
      </div>
    </div>

    <style jsx>{`
      @keyframes float {
        0%,
        100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-5px);
        }
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
    `}</style>
  </div>
);

export default CollaborationIcon;