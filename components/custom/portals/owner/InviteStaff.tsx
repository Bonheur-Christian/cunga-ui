"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserPlus, Mail } from "lucide-react";
import { useState } from "react";

interface InviteStaffProps {
  onInvite?: (email: string, role: string) => void;
  loading?: boolean;
}

const roles = [
  { value: "STOCK_MANAGER", label: "📦 Stock Manager", description: "Manage inventory and stock" },
  { value: "SHOP_KEEPER", label: "🏪 Shop Keeper", description: "Manage shop sales" },
];

export default function InviteStaff({ onInvite, loading = false }: InviteStaffProps) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("STOCK_MANAGER");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email.trim()) {
      alert("Please enter an email address");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    onInvite?.(email, role);
    setSubmitted(true);
    setEmail("");
    setRole("STOCK_MANAGER");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Card className="rounded-2xl w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <UserPlus className="w-5 h-5 text-blue-600" />
          <CardTitle>Invite New Staff Member</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Email Address</label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="email"
                placeholder="staff@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                className="pl-10"
                disabled={loading}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Role</label>
          <Select value={role} onValueChange={setRole} disabled={loading}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {roles.map((r) => (
                <SelectItem key={r.value} value={r.value}>
                  {r.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-xs text-gray-500">
            {roles.find((r) => r.value === role)?.description}
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={handleSubmit}
            disabled={loading || !email.trim()}
            className="flex-1 bg-blue-600 hover:bg-blue-700"
          >
            {loading ? "Sending..." : "Send Invitation"}
          </Button>
        </div>

        {submitted && (
          <div className="p-3 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm">
            ✓ Invitation sent successfully to {email}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
