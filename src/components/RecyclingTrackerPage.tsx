import { motion } from "motion/react";
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  ArrowLeft,
  Recycle,
  TrendingUp,
  Calendar,
  Activity,
  CheckCircle,
  Target,
  Share2,
  Plus,
  Camera,
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
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface RecyclingTrackerPageProps {
  onBack: () => void;
}

const weeklyData = [
  { day: "Mon", items: 5, gxct: 7.5 },
  { day: "Tue", items: 8, gxct: 12.0 },
  { day: "Wed", items: 3, gxct: 4.5 },
  { day: "Thu", items: 6, gxct: 9.0 },
  { day: "Fri", items: 10, gxct: 15.0 },
  { day: "Sat", items: 12, gxct: 18.0 },
  { day: "Sun", items: 4, gxct: 6.0 },
];

const activityHistory = [
  { id: 1, action: "Plastic bottles recycled (8 items)", timestamp: "1 hour ago", gxct: "+4.5", icon: Recycle },
  { id: 2, action: "Cardboard boxes submitted", timestamp: "4 hours ago", gxct: "+6.2", icon: Recycle },
  { id: 3, action: "Glass containers recycled", timestamp: "Yesterday", gxct: "+3.8", icon: Recycle },
  { id: 4, action: "E-waste collection point", timestamp: "Yesterday", gxct: "+12.0", icon: CheckCircle },
  { id: 5, action: "Weekly recycling goal achieved", timestamp: "2 days ago", gxct: "+15.0", icon: Target },
];

export function RecyclingTrackerPage({ onBack }: RecyclingTrackerPageProps) {
  const currentProgress = 49;

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
                  <BreadcrumbPage className="text-gray-900">Recycling Scanner</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center shadow-lg">
                <Recycle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl text-gray-900 mb-1">Recycling Scanner</h1>
                <p className="text-sm text-gray-600">Photo Upload • Connected ✅</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Card className="px-4 py-3 bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300">
                <p className="text-xs text-gray-600 mb-0.5">Latest Earned</p>
                <p className="text-xl text-green-700">+18.6 Carbeneum</p>
                <p className="text-xs text-gray-600">1 hour ago</p>
              </Card>
              <div className="flex gap-2">
                <Button size="sm" className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white">
                  <Camera className="w-4 h-4 mr-2" />
                  Scan Item
                </Button>
                <Button size="sm" variant="outline" className="border-2 border-green-300 hover:bg-green-50">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4">
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
          <div className="lg:col-span-2 space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h2 className="text-xl text-gray-900 mb-4">Analytics Summary</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="p-5 bg-white border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                    <Badge className="bg-green-100 text-green-700 border-0">↓ 25%</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Carbon Saved</p>
                  <p className="text-3xl text-gray-900 mb-1">198.2</p>
                  <p className="text-xs text-gray-500">kg CO₂ this month</p>
                </Card>

                <Card className="p-5 bg-white border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <Activity className="w-8 h-8 text-amber-600" />
                    <Badge className="bg-amber-100 text-amber-700 border-0">+12%</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Tokens Earned</p>
                  <p className="text-3xl text-gray-900 mb-1">75.3</p>
                  <p className="text-xs text-gray-500">Carbeneum this month</p>
                </Card>

                <Card className="p-5 bg-white border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
                </Card>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Card className="p-5 bg-white border-2 border-gray-200">
                <h3 className="text-lg text-gray-900 mb-4">Recycling Trends</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="day" stroke="#6b7280" fontSize={12} />
                      <YAxis stroke="#6b7280" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "white", border: "2px solid #059669", borderRadius: "8px" }} />
                      <Bar dataKey="gxct" fill="#059669" radius={[8, 8, 0, 0]} name="Carbeneum Earned" />
                    </BarChart>
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
                      <Card className="p-4 bg-white border-2 border-gray-200 hover:border-green-300 hover:shadow-md transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-green-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-900 mb-0.5">{activity.action}</p>
                            <p className="text-xs text-gray-500">{activity.timestamp}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg text-green-600">{activity.gxct}</p>
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
                  <h2 className="text-xl text-gray-900">How Photo Scanner Works</h2>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="what-we-read" className="border-b border-gray-200">
                    <AccordionTrigger className="text-sm text-gray-900 hover:text-green-600 py-3">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-green-600" />
                        <span>What we scan</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-700 pb-4 leading-relaxed">
                      Upload photos of recyclable items or scan QR codes at collection points. Our AI identifies material type, weight estimate, and verifies eligible recycling.
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
                      CO₂ saved = (landfill emissions avoided + recycling process benefit) × material weight. Different materials have different rates. Carbeneum = CO₂ saved × token rate.
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
                      Instant verification after photo upload. Tokens are credited within minutes once the item is verified by our AI system.
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
                      Photos are analyzed for recycling verification only. No personal data or location is extracted. Images are deleted after 30 days.
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
                      If item isn't recognized: ensure good lighting, capture clear image of recycling symbol/barcode, or use QR code at collection center.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <Card className="p-5 bg-gradient-to-br from-green-100 to-emerald-100 border-2 border-green-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                    <Recycle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-base text-gray-900">Municipality</h3>
                    <p className="text-xs text-gray-600">Photo Upload System</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-700">Status</span>
                  <Badge className="bg-green-600 text-white border-0">Connected ✅</Badge>
                </div>
                <Button variant="outline" className="w-full border-2 border-green-400 hover:bg-white" size="sm">Reconnect</Button>
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
                    <span className="text-3xl text-gray-900">98</span>
                    <span className="text-sm text-gray-500">/ 200 items</span>
                  </div>
                  <Progress value={currentProgress} className="h-2 mb-2" />
                  <p className="text-sm text-green-600">{currentProgress}% complete</p>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-xs text-amber-700">🎯 Just 102 more items to reach your goal!</p>
                </div>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
              <Card className="p-5 bg-white border-2 border-gray-200">
                <h3 className="text-base text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white justify-start" size="sm">
                    <Camera className="w-4 h-4 mr-2" />
                    Scan Item
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
