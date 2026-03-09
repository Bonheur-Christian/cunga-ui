"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Mail, CheckCircle, XCircle, RotateCw } from "lucide-react";

interface PendingInvitation {
  id: string;
  email: string;
  role: "OWNER" | "STOCK_MANAGER" | "SHOP_KEEPER";
  sentAt: string;
  expiresAt?: string;
  status: "pending" | "accepted" | "rejected";
}

interface PendingInvitationsProps {
  invitations: PendingInvitation[];
  onResend?: (id: string) => void;
  onCancel?: (id: string) => void;
}

const roleEmojis: Record<string, string> = {
  OWNER: "👑",
  STOCK_MANAGER: "📦",
  SHOP_KEEPER: "🏪",
};

const statusConfig = {
  pending: {
    color: "bg-amber-100 text-amber-800 border-amber-200",
    icon: Clock,
    label: "Pending",
  },
  accepted: {
    color: "bg-green-100 text-green-800 border-green-200",
    icon: CheckCircle,
    label: "Accepted",
  },
  rejected: {
    color: "bg-red-100 text-red-800 border-red-200",
    icon: XCircle,
    label: "Rejected",
  },
};

export default function PendingInvitations({
  invitations,
  onResend,
  onCancel,
}: PendingInvitationsProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Card className="rounded-2xl w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-amber-600" />
          <CardTitle>Pending Invitations</CardTitle>
        </div>
        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
          {invitations.length} Pending
        </Badge>
      </CardHeader>

      <CardContent>
        {invitations.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Mail className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>No pending invitations</p>
          </div>
        ) : (
          <div className="space-y-3">
            {invitations.map((invitation) => {
              const statusInfo =
                statusConfig[invitation.status as keyof typeof statusConfig];
              const StatusIcon = statusInfo.icon;

              return (
                <div
                  key={invitation.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-amber-300 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center text-white font-semibold text-xs">
                      {invitation.email.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{invitation.email}</p>
                      <p className="text-xs text-gray-500">
                        Sent: {formatDate(invitation.sentAt)}
                        {invitation.expiresAt &&
                          ` • Expires: ${formatDate(invitation.expiresAt)}`}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-gray-100 text-gray-800">
                      {roleEmojis[invitation.role]}{" "}
                      {invitation.role.replace("_", " ")}
                    </Badge>
                    <Badge className={statusInfo.color}>
                      <StatusIcon size={14} className="mr-1 inline" />
                      {statusInfo.label}
                    </Badge>
                    {invitation.status === "pending" && (
                      <div className="flex gap-2">
                        {onResend && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onResend(invitation.id)}
                            className="text-blue-600 hover:bg-blue-50"
                            title="Resend invitation"
                          >
                            <RotateCw size={16} />
                          </Button>
                        )}
                        {onCancel && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onCancel(invitation.id)}
                            className="text-red-600 hover:bg-red-50"
                            title="Cancel invitation"
                          >
                            <XCircle size={16} />
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
