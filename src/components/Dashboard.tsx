import { motion } from "motion/react";
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import {
  Leaf,
  TrendingUp,
  Plus,
  Gift,
  Wallet,
  Zap,
  Train,
  Activity,
  Recycle,
  Sun,
  ShoppingBag,
  ChevronRight,
  Menu,
  Bell,
} from "lucide-react";
import { LeafConfetti } from "./LeafConfetti";

interface DashboardProps {
  onNavigate: (screen: string) => void;
}

const weeklyData = [
  { day: "Mon", earnings: 45 },
  { day: "Tue", earnings: 52 },
  { day: "Wed", earnings: 38 },
  { day: "Thu", earnings: 65 },
  { day: "Fri", earnings: 58 },
  { day: "Sat", earnings: 72 },
  { day: "Sun", earnings: 48 },
];

const activityCards = [
  {
    id: "energy",
    title: "Energy Tracker",
    subtitle: "DEWA Integration",
    icon: Zap,
    color: "#00B686",
    earned: "45.2",
    lastAction: "2 hours ago",
    status: "Active",
  },
  {
    id: "transport",
    title: "Transport Tracker",
    subtitle: "RTA / Careem",
    icon: Train,
    color: "#4DC3E9",
    earned: "28.5",
    lastAction: "1 hour ago",
    status: "Active",
  },
  {
    id: "fitness",
    title: "Fitness Tracker",
    subtitle: "Google Fit",
    icon: Activity,
    color: "#CBAF64",
    earned: "32.8",
    lastAction: "4 hours ago",
    status: "Active",
  },
  {
    id: "recycling",
    title: "Recycling Scanner",
    subtitle: "Photo Upload",
    icon: Recycle,
    color: "#00B686",
    earned: "18.6",
    lastAction: "1 day ago",
    status: "Pending",
  },
  {
    id: "solar",
    title: "Solar Tracker",
    subtitle: "Inverter API",
    icon: Sun,
    color: "#CBAF64",
    earned: "52.3",
    lastAction: "3 hours ago",
    status: "Active",
  },
  {
    id: "shopping",
    title: "Eco Shopping",
    subtitle: "Amazon.ae / Noon",
    icon: ShoppingBag,
    color: "#4DC3E9",
    earned: "15.4",
    lastAction: "2 days ago",
    status: "Inactive",
  },
];

export function Dashboard({ onNavigate }: DashboardProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const totalCO2Saved = 1247.5;
  const gxctBalance = 192.8;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#101820] to-[#1a2230] pb-20">
      <LeafConfetti show={showConfetti} onComplete={() => setShowConfetti(false)} />

      {/* Header */}
      <div className="bg-gradient-to-r from-[#00B686] to-[#4DC3E9] p-6 pb-24 rounded-b-3xl">
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Menu className="w-6 h-6" />
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 relative">
              <Bell className="w-6 h-6" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-[#CBAF64] rounded-full" />
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-2xl text-white mb-2">Good Morning! 👋</h1>
          <p className="text-white/80">Let's make Dubai greener today</p>
        </motion.div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 -mt-16 mb-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-4 bg-white/10 backdrop-blur-md border-white/20">
              <div className="flex items-center gap-2 mb-2">
                <Leaf className="w-4 h-4 text-[#00B686]" />
                <span className="text-xs text-gray-400">Total CO₂ Saved</span>
              </div>
              <p className="text-2xl text-white mb-1">{totalCO2Saved}</p>
              <p className="text-xs text-gray-400">kg this month</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onClick={() => setShowConfetti(true)}
          >
            <Card className="p-4 bg-gradient-to-br from-[#CBAF64]/20 to-[#CBAF64]/5 border-[#CBAF64]/30 cursor-pointer animate-glow">
              <div className="flex items-center gap-2 mb-2">
                <Wallet className="w-4 h-4 text-[#CBAF64]" />
                <span className="text-xs text-gray-400">Carbeneum Balance</span>
              </div>
              <p className="text-2xl text-white mb-1">{gxctBalance}</p>
            </Card>
          </motion.div>
        </div>

        {/* Weekly Earnings Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-4 bg-white/10 backdrop-blur-md border-white/20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-white mb-1">Weekly Earnings</h3>
                <p className="text-xs text-gray-400">Last 7 days</p>
              </div>
              <Badge className="bg-[#00B686]/20 text-[#00B686] border-[#00B686]/30">
                <TrendingUp className="w-3 h-3 mr-1" />
                +12%
              </Badge>
            </div>
            <ResponsiveContainer width="100%" height={120}>
              <AreaChart data={weeklyData}>
                <defs>
                  <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00B686" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00B686" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis dataKey="day" stroke="#ffffff60" tick={{ fontSize: 10 }} />
                <YAxis stroke="#ffffff60" tick={{ fontSize: 10 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1a2230",
                    border: "1px solid #00B686",
                    borderRadius: "8px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="earnings"
                  stroke="#00B686"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorEarnings)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mb-6">
        <div className="grid grid-cols-3 gap-3">
          <Button
            onClick={() => onNavigate("addActivity")}
            className="h-auto py-3 flex flex-col gap-2 bg-[#00B686] hover:bg-[#00d99a]"
          >
            <Plus className="w-5 h-5" />
            <span className="text-xs">Add Activity</span>
          </Button>
          <Button
            onClick={() => onNavigate("marketplace")}
            className="h-auto py-3 flex flex-col gap-2 bg-[#CBAF64] hover:bg-[#e0c87f]"
          >
            <Gift className="w-5 h-5" />
            <span className="text-xs">Rewards</span>
          </Button>
          <Button
            onClick={() => onNavigate("wallet")}
            className="h-auto py-3 flex flex-col gap-2 bg-[#4DC3E9] hover:bg-[#6dd5f5]"
          >
            <Wallet className="w-5 h-5" />
            <span className="text-xs">Withdraw</span>
          </Button>
        </div>
      </div>

      {/* Activity Cards */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg text-white">Your Activities</h3>
          <button className="text-[#4DC3E9] text-sm">View All</button>
        </div>

        <div className="space-y-3">
          {activityCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Card className="p-4 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${card.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: card.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white">{card.title}</h4>
                        <Badge
                          className={`text-xs ${
                            card.status === "Active"
                              ? "bg-[#00B686]/20 text-[#00B686] border-[#00B686]/30"
                              : card.status === "Pending"
                              ? "bg-[#CBAF64]/20 text-[#CBAF64] border-[#CBAF64]/30"
                              : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                          }`}
                        >
                          {card.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-400 mb-2">{card.subtitle}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          Last: {card.lastAction}
                        </span>
                        <span className="text-sm text-[#CBAF64]">
                          +{card.earned} Carbeneum
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1a2230] border-t border-white/10 px-6 py-3">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <Button
            variant="ghost"
            size="icon"
            className="text-[#00B686]"
          >
            <Leaf className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate("wallet")}
            className="text-gray-400 hover:text-white"
          >
            <Wallet className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate("marketplace")}
            className="text-gray-400 hover:text-white"
          >
            <Gift className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate("leaderboard")}
            className="text-gray-400 hover:text-white"
          >
            <TrendingUp className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate("profile")}
            className="text-gray-400 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
