import ActivityFeed from "@/components/custom/portals/owner/ActivityFeed";
import ContextBanner from "@/components/custom/portals/owner/ContextBanner";
import FocusMode from "@/components/custom/portals/owner/FocusMode";
import HealthScore from "@/components/custom/portals/owner/HealthScore";
import NeedsAttention from "@/components/custom/portals/owner/NeedsAttention";
import SpeedMetrics from "@/components/custom/portals/owner/SpeedMetrics";
import StabilityBadge from "@/components/custom/portals/owner/StabilityBadge";
import Suggestions from "@/components/custom/portals/owner/Suggestions";
import SystemPulse from "@/components/custom/portals/owner/SystemPulse";
import TodayNumbers from "@/components/custom/portals/owner/TodayNumbers";
import TopHighlights from "@/components/custom/portals/owner/TopHiglights";
import WeeklySnapshot from "@/components/custom/portals/owner/WeeklySnapshot";

export default function OwnerPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <ContextBanner />
          <StabilityBadge status="stable" />
        </div>

        {/* Focus */}
        <FocusMode />

        {/* System Pulse + Needs Attention */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SystemPulse />
          <NeedsAttention />
        </div>

        {/* Speed + Health */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SpeedMetrics />
          <HealthScore />
        </div>

        {/* Weekly + Today */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <WeeklySnapshot />
          <TodayNumbers />
        </div>

        {/* Highlights + Suggestions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TopHighlights />
          <Suggestions />
        </div>

        {/* Activity Feed */}
        <ActivityFeed />
      </div>
    </div>
  );
};

