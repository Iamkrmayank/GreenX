import { motion } from "motion/react";
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Footer } from "./Footer";
import {
  User,
  ShieldCheck,
  Settings,
  HelpCircle,
  Bell,
  Globe,
  Moon,
  Award,
  CheckCircle,
  XCircle,
  Edit,
  Mail,
  MapPin,
  Calendar,
} from "lucide-react";

const achievements = [
  { icon: "🌱", name: "First Steps", unlocked: true },
  { icon: "🚇", name: "Metro Master", unlocked: true },
  { icon: "♻️", name: "Recycle Hero", unlocked: true },
  { icon: "⚡", name: "Energy Saver", unlocked: false },
  { icon: "🚴", name: "Fitness Pro", unlocked: false },
  { icon: "☀️", name: "Solar Pioneer", unlocked: false },
  { icon: "🌍", name: "Eco Warrior", unlocked: true },
  { icon: "💚", name: "Green Leader", unlocked: false },
];

export function ProfileScreenWeb() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const stats = [
    { label: "Total Earned", value: "708 GXCT", color: "#CBAF64" },
    { label: "CO₂ Saved", value: "1,247 kg", color: "#10B981" },
    { label: "Rank", value: "#8 UAE", color: "#059669" },
    { label: "Days Active", value: "47 days", color: "#34D399" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-3 sm:p-4 lg:p-6 pb-20 sm:pb-6">
      {/* Header */}
      <motion.div
        className="mb-4 sm:mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
          <User className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" />
          <h1 className="text-2xl sm:text-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
            Profile
          </h1>
        </div>
        <p className="text-sm sm:text-base text-gray-700">Manage your account and preferences</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
        {/* Main Profile Section */}
        <div className="lg:col-span-2 space-y-3 sm:space-y-4">
          {/* Profile Card */}
          <Card className="p-6 bg-gradient-to-br from-emerald-100 to-green-100 border-2 border-emerald-300 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="relative">
                <Avatar className="w-24 h-24 border-4 border-emerald-500 shadow-lg">
                  <AvatarImage src="https://res.cloudinary.com/dvgoquoqv/image/upload/v1762785501/Screenshot_2025-11-10_200802_yw30kx.png" alt="Kumar Mayank" />
                  <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-green-600 text-white text-3xl">
                    KM
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  className="absolute bottom-0 right-0 w-9 h-9 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-md"
                >
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl text-gray-900">Kumar Mayank</h2>
                  <Badge className="bg-emerald-600 text-white border-0 shadow-sm">
                    Verified
                  </Badge>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-700 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-emerald-600" />
                    krmayank2002@gmail.com
                  </p>
                  <p className="text-sm text-gray-700 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    Dubai Marina, UAE
                  </p>
                  <p className="text-sm text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    Joined Oct 2024
                  </p>
                </div>
                <Button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-md">
                  Edit Profile
                </Button>
              </div>
            </div>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Card className="p-4 bg-white border-2 border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all text-center">
                  <p className="text-xs text-gray-600 mb-2">{stat.label}</p>
                  <p className="text-xl text-gray-900">{stat.value}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* KYC Verification */}
          <Card className="p-5 bg-white border-2 border-gray-200 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-md">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900">KYC Verification</h3>
                  <p className="text-sm text-gray-600">Verify your identity</p>
                </div>
              </div>
              <Badge className="bg-emerald-100 text-emerald-700 border-0">
                <CheckCircle className="w-3 h-3 mr-1" />
                Verified
              </Badge>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Emirates ID</span>
                <CheckCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Phone Number</span>
                <CheckCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Email Address</span>
                <CheckCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Bank Account</span>
                <XCircle className="w-5 h-5 text-red-500" />
              </div>
            </div>
            <Button className="w-full mt-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white">
              Complete Verification
            </Button>
          </Card>

          {/* Achievements */}
          <Card className="p-4 sm:p-5 bg-white border-2 border-gray-200 shadow-lg">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
              <h3 className="text-base sm:text-lg text-gray-900">Achievements</h3>
            </div>
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <Card
                    className={`p-3 text-center cursor-pointer transition-all ${
                      achievement.unlocked
                        ? "bg-gradient-to-br from-amber-100 to-amber-50 border-2 border-amber-300 hover:shadow-md"
                        : "bg-gray-100 border-2 border-gray-200 opacity-50"
                    }`}
                  >
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <p className="text-xs text-gray-900">{achievement.name}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>

        {/* Settings Sidebar */}
        <div className="space-y-4">
          {/* Settings */}
          <Card className="p-5 bg-white border-2 border-gray-200 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-5 h-5 text-gray-700" />
              <h3 className="text-lg text-gray-900">Settings</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="text-sm text-gray-900">Notifications</p>
                    <p className="text-xs text-gray-600">Push alerts</p>
                  </div>
                </div>
                <Switch
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Moon className="w-5 h-5 text-gray-700" />
                  <div>
                    <p className="text-sm text-gray-900">Dark Mode</p>
                    <p className="text-xs text-gray-600">Theme preference</p>
                  </div>
                </div>
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-teal-600" />
                  <div>
                    <p className="text-sm text-gray-900">Language</p>
                    <p className="text-xs text-gray-600">
                      {language === "en" ? "English" : "العربية"}
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setLanguage(language === "en" ? "ar" : "en")}
                  className="border-2 border-gray-300 hover:border-emerald-300 hover:bg-emerald-50"
                >
                  {language === "en" ? "عربي" : "EN"}
                </Button>
              </div>
            </div>
          </Card>

          {/* Connected Apps */}
          <Card className="p-5 bg-gradient-to-br from-teal-50 to-emerald-50 border-2 border-teal-200">
            <h3 className="text-lg text-gray-900 mb-4">Connected Apps</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white/80 backdrop-blur-sm rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <span className="text-lg">⚡</span>
                  </div>
                  <span className="text-sm text-gray-900">DEWA</span>
                </div>
                <CheckCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex items-center justify-between p-3 bg-white/80 backdrop-blur-sm rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                    <span className="text-lg">🚇</span>
                  </div>
                  <span className="text-sm text-gray-900">RTA</span>
                </div>
                <CheckCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex items-center justify-between p-3 bg-white/80 backdrop-blur-sm rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <span className="text-lg">🏃</span>
                  </div>
                  <span className="text-sm text-gray-900">Google Fit</span>
                </div>
                <CheckCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex items-center justify-between p-3 bg-white/80 backdrop-blur-sm rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                    <span className="text-lg">♻️</span>
                  </div>
                  <span className="text-sm text-gray-900">Municipality</span>
                </div>
                <XCircle className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </Card>

          {/* Help & Support */}
          <Card className="p-5 bg-white border-2 border-gray-200 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-5 h-5 text-gray-700" />
              <h3 className="text-lg text-gray-900">Support</h3>
            </div>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-gray-900 hover:bg-emerald-50">
                FAQ & Help Center
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-gray-900 hover:bg-emerald-50">
                Contact Support
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-gray-900 hover:bg-emerald-50">
                Terms & Privacy
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
