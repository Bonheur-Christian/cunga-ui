"use client";

import ContextBanner from "@/components/custom/portals/owner/ContextBanner";

export default function OwnerPage() {
  return (
    <div className="min-h-screen bg-background m-2 rounded-xl">
      <div className="px-12 sm:px-6 py-8 space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <ContextBanner />
        </div>

        {/* Main Content */}
        <div>
          {/* status cards */}
        </div>
      </div>
    </div>
  );
}
