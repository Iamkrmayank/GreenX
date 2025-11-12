import { motion } from "motion/react";
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
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
  Calendar,
  Target,
  Award,
  Sparkles,
} from "lucide-react";
import { LeafConfetti } from "./LeafConfetti";
import { Footer } from "./Footer";
import { ActivityRing } from "./ActivityRing";

interface DashboardWebProps {
  onNavigate: (screen: string) => void;
  selectedActivities: string[];
}

const weeklyData = [
  { day: "Mon", earnings: 45, co2: 120 },
  { day: "Tue", earnings: 52, co2: 145 },
  { day: "Wed", earnings: 38, co2: 98 },
  { day: "Thu", earnings: 65, co2: 178 },
  { day: "Fri", earnings: 58, co2: 156 },
  { day: "Sat", earnings: 72, co2: 198 },
  { day: "Sun", earnings: 48, co2: 132 },
];

const activityBreakdown = [
  { name: "Transport", value: 35, color: "#10B981" },
  { name: "Energy", value: 30, color: "#059669" },
  { name: "Fitness", value: 20, color: "#34D399" },
  { name: "Recycling", value: 15, color: "#00B686" },
];

const activityCards = [
  {
    id: "energy",
    title: "Energy Tracker",
    subtitle: "DEWA Integration",
    icon: Zap,
    color: "#10B981",
    earned: "45.2",
    lastAction: "2 hours ago",
    status: "Active",
    progress: 85,
  },
  {
    id: "transport",
    title: "Transport Tracker",
    subtitle: "RTA / Careem",
    icon: Train,
    color: "#059669",
    earned: "28.5",
    lastAction: "1 hour ago",
    status: "Active",
    progress: 72,
  },
  {
    id: "fitness",
    title: "Fitness Tracker",
    subtitle: "Google Fit",
    icon: Activity,
    color: "#34D399",
    earned: "32.8",
    lastAction: "4 hours ago",
    status: "Active",
    progress: 65,
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
    progress: 45,
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
    progress: 92,
  },
  {
    id: "shopping",
    title: "Eco Shopping",
    subtitle: "Amazon.ae / Noon",
    icon: ShoppingBag,
    color: "#6EE7B7",
    earned: "15.4",
    lastAction: "2 days ago",
    status: "Inactive",
    progress: 30,
  },
];

const goals = [
  {
    title: "Monthly CO₂ Goal",
    current: 1247,
    target: 1500,
    unit: "kg",
  },
  {
    title: "Weekly Earnings",
    current: 192,
    target: 250,
    unit: "Carbeneum",
  },
  {
    title: "Metro Journeys",
    current: 38,
    target: 50,
    unit: "trips",
  },
];

export function DashboardWeb({ onNavigate, selectedActivities }: DashboardWebProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const totalCO2Saved = 1247.5;
  const co2Goal = 1500;
  const co2Progress = (totalCO2Saved / co2Goal) * 100;
  const gxctBalance = 192.8;
  const weeklyEarned = 48.3;
  const weeklyGoal = 60;
  const weeklyProgress = (weeklyEarned / weeklyGoal) * 100;

  // Map onboarding integration IDs to activity card IDs
  const activityMapping: { [key: string]: string } = {
    dewa: "energy",
    rta: "transport",
    fitness: "fitness",
    municipality: "recycling",
    solar: "solar",
    shopping: "shopping",
  };

  // Filter activity cards based on selected activities
  // If no activities selected (empty array), show all cards
  const filteredActivityCards = selectedActivities.length === 0
    ? activityCards
    : activityCards.filter(card => 
        selectedActivities.some(selectedId => activityMapping[selectedId] === card.id)
      );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-3 sm:p-4 lg:p-6 pb-20 sm:pb-6">
      <LeafConfetti show={showConfetti} onComplete={() => setShowConfetti(false)} />

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div
          className="mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col gap-3 sm:gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                  Good Morning! 👋
                </h1>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
              </div>
              <p className="text-sm sm:text-base text-gray-700">
                Stake, Mint, Retire, Repeat
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Button
                onClick={() => onNavigate("marketplace")}
                className="flex-1 sm:flex-none bg-white hover:bg-gray-50 text-gray-900 border-2 border-amber-300 hover:border-amber-400 shadow-md h-9 sm:h-10 text-sm"
              >
                <Gift className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-amber-600" />
                Rewards
              </Button>
              <Button
                onClick={() => onNavigate("wallet")}
                className="flex-1 sm:flex-none bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-lg shadow-emerald-500/30 h-9 sm:h-10 text-sm"
              >
                <Wallet className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Withdraw
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {/* Activity Ring - CO₂ Saved */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="h-full"
          >
            <Card
              className="p-4 sm:p-5 bg-white border-2 border-emerald-200 shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer group h-full flex flex-col"
              onClick={() => setShowConfetti(true)}
            >
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-emerald-100 text-emerald-700 border-0 text-xs">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12%
                </Badge>
              </div>
              
              {/* Activity Ring */}
              <div className="flex items-center justify-center mb-3">
                <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px]">
                  <ActivityRing 
                    progress={co2Progress} 
                    color="#10B981" 
                    size={140} 
                    strokeWidth={12}
                    delay={0.2}
                  />
                  {/* Center content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600 mb-1" />
                    <p className="text-xs text-gray-600">CO₂</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-auto">
                <p className="text-xs text-gray-600 mb-1">Total CO₂ Saved</p>
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-900">{totalCO2Saved}</p>
                <p className="text-xs text-gray-600">kg this month</p>
                <div className="mt-2 pt-2 border-t border-gray-100">
                  <p className="text-xs text-emerald-600">Goal: {co2Goal} kg</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Carbeneum Balance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="h-full"
          >
            <Card className="p-4 sm:p-5 bg-white border-2 border-amber-200 shadow-lg hover:shadow-xl hover:border-amber-300 transition-all h-full flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                  <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />
                </div>
                <Badge className="bg-emerald-100 text-emerald-700 border-0 text-xs">
                  Active
                </Badge>
              </div>
              
              {/* Spacer to match ring height */}
              <div className="flex-1 flex items-center justify-center py-6 sm:py-8">
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center mb-4 shadow-lg">
                    <Wallet className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600" />
                  </div>
                </div>
              </div>

              <div className="text-center mt-auto">
                <p className="text-xs text-gray-600 mb-1">Carbenium Balance</p>
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-900">{gxctBalance}</p>
                <p className="text-xs text-gray-600">Carbenium tokens</p>
              </div>
            </Card>
          </motion.div>

          {/* Activity Ring - Weekly Earnings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="h-full"
          >
            <Card className="p-4 sm:p-5 bg-white border-2 border-teal-200 shadow-lg hover:shadow-xl hover:border-teal-300 transition-all h-full flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-teal-100 text-teal-700 border-0 text-xs">
                  Weekly
                </Badge>
              </div>

              {/* Activity Ring */}
              <div className="flex items-center justify-center mb-3">
                <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px]">
                  <ActivityRing 
                    progress={weeklyProgress} 
                    color="#14B8A6" 
                    size={140} 
                    strokeWidth={12}
                    delay={0.4}
                  />
                  {/* Center content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 mb-1" />
                    <p className="text-xs text-gray-600">Week</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-auto">
                <p className="text-xs text-gray-600 mb-1">This Week Earned</p>
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-900">{weeklyEarned}</p>
                <p className="text-xs text-gray-600">Carbenium tokens</p>
                <div className="mt-2 pt-2 border-t border-gray-100">
                  <p className="text-xs text-teal-600">Goal: {weeklyGoal} Carbenium</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Your Rank */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="h-full"
          >
            <Card className="p-4 sm:p-5 bg-white border-2 border-green-200 shadow-lg hover:shadow-xl hover:border-green-300 transition-all h-full flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-green-700" />
                </div>
                <Badge className="bg-amber-100 text-amber-700 border-0 text-xs">
                  #8 UAE
                </Badge>
              </div>
              
              {/* Spacer to match ring height */}
              <div className="flex-1 flex items-center justify-center py-6 sm:py-8">
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mb-4 shadow-lg">
                    <Award className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="text-center mt-auto">
                <p className="text-xs text-gray-600 mb-1">Your Rank</p>
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-900">8th</p>
                <p className="text-xs text-gray-600">of 1,245 users</p>
                <div className="mt-2 pt-2 border-t border-gray-100">
                  <p className="text-xs text-green-600">Top 1% in UAE</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {/* Weekly Earnings Chart */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="p-5 bg-white border-2 border-emerald-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl text-gray-900 mb-1">Weekly Performance</h3>
                  <p className="text-sm text-gray-600">Earnings & CO₂ savings</p>
                </div>
                <Badge className="bg-emerald-100 text-emerald-700 border-0 text-xs">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12%
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={240}>
                <AreaChart data={weeklyData}>
                  <defs>
                    <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0.05} />
                    </linearGradient>
                    <linearGradient id="colorCO2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#34D399" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#34D399" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="day" stroke="#6b7280" style={{ fontSize: '12px' }} />
                  <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#ffffff",
                      border: "2px solid #10B981",
                      borderRadius: "12px",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="earnings"
                    stroke="#10B981"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorEarnings)"
                    name="Carbeneum Earned"
                  />
                  <Area
                    type="monotone"
                    dataKey="co2"
                    stroke="#34D399"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorCO2)"
                    name="CO₂ Saved (kg)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          {/* Activity Breakdown Pie Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="p-5 bg-white border-2 border-teal-200 shadow-lg">
              <h3 className="text-xl text-gray-900 mb-1">Activity Mix</h3>
              <p className="text-sm text-gray-600 mb-4">By category</p>
              <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                  <Pie
                    data={activityBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {activityBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#ffffff",
                      border: "2px solid #14B8A6",
                      borderRadius: "12px",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-4">
                {activityBreakdown.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between text-sm hover:bg-gray-50 p-2 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full shadow-sm"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-gray-700">{item.name}</span>
                    </div>
                    <span className="text-gray-900">{item.value}%</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Goals Section */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="p-5 bg-gradient-to-br from-white to-emerald-50/30 border-2 border-emerald-200 shadow-lg">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-md">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl text-gray-900">Your Goals</h3>
              </div>
              <Button
                variant="ghost"
                className="text-emerald-700 hover:bg-emerald-50 text-sm h-9"
              >
                Manage Goals
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {goals.map((goal, index) => {
                const progress = (goal.current / goal.target) * 100;
                const colors = ['from-emerald-500 to-green-600', 'from-green-500 to-teal-600', 'from-teal-500 to-emerald-600'];
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-700">{goal.title}</p>
                      <span className="text-sm text-emerald-600">{Math.round(progress)}%</span>
                    </div>
                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${colors[index]} rounded-full shadow-sm`}
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      {goal.current.toLocaleString()} / {goal.target.toLocaleString()} {goal.unit}
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>
        </motion.div>

        {/* Activity Cards Grid */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <h3 className="text-xl sm:text-2xl text-gray-900">Your Activities</h3>
            <Button
              onClick={() => onNavigate("addActivity")}
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-md h-9 sm:h-10 text-sm"
            >
              <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Add Activity</span>
              <span className="sm:hidden">Add</span>
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
            {filteredActivityCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="aspect-[4/5]"
                >
                  <Card 
                    onClick={() => {
                      if (card.id === "energy") onNavigate("energy-tracker");
                      else if (card.id === "transport") onNavigate("transport-tracker");
                      else if (card.id === "fitness") onNavigate("fitness-tracker");
                      else if (card.id === "recycling") onNavigate("recycling-tracker");
                      else if (card.id === "solar") onNavigate("solar-tracker");
                      else if (card.id === "shopping") onNavigate("eco-shopping-tracker");
                    }}
                    className="p-4 sm:p-5 bg-white border-2 border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all cursor-pointer group h-full flex flex-col justify-between relative overflow-hidden"
                  >
                    {/* Color accent bar */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ backgroundColor: card.color }}
                    />
                    
                    {/* Header */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform"
                          style={{
                            background: `linear-gradient(135deg, ${card.color}, ${card.color}dd)`,
                          }}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <Badge
                          className={`${
                            card.status === "Active"
                              ? "bg-emerald-100 text-emerald-700 border-0"
                              : card.status === "Pending"
                              ? "bg-amber-100 text-amber-700 border-0"
                              : "bg-gray-100 text-gray-600 border-0"
                          } text-xs px-2 py-0.5`}
                        >
                          {card.status === "Active" ? "●" : card.status === "Pending" ? "○" : "·"}
                        </Badge>
                      </div>
                      
                      <div>
                        <h4 className="text-base text-gray-900 mb-1 line-clamp-1">{card.title}</h4>
                        <p className="text-xs text-gray-600 line-clamp-1">{card.subtitle}</p>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Progress</span>
                        <span className="text-sm" style={{ color: card.color }}>
                          {card.progress}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${card.progress}%` }}
                          transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                          style={{
                            backgroundColor: card.color,
                          }}
                        />
                      </div>
                    </div>

                    {/* Earnings */}
                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-500">Earned</span>
                        <span className="text-xl" style={{ color: card.color }}>
                          +{card.earned}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-1">{card.lastAction}</p>
                    </div>

                    {/* Hover Arrow */}
                    <ChevronRight
                      className="w-4 h-4 absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: card.color }}
                    />
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
