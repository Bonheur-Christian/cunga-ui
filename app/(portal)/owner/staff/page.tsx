"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ActiveStaff from "@/components/custom/portals/owner/ActiveStaff";
import PendingInvitations from "@/components/custom/portals/owner/PendingInvitations";
import InviteStaff from "@/components/custom/portals/owner/InviteStaff";
import { Users, Download } from "lucide-react";

interface StaffMember {
  id: string;
  name: string;
  email: string;
  role: "OWNER" | "STOCK_MANAGER" | "SHOP_KEEPER";
  isActive: boolean;
  createdAt: string;
}

interface PendingInvitation {
  id: string;
  email: string;
  role: "OWNER" | "STOCK_MANAGER" | "SHOP_KEEPER";
  sentAt: string;
  expiresAt?: string;
  status: "pending" | "accepted" | "rejected";
}

// Mock data for UI demonstration
const MOCK_ACTIVE_STAFF: StaffMember[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "STOCK_MANAGER",
    isActive: true,
    createdAt: "2026-01-15T10:00:00Z",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "SHOP_KEEPER",
    isActive: true,
    createdAt: "2026-02-01T10:00:00Z",
  },
  {
    id: "3",
    name: "Robert Johnson",
    email: "robert@example.com",
    role: "STOCK_MANAGER",
    isActive: true,
    createdAt: "2026-01-20T10:00:00Z",
  },
];

const MOCK_PENDING_INVITATIONS: PendingInvitation[] = [
  {
    id: "inv1",
    email: "alice@example.com",
    role: "SHOP_KEEPER",
    sentAt: "2026-03-07T14:30:00Z",
    expiresAt: "2026-03-14T14:30:00Z",
    status: "pending",
  },
  {
    id: "inv2",
    email: "michael@example.com",
    role: "STOCK_MANAGER",
    sentAt: "2026-03-05T10:15:00Z",
    expiresAt: "2026-03-12T10:15:00Z",
    status: "pending",
  },
  {
    id: "inv3",
    email: "sarah@example.com",
    role: "SHOP_KEEPER",
    sentAt: "2026-02-28T09:45:00Z",
    status: "accepted",
  },
];

export default function StaffManagementPage() {
  const [activeStaff, setActiveStaff] = useState<StaffMember[]>(MOCK_ACTIVE_STAFF);
  const [pendingInvitations, setPendingInvitations] = useState<PendingInvitation[]>(
    MOCK_PENDING_INVITATIONS
  );
  const [inviteLoading, setInviteLoading] = useState(false);

  const handleInviteStaff = (email: string, role: string) => {
    setInviteLoading(true);
    // Simulate API call
    setTimeout(() => {
      const newInvitation: PendingInvitation = {
        id: `inv${Date.now()}`,
        email,
        role: role as "OWNER" | "STOCK_MANAGER" | "SHOP_KEEPER",
        sentAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        status: "pending",
      };
      setPendingInvitations([newInvitation, ...pendingInvitations]);
      setInviteLoading(false);
    }, 500);
  };

  const handleResendInvitation = (id: string) => {
    alert(`Invitation resent for ${id}`);
  };

  const handleCancelInvitation = (id: string) => {
    setPendingInvitations((prev) => prev.filter((inv) => inv.id !== id));
  };

  const handleRemoveStaff = (id: string) => {
    if (confirm("Are you sure you want to remove this staff member?")) {
      setActiveStaff((prev) => prev.filter((staff) => staff.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-background rounded-lg m-2">
      <div className="px-6 lg:px-12 py-8 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-foreground tracking-tight">
              Staff Management
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage and invite staff members to your platform
            </p>
          </div>
          <Button
            variant="outline"
            className="text-primary border border-primary flex items-center gap-2 hover:text-white hover:bg-primary hover:scale-105 duration-300 transition-all cursor-pointer"
          >
            <Download size={20} />
            Export Report
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-lg border border-gray-300 p-4 space-y-2">
            <p className="text-sm text-gray-500 font-medium">Active Staff</p>
            <p className="text-3xl font-bold">{activeStaff.length}</p>
            <p className="text-xs text-gray-400">
              {activeStaff.filter((s) => s.role === "STOCK_MANAGER").length} Stock Managers
            </p>
          </div>
          <div className="rounded-lg border border-gray-300 p-4 space-y-2">
            <p className="text-sm text-gray-500 font-medium">Pending Invitations</p>
            <p className="text-3xl font-bold">
              {pendingInvitations.filter((i) => i.status === "pending").length}
            </p>
            <p className="text-xs text-gray-400">
              {pendingInvitations.filter((i) => i.status === "accepted").length} Accepted
            </p>
          </div>
          <div className="rounded-lg border border-gray-300 p-4 space-y-2">
            <p className="text-sm text-gray-500 font-medium">Total Members</p>
            <p className="text-3xl font-bold">{activeStaff.length + pendingInvitations.filter((i) => i.status === "accepted").length}</p>
            <p className="text-xs text-gray-400">Active + Accepted invites</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Invite New Staff */}
          <div>
            <h2 className="text-sm font-medium uppercase text-primary tracking-wider mb-4">
              Add New Staff
            </h2>
            <InviteStaff onInvite={handleInviteStaff} loading={inviteLoading} />
          </div>

          {/* Active Staff and Pending Invitations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h2 className="text-sm font-medium uppercase text-primary tracking-wider mb-4">
                Current Team
              </h2>
              <ActiveStaff
                staff={activeStaff}
                onRemove={handleRemoveStaff}
              />
            </div>
            <div>
              <h2 className="text-sm font-medium uppercase text-primary tracking-wider mb-4">
                Invitations
              </h2>
              <PendingInvitations
                invitations={pendingInvitations}
                onResend={handleResendInvitation}
                onCancel={handleCancelInvitation}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}