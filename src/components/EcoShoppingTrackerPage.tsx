import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  ArrowLeft,
  ShoppingBag,
  TrendingUp,
  Calendar,
  Activity,
  CheckCircle,
  Target,
  Share2,
  Plus,
  Package,
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
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface EcoShoppingTrackerPageProps {
  onBack: () => void;
}

const weeklyData = [
  { day: "Mon", items: 2, gxct: 4.2 },
  { day: "Tue", items: 1, gxct: 2.1 },
  { day: "Wed", items: 3, gxct: 6.3 },
  { day: "Thu", items: 0, gxct: 0 },
  { day: "Fri", items: 4, gxct: 8.4 },
  { day: "Sat", items: 5, gxct: 10.5 },
  { day: "Sun", items: 2, gxct: 4.2 },
];

const activityHistory = [
  { id: 1, action: "Eco-friendly cleaning products", timestamp: "1 day ago", gxct: "+3.8", icon: ShoppingBag },
  { id: 2, action: "Reusable shopping bags (set of 5)", timestamp: "3 days ago", gxct: "+5.2", icon: Package },
  { id: 3, action: "Sustainable bamboo kitchenware", timestamp: "5 days ago", gxct: "+4.6", icon: ShoppingBag },
  { id: 4, action: "Energy-efficient LED bulbs", timestamp: "1 week ago", gxct: "+6.8", icon: Package },
  { id: 5, action: "Weekly eco-shopping milestone", timestamp: "1 week ago", gxct: "+10.0", icon: Target },
];

export function EcoShoppingTrackerPage({ onBack }: EcoShoppingTrackerPageProps) {
  const currentProgress = 30;

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
                  <BreadcrumbPage className="text-gray-900">Eco Shopping</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-lg">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl text-gray-900 mb-1">Eco Shopping</h1>
                <p className="text-sm text-gray-600">Amazon.ae / Noon • Connected ✅</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Card className="px-4 py-3 bg-gradient-to-r from-teal-100 to-cyan-100 border-2 border-teal-300">
                <p className="text-xs text-gray-600 mb-0.5">Latest Earned</p>
                <p className="text-xl text-teal-700">+15.4 Carbeneum</p>
                <p className="text-xs text-gray-600">2 days ago</p>
              </Card>
              <div className="flex gap-2">
                <Button size="sm" className="bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Purchase
                </Button>
                <Button size="sm" variant="outline" className="border-2 border-teal-300 hover:bg-teal-50">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4">
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
          <div className="lg:col-span-2 space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h2 className="text-xl text-gray-900 mb-4">Analytics Summary</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="p-5 bg-white border-2 border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <TrendingUp className="w-8 h-8 text-teal-600" />
                    <Badge className="bg-teal-100 text-teal-700 border-0">↓ 8%</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Carbon Saved</p>
                  <p className="text-3xl text-gray-900 mb-1">89.4</p>
                  <p className="text-xs text-gray-500">kg CO₂ this month</p>
                </Card>

                <Card className="p-5 bg-white border-2 border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <Activity className="w-8 h-8 text-amber-600" />
                    <Badge className="bg-amber-100 text-amber-700 border-0">+5%</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Tokens Earned</p>
                  <p className="text-3xl text-gray-900 mb-1">42.7</p>
                  <p className="text-xs text-gray-500">Carbeneum this month</p>
                </Card>

                <Card className="p-5 bg-white border-2 border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all">
                </Card>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Card className="p-5 bg-white border-2 border-gray-200">
                <h3 className="text-lg text-gray-900 mb-4">Shopping Trends</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="day" stroke="#6b7280" fontSize={12} />
                      <YAxis stroke="#6b7280" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "white", border: "2px solid #2dd4bf", borderRadius: "8px" }} />
                      <Bar dataKey="gxct" fill="#2dd4bf" radius={[8, 8, 0, 0]} name="Carbeneum Earned" />
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
                      <Card className="p-4 bg-white border-2 border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-teal-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-900 mb-0.5">{activity.action}</p>
                            <p className="text-xs text-gray-500">{activity.timestamp}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg text-teal-600">{activity.gxct}</p>
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
                  <Info className="w-5 h-5 text-teal-600" />
                  <h2 className="text-xl text-gray-900">How E-commerce Integration Works</h2>
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
                      We scan your Amazon.ae and Noon order history for eco-certified products (organic, recycled, energy-efficient, plastic-free). Only product categories and eco-labels are tracked.
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
                      Each eco-product has a baseline CO₂ impact vs. conventional alternatives. We credit the difference: eco-product emissions - standard product emissions = CO₂ saved. Carbeneum = CO₂ saved × token rate.
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
                      Order history is checked daily. New eco-purchases are credited within 24 hours of delivery confirmation.
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
                      We never access payment details, addresses, or non-eco purchases. Only eco-certified product flags are read. Disconnect anytime to stop tracking.
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
                      If eco-purchases aren't recognized: verify your Amazon/Noon account is linked, check that "order history" permission is enabled, then tap Reconnect.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <Card className="p-5 bg-gradient-to-br from-teal-100 to-cyan-100 border-2 border-teal-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-base text-gray-900">Amazon & Noon</h3>
                    <p className="text-xs text-gray-600">E-commerce Integration</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-700">Status</span>
                  <Badge className="bg-teal-600 text-white border-0">Connected ✅</Badge>
                </div>
                <Button variant="outline" className="w-full border-2 border-teal-400 hover:bg-white" size="sm">Reconnect</Button>
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
                    <span className="text-3xl text-gray-900">15</span>
                    <span className="text-sm text-gray-500">/ 50 eco-products</span>
                  </div>
                  <Progress value={currentProgress} className="h-2 mb-2" />
                  <p className="text-sm text-teal-600">{currentProgress}% complete</p>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-xs text-amber-700">🎯 Just 35 more eco-products to reach your goal!</p>
                </div>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
              <Card className="p-5 bg-white border-2 border-gray-200">
                <h3 className="text-base text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Button className="w-full bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white justify-start" size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Purchase
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
