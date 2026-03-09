"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserCheck, Mail, Trash2, Shield } from "lucide-react";

interface StaffMember {
  id: string;
  name: string;
  email: string;
  role: "OWNER" | "STOCK_MANAGER" | "SHOP_KEEPER";
  isActive: boolean;
  createdAt: string;
  invitationStatus?: "pending" | "accepted" | "rejected";
}

interface ActiveStaffProps {
  staff: StaffMember[];
  onRemove?: (id: string) => void;
  onChangeRole?: (id: string, newRole: string) => void;
}

const roleColors: Record<string, string> = {
  OWNER: "bg-purple-100 text-purple-800",
  STOCK_MANAGER: "bg-blue-100 text-blue-800",
  SHOP_KEEPER: "bg-green-100 text-green-800",
};

const roleIcons: Record<string, string> = {
  OWNER: "👑",
  STOCK_MANAGER: "📦",
  SHOP_KEEPER: "🏪",
};

export default function ActiveStaff({
  staff,
  onRemove,
  onChangeRole,
}: ActiveStaffProps) {
  return (
    <Card className="rounded-2xl w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <UserCheck className="w-5 h-5 text-green-600" />
          <CardTitle>Active Staff Members</CardTitle>
        </div>
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          {staff.length} Members
        </Badge>
      </CardHeader>

      <CardContent>
        {staff.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <UserCheck className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>No active staff members</p>
          </div>
        ) : (
          <div className="space-y-3">
            {staff.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-green-300 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-semibold">
                    {member.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{member.name}</p>
                    <p className="text-xs text-gray-500">{member.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={`${roleColors[member.role]} cursor-default`}>
                    {roleIcons[member.role]} {member.role.replace("_", " ")}
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Active
                  </Badge>
                  {onRemove && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRemove(member.id)}
                      className="text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
