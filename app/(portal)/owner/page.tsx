"use client";

import ActivityFeed from "@/components/custom/portals/owner/ActivityFeed";
import ContextBanner from "@/components/custom/portals/owner/ContextBanner";
import HealthScore from "@/components/custom/portals/owner/HealthScore";
import NeedsAttention from "@/components/custom/portals/owner/NeedsAttention";
import Suggestions from "@/components/custom/portals/owner/Suggestions";
import TodayNumbers from "@/components/custom/portals/owner/TodayNumbers";
import TopHighlights from "@/components/custom/portals/owner/TopHiglights";
import WeeklySnapshot from "@/components/custom/portals/owner/WeeklySnapshot";

export default function OwnerPage() {
  return (
    <div className="min-h-screen bg-background m-2 rounded-xl">
      <div className="px-12 sm:px-6 py-8 space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <ContextBanner />
        </div>

        {/* Focus */}

        {/*Needs Attention */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          <NeedsAttention />
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
}
