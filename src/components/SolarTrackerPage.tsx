import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  ArrowLeft,
  Sun,
  TrendingUp,
  Calendar,
  Activity,
  CheckCircle,
  Target,
  Share2,
  Plus,
  Zap,
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Footer } from "./Footer";
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface SolarTrackerPageProps {
  onBack: () => void;
}

const weeklyData = [
  { day: "Mon", kwh: 32, gxct: 19.2 },
  { day: "Tue", kwh: 38, gxct: 22.8 },
  { day: "Wed", kwh: 35, gxct: 21.0 },
  { day: "Thu", kwh: 41, gxct: 24.6 },
  { day: "Fri", kwh: 37, gxct: 22.2 },
  { day: "Sat", kwh: 40, gxct: 24.0 },
  { day: "Sun", kwh: 36, gxct: 21.6 },
];

const activityHistory = [
  { id: 1, action: "Solar generation peak: 42 kWh", timestamp: "2 hours ago", gxct: "+25.2", icon: Sun },
  { id: 2, action: "Grid export recorded", timestamp: "5 hours ago", gxct: "+12.5", icon: Zap },
  { id: 3, action: "Daily solar goal achieved", timestamp: "Yesterday", gxct: "+18.0", icon: CheckCircle },
  { id: 4, action: "Optimal production hours logged", timestamp: "Yesterday", gxct: "+15.8", icon: Sun },
  { id: 5, action: "Weekly generation milestone", timestamp: "2 days ago", gxct: "+30.0", icon: Target },
];

export function SolarTrackerPage({ onBack }: SolarTrackerPageProps) {
  const currentProgress = 92;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="bg-white/80 backdrop-blur-md border-b-2 border-emerald-200 sticky top-0 z-40">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-4 mb-3">
            <Button variant="ghost" size="icon" onClick={onBack} className="hover:bg-emerald-100 rounded-xl">
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </Button>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-gray-600 hover:text-emerald-600 cursor-pointer" onClick={onBack}>Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-gray-900">Solar Tracker</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl text-gray-900 mb-1">Solar Tracker</h1>
                <p className="text-sm text-gray-600">Inverter API • Connected ✅</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Card className="px-4 py-3 bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-300">
                <p className="text-xs text-gray-600 mb-0.5">Latest Earned</p>
                <p className="text-xl text-amber-700">+52.3 GXCT</p>
                <p className="text-xs text-gray-600">3 hours ago</p>
              </Card>
              <div className="flex gap-2">
                <Button size="sm" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Log Data
                </Button>
                <Button size="sm" variant="outline" className="border-2 border-amber-300 hover:bg-amber-50">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Monthly Progress</span>
              <span className="text-sm text-amber-700">{currentProgress}%</span>
            </div>
            <Progress value={currentProgress} className="h-3" />
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h2 className="text-xl text-gray-900 mb-4">Analytics Summary</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="p-5 bg-white border-2 border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <TrendingUp className="w-8 h-8 text-amber-600" />
                    <Badge className="bg-amber-100 text-amber-700 border-0">↓ 32%</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Carbon Saved</p>
                  <p className="text-3xl text-gray-900 mb-1">412.8</p>
                  <p className="text-xs text-gray-500">kg CO₂ this month</p>
                </Card>

                <Card className="p-5 bg-white border-2 border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <Activity className="w-8 h-8 text-green-600" />
                    <Badge className="bg-green-100 text-green-700 border-0">+28%</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Tokens Earned</p>
                  <p className="text-3xl text-gray-900 mb-1">215.7</p>
                  <p className="text-xs text-gray-500">GXCT this month</p>
                </Card>

                <Card className="p-5 bg-white border-2 border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <Calendar className="w-8 h-8 text-orange-600" />
                    <Badge className="bg-orange-100 text-orange-700 border-0">≈ AED</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Equivalent Value</p>
                  <p className="text-3xl text-gray-900 mb-1">791.82</p>
                  <p className="text-xs text-gray-500">AED this month</p>
                </Card>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Card className="p-5 bg-white border-2 border-gray-200">
                <h3 className="text-lg text-gray-900 mb-4">Generation Trends</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="day" stroke="#6b7280" fontSize={12} />
                      <YAxis stroke="#6b7280" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "white", border: "2px solid #f59e0b", borderRadius: "8px" }} />
                      <Line type="monotone" dataKey="gxct" stroke="#f59e0b" strokeWidth={3} dot={{ fill: "#f59e0b", r: 4 }} name="GXCT Earned" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <h2 className="text-xl text-gray-900 mb-4">Activity History</h2>
              <div className="space-y-3">
                {activityHistory.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <motion.div key={activity.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + index * 0.05 }}>
                      <Card className="p-4 bg-white border-2 border-gray-200 hover:border-amber-300 hover:shadow-md transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-amber-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-900 mb-0.5">{activity.action}</p>
                            <p className="text-xs text-gray-500">{activity.timestamp}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg text-amber-600">{activity.gxct}</p>
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
                  <Info className="w-5 h-5 text-amber-600" />
                  <h2 className="text-xl text-gray-900">How Solar Inverter Integration Works</h2>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="what-we-read" className="border-b border-gray-200">
                    <AccordionTrigger className="text-sm text-gray-900 hover:text-amber-600 py-3">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-amber-600" />
                        <span>What we read</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-700 pb-4 leading-relaxed">
                      We connect directly to your solar inverter API to read kWh generated, timestamp, and panel efficiency data. No access to your home network or other devices.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="how-we-calculate" className="border-b border-gray-200">
                    <AccordionTrigger className="text-sm text-gray-900 hover:text-amber-600 py-3">
                      <div className="flex items-center gap-2">
                        <Calculator className="w-4 h-4 text-amber-600" />
                        <span>How we calculate</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-700 pb-4 leading-relaxed">
                      Solar kWh generated × UAE grid CO₂ factor = CO₂ avoided. We account for clean energy replacing fossil-fuel grid power. GXCT = CO₂ avoided × token rate.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="update-frequency" className="border-b border-gray-200">
                    <AccordionTrigger className="text-sm text-gray-900 hover:text-amber-600 py-3">
                      <div className="flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 text-amber-600" />
                        <span>Update frequency</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-700 pb-4 leading-relaxed">
                      Real-time monitoring during daylight hours. Data syncs every 15 minutes while panels are active, with daily summary calculations.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="privacy-control" className="border-b border-gray-200">
                    <AccordionTrigger className="text-sm text-gray-900 hover:text-amber-600 py-3">
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-amber-600" />
                        <span>Privacy & control</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-700 pb-4 leading-relaxed">
                      Only production data is accessed via secure API. Your energy consumption patterns remain private. Disconnect anytime without affecting your system.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="troubleshoot" className="border-none">
                    <AccordionTrigger className="text-sm text-gray-900 hover:text-amber-600 py-3">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-600" />
                        <span>Troubleshoot</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-700 pb-4 leading-relaxed">
                      If generation data stops: check inverter internet connection, verify API credentials are current, or contact your solar provider to re-enable data sharing.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <Card className="p-5 bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                    <Sun className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-base text-gray-900">Solar Inverter</h3>
                    <p className="text-xs text-gray-600">API Integration</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-700">Status</span>
                  <Badge className="bg-amber-600 text-white border-0">Connected ✅</Badge>
                </div>
                <Button variant="outline" className="w-full border-2 border-amber-400 hover:bg-white" size="sm">Reconnect</Button>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <Card className="p-5 bg-white border-2 border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-gray-700" />
                  <h3 className="text-base text-gray-900">Monthly Target</h3>
                </div>
                <div className="mb-4">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl text-gray-900">1,380</span>
                    <span className="text-sm text-gray-500">/ 1,500 kWh</span>
                  </div>
                  <Progress value={currentProgress} className="h-2 mb-2" />
                  <p className="text-sm text-amber-600">{currentProgress}% complete</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-xs text-green-700">🎯 Just 120 kWh more to reach your goal!</p>
                </div>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
              <Card className="p-5 bg-white border-2 border-gray-200">
                <h3 className="text-base text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white justify-start" size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Log Data
                  </Button>
                  <Button variant="outline" className="w-full border-2 border-gray-300 hover:bg-gray-50 justify-start" size="sm">
                    <Activity className="w-4 h-4 mr-2" />
                    View Wallet
                  </Button>
                  <Button variant="outline" className="w-full border-2 border-gray-300 hover:bg-gray-50 justify-start" size="sm">
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
