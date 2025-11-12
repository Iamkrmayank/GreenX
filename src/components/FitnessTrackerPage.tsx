import { motion } from "motion/react";
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  ArrowLeft,
  Activity,
  TrendingUp,
  Calendar,
  CheckCircle,
  Target,
  Share2,
  Plus,
  Footprints,
  Heart,
  Info,
  Lock,
  RefreshCw,
  Calculator,
  Eye,
  AlertCircle,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Footer } from "./Footer";
import {
  Line,
  LineChart,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface FitnessTrackerPageProps {
  onBack: () => void;
}

const weeklyData = [
  { day: "Mon", steps: 8500, gxct: 8.5 },
  { day: "Tue", steps: 10200, gxct: 10.2 },
  { day: "Wed", steps: 7800, gxct: 7.8 },
  { day: "Thu", steps: 12000, gxct: 12.0 },
  { day: "Fri", steps: 9500, gxct: 9.5 },
  { day: "Sat", steps: 14200, gxct: 14.2 },
  { day: "Sun", steps: 11000, gxct: 11.0 },
];

const activityHistory = [
  {
    id: 1,
    action: "Morning walk: 5,200 steps",
    timestamp: "2 hours ago",
    gxct: "+5.2",
    icon: Footprints,
  },
  {
    id: 2,
    action: "Cycling session: 45 minutes",
    timestamp: "5 hours ago",
    gxct: "+8.7",
    icon: Activity,
  },
  {
    id: 3,
    action: "Daily step goal achieved",
    timestamp: "Yesterday",
    gxct: "+10.0",
    icon: CheckCircle,
  },
  {
    id: 4,
    action: "Evening jog: 3.5 km",
    timestamp: "Yesterday",
    gxct: "+6.8",
    icon: Footprints,
  },
  {
    id: 5,
    action: "Weekly fitness milestone",
    timestamp: "2 days ago",
    gxct: "+20.0",
    icon: Target,
  },
];

export function FitnessTrackerPage({ onBack }: FitnessTrackerPageProps) {
  const [timeframe, setTimeframe] = useState<"daily" | "weekly">("weekly");
  const currentProgress = 65;
  const monthlyTarget = 300000;
  const currentAchieved = 195000;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Header with Breadcrumb */}
      <div className="bg-white/80 backdrop-blur-md border-b-2 border-emerald-200 sticky top-0 z-40">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-4 mb-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={onBack}
              className="hover:bg-emerald-100 rounded-xl"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </Button>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className="text-gray-600 hover:text-emerald-600 cursor-pointer"
                    onClick={onBack}
                  >
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-gray-900">
                    Fitness Tracker
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl text-gray-900 mb-1">
                  Fitness Tracker
                </h1>
                <p className="text-sm text-gray-600">
                  Google Fit Integration • Connected ✅
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Card className="px-4 py-3 bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300">
                <p className="text-xs text-gray-600 mb-0.5">Latest Earned</p>
                <p className="text-xl text-green-700">
                  +32.8 Carbeneum
                </p>
                <p className="text-xs text-gray-600">2 hours ago</p>
              </Card>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Log Activity
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-2 border-green-300 hover:bg-green-50"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Monthly Progress</span>
              <span className="text-sm text-green-700">{currentProgress}%</span>
            </div>
            <Progress value={currentProgress} className="h-3" />
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Analytics Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-xl text-gray-900 mb-4">Analytics Summary</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="p-5 bg-white border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <Footprints className="w-8 h-8 text-green-600" />
                    <Badge className="bg-green-100 text-green-700 border-0">
                      +22%
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Carbon Saved</p>
                  <p className="text-3xl text-gray-900 mb-1">156.8</p>
                  <p className="text-xs text-gray-500">kg CO₂ this month</p>
                </Card>

                <Card className="p-5 bg-white border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <Activity className="w-8 h-8 text-amber-600" />
                    <Badge className="bg-amber-100 text-amber-700 border-0">
                      +19%
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Tokens Earned</p>
                  <p className="text-3xl text-gray-900 mb-1">98.4</p>
                  <p className="text-xs text-gray-500">Carbeneum this month</p>
                </Card>

                <Card className="p-5 bg-white border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
                </Card>
              </div>
            </motion.div>

            {/* Chart Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-5 bg-white border-2 border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg text-gray-900">Activity Trends</h3>
                  <Tabs
                    value={timeframe}
                    onValueChange={(v) => setTimeframe(v as "daily" | "weekly")}
                  >
                    <TabsList className="bg-gray-100 border border-gray-200">
                      <TabsTrigger value="daily" className="text-xs">
                        Daily
                      </TabsTrigger>
                      <TabsTrigger value="weekly" className="text-xs">
                        Weekly
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={weeklyData}>
                      <defs>
                        <linearGradient id="colorGxct" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="day" stroke="#6b7280" fontSize={12} />
                      <YAxis stroke="#6b7280" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "2px solid #10b981",
                          borderRadius: "8px",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="gxct"
                        stroke="#10b981"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorGxct)"
                        name="Carbeneum Earned"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </motion.div>

            {/* Activity History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-xl text-gray-900 mb-4">Activity History</h2>
              <div className="space-y-3">
                {activityHistory.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                    >
                      <Card className="p-4 bg-white border-2 border-gray-200 hover:border-green-300 hover:shadow-md transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-green-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-900 mb-0.5">
                              {activity.action}
                            </p>
                            <p className="text-xs text-gray-500">
                              {activity.timestamp}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg text-green-600">
                              {activity.gxct}
                            </p>
                            <p className="text-xs text-gray-500">Carbeneum</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* How It Works - Information Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="p-5 bg-white border-2 border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="w-5 h-5 text-green-600" />
                  <h2 className="text-xl text-gray-900">Fitness Tracker — Google Fit / Apple Health</h2>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="what-we-read" className="border-b border-gray-200">
                    <AccordionTrigger className="text-sm text-gray-900 hover:text-green-600 py-3">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-green-600" />
                        <span>What we read</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-700 pb-4 leading-relaxed">
                      Steps, active minutes, workouts (type & duration), and verified gym check-ins (if partnered gym QR is used).
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="how-we-calculate" className="border-b border-gray-200">
                    <AccordionTrigger className="text-sm text-gray-900 hover:text-green-600 py-3">
                      <div className="flex items-center gap-2">
                        <Calculator className="w-4 h-4 text-green-600" />
                        <span>How we calculate</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-700 pb-4 leading-relaxed">
                      Low-carbon mobility (walking/running/cycling) replaces short car trips. We convert those kilometers into avoided car emissions → CO₂ saved → Carbeneum.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="update-frequency" className="border-b border-gray-200">
                    <AccordionTrigger className="text-sm text-gray-900 hover:text-green-600 py-3">
                      <div className="flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 text-green-600" />
                        <span>Update frequency</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-700 pb-4 leading-relaxed">
                      Every 15 minutes while active; summaries each night.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="privacy-control" className="border-b border-gray-200">
                    <AccordionTrigger className="text-sm text-gray-900 hover:text-green-600 py-3">
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-green-600" />
                        <span>Privacy & control</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-700 pb-4 leading-relaxed">
                      We only pull activity totals, not raw GPS routes. You can pause sync anytime.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="troubleshoot" className="border-none">
                    <AccordionTrigger className="text-sm text-gray-900 hover:text-green-600 py-3">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-600" />
                        <span>Troubleshoot</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-700 pb-4 leading-relaxed">
                      Open Health/Fit app once to refresh permissions; ensure "Activity" and "Workouts" are allowed.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Partner Integration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-5 bg-gradient-to-br from-green-100 to-emerald-100 border-2 border-green-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-base text-gray-900">Google Fit</h3>
                    <p className="text-xs text-gray-600">
                      Health & Fitness Tracking
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-700">Status</span>
                  <Badge className="bg-green-600 text-white border-0">
                    Connected ✅
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-2 border-green-400 hover:bg-white"
                  size="sm"
                >
                  Reconnect
                </Button>
              </Card>
            </motion.div>

            {/* Goal Progress */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-5 bg-white border-2 border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-gray-700" />
                  <h3 className="text-base text-gray-900">Monthly Target</h3>
                </div>
                <div className="mb-4">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl text-gray-900">
                      {(currentAchieved / 1000).toFixed(0)}k
                    </span>
                    <span className="text-sm text-gray-500">
                      / {(monthlyTarget / 1000).toFixed(0)}k steps
                    </span>
                  </div>
                  <Progress value={currentProgress} className="h-2 mb-2" />
                  <p className="text-sm text-green-600">
                    {currentProgress}% complete
                  </p>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-xs text-amber-700">
                    🎯 Just {((monthlyTarget - currentAchieved) / 1000).toFixed(0)}k more steps to reach your goal!
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="p-5 bg-white border-2 border-gray-200">
                <h3 className="text-base text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Button
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white justify-start"
                    size="sm"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Log Activity
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-gray-300 hover:bg-gray-50 justify-start"
                    size="sm"
                  >
                    <Activity className="w-4 h-4 mr-2" />
                    View Wallet
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-gray-300 hover:bg-gray-50 justify-start"
                    size="sm"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Achievement
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
