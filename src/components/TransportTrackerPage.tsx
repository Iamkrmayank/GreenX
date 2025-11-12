import { motion } from "motion/react";
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  ArrowLeft,
  Car,
  Train,
  TrendingUp,
  Calendar,
  Activity,
  CheckCircle,
  MapPin,
  Target,
  Share2,
  Plus,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
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
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface TransportTrackerPageProps {
  onBack: () => void;
}

const weeklyData = [
  { day: "Mon", trips: 4, gxct: 11.2 },
  { day: "Tue", trips: 5, gxct: 14.0 },
  { day: "Wed", trips: 3, gxct: 8.4 },
  { day: "Thu", trips: 6, gxct: 16.8 },
  { day: "Fri", trips: 4, gxct: 11.2 },
  { day: "Sat", trips: 2, gxct: 5.6 },
  { day: "Sun", trips: 3, gxct: 8.4 },
];

const activityHistory = [
  {
    id: 1,
    action: "Metro trip: Marina → Business Bay",
    timestamp: "1 hour ago",
    gxct: "+2.8",
    icon: Train,
  },
  {
    id: 2,
    action: "Careem eco-ride: Downtown to Mall",
    timestamp: "3 hours ago",
    gxct: "+4.5",
    icon: Car,
  },
  {
    id: 3,
    action: "Metro trip: Business Bay → Airport",
    timestamp: "Yesterday",
    gxct: "+3.2",
    icon: Train,
  },
  {
    id: 4,
    action: "Bus route 44: Marina → JBR",
    timestamp: "Yesterday",
    gxct: "+2.1",
    icon: Car,
  },
  {
    id: 5,
    action: "Weekly eco-transport milestone",
    timestamp: "2 days ago",
    gxct: "+12.0",
    icon: CheckCircle,
  },
];

export function TransportTrackerPage({ onBack }: TransportTrackerPageProps) {
  const [timeframe, setTimeframe] = useState<"daily" | "weekly">("weekly");
  const currentProgress = 72;
  const monthlyTarget = 100;
  const currentAchieved = 72;

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
                    Transport Tracker
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg">
                <Car className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl text-gray-900 mb-1">
                  Transport Tracker
                </h1>
                <p className="text-sm text-gray-600">
                  RTA / Careem Integration • Connected ✅
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Card className="px-4 py-3 bg-gradient-to-r from-teal-100 to-cyan-100 border-2 border-teal-300">
                <p className="text-xs text-gray-600 mb-0.5">Latest Earned</p>
                <p className="text-xl text-teal-700">
                  +28.5 GXCT
                </p>
                <p className="text-xs text-gray-600">1 hour ago</p>
              </Card>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Trip
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-2 border-teal-300 hover:bg-teal-50"
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
              <span className="text-sm text-teal-700">{currentProgress}%</span>
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
                <Card className="p-5 bg-white border-2 border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <TrendingUp className="w-8 h-8 text-teal-600" />
                    <Badge className="bg-teal-100 text-teal-700 border-0">
                      ↓ 18%
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Carbon Saved</p>
                  <p className="text-3xl text-gray-900 mb-1">287.3</p>
                  <p className="text-xs text-gray-500">kg CO₂ this month</p>
                </Card>

                <Card className="p-5 bg-white border-2 border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <Activity className="w-8 h-8 text-amber-600" />
                    <Badge className="bg-amber-100 text-amber-700 border-0">
                      +15%
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Tokens Earned</p>
                  <p className="text-3xl text-gray-900 mb-1">118.6</p>
                  <p className="text-xs text-gray-500">Carbenium this month</p>
                </Card>

                <Card className="p-5 bg-white border-2 border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <Calendar className="w-8 h-8 text-cyan-600" />
                    <Badge className="bg-cyan-100 text-cyan-700 border-0">
                      ≈ AED
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Equivalent Value</p>
                  <p className="text-3xl text-gray-900 mb-1">435.34</p>
                  <p className="text-xs text-gray-500"> this month</p>
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
                  <h3 className="text-lg text-gray-900">Trip Trends</h3>
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
                    <BarChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="day" stroke="#6b7280" fontSize={12} />
                      <YAxis stroke="#6b7280" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "2px solid #14b8a6",
                          borderRadius: "8px",
                        }}
                      />
                      <Bar
                        dataKey="gxct"
                        fill="#14b8a6"
                        radius={[8, 8, 0, 0]}
                        name="GXCT Earned"
                      />
                    </BarChart>
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
                      <Card className="p-4 bg-white border-2 border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-teal-600" />
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
                            <p className="text-lg text-teal-600">
                              {activity.gxct}
                            </p>
                            <p className="text-xs text-gray-500">GXCT</p>
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
                  <Info className="w-5 h-5 text-teal-600" />
                  <h2 className="text-xl text-gray-900">How RTA/Careem Integration Works</h2>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="what-we-read" className="border-b border-gray-200">
                    <AccordionTrigger className="text-sm text-gray-900 hover:text-teal-600 py-3">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-teal-600" />
                        <span>What we read</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-700 pb-4 leading-relaxed">
                      Trip receipts from RTA (Nol/Metro) and Careem: mode, date/time, distance.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="how-we-calculate" className="border-b border-gray-200">
                    <AccordionTrigger className="text-sm text-gray-900 hover:text-teal-600 py-3">
                      <div className="flex items-center gap-2">
                        <Calculator className="w-4 h-4 text-teal-600" />
                        <span>How we calculate</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-700 pb-4 leading-relaxed">
                      We estimate the car equivalent emissions for the same distance and subtract the public transport/pooled ride footprint to get CO₂ saved. GXCT is minted from that saving.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="update-frequency" className="border-b border-gray-200">
                    <AccordionTrigger className="text-sm text-gray-900 hover:text-teal-600 py-3">
                      <div className="flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 text-teal-600" />
                        <span>Update frequency</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-700 pb-4 leading-relaxed">
                      Near-real-time for Careem receipts; end-of-day for RTA trip logs.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="privacy-control" className="border-b border-gray-200">
                    <AccordionTrigger className="text-sm text-gray-900 hover:text-teal-600 py-3">
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-teal-600" />
                        <span>Privacy & control</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-700 pb-4 leading-relaxed">
                      Only trip metadata (no precise home/work addresses in reports). Toggle "hide exact locations" in settings.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="troubleshoot" className="border-none">
                    <AccordionTrigger className="text-sm text-gray-900 hover:text-teal-600 py-3">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-600" />
                        <span>Troubleshoot</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-700 pb-4 leading-relaxed">
                      If trips are missing: sync your Nol/Careem account and enable "trip history".
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
              <Card className="p-5 bg-gradient-to-br from-teal-100 to-cyan-100 border-2 border-teal-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                    <Train className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-base text-gray-900">RTA & Careem</h3>
                    <p className="text-xs text-gray-600">
                      Roads & Transport Authority
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-700">Status</span>
                  <Badge className="bg-teal-600 text-white border-0">
                    Connected ✅
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-2 border-teal-400 hover:bg-white"
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
                      {currentAchieved}
                    </span>
                    <span className="text-sm text-gray-500">
                      / {monthlyTarget} eco-trips
                    </span>
                  </div>
                  <Progress value={currentProgress} className="h-2 mb-2" />
                  <p className="text-sm text-teal-600">
                    {currentProgress}% complete
                  </p>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-xs text-amber-700">
                    🎯 Just {monthlyTarget - currentAchieved} more trips to reach your goal!
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
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white justify-start"
                    size="sm"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Trip
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
