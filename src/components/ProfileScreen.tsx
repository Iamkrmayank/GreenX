import { motion } from "motion/react";
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  ArrowLeft,
  User,
  ShieldCheck,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  Bell,
  Globe,
  Moon,
  Award,
  CheckCircle,
  XCircle,
} from "lucide-react";

interface ProfileScreenProps {
  onBack: () => void;
}

export function ProfileScreen({ onBack }: ProfileScreenProps) {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const stats = [
    { label: "Total Earned", value: "708 GXCT", color: "#CBAF64" },
    { label: "CO₂ Saved", value: "1,247 kg", color: "#00B686" },
    { label: "Rank", value: "#8 UAE", color: "#4DC3E9" },
  ];

  const achievements = [
    { icon: "🌱", name: "First Steps", unlocked: true },
    { icon: "🚇", name: "Metro Master", unlocked: true },
    { icon: "♻️", name: "Recycle Hero", unlocked: true },
    { icon: "⚡", name: "Energy Saver", unlocked: false },
    { icon: "🚴", name: "Fitness Pro", unlocked: false },
    { icon: "☀️", name: "Solar Pioneer", unlocked: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#101820] to-[#1a2230] pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00B686] to-[#4DC3E9] p-6 pb-24 rounded-b-3xl">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h2 className="text-xl text-white">Profile</h2>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Settings className="w-6 h-6" />
          </Button>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-white">
            <AvatarImage src="https://res.cloudinary.com/dvgoquoqv/image/upload/v1762785136/ProfilePhoto_n7shzf.jpg" alt="Kumar Mayank" />
            <AvatarFallback className="bg-white/20 text-white text-2xl">
              KM
            </AvatarFallback>
          </Avatar>
          <h1 className="text-2xl text-white mb-1">Kumar Mayank</h1>
          <p className="text-white/80 mb-3">krmayank2002@gmail.com</p>
          <Badge className="bg-white/20 text-white border-white/30">
            <Award className="w-3 h-3 mr-1" />
            Eco Warrior
          </Badge>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="px-6 -mt-16 mb-6">
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-3 bg-white/10 backdrop-blur-md border-white/20 text-center">
                <p
                  className="text-lg mb-1"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* KYC Verification */}
      <div className="px-6 mb-6">
        <Card className="p-4 bg-gradient-to-r from-[#00B686]/20 to-[#4DC3E9]/10 border-[#00B686]/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#00B686]/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#00B686]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-white">KYC Verified</h3>
                  <CheckCircle className="w-4 h-4 text-[#00B686]" />
                </div>
                <p className="text-xs text-gray-400">UAE Pass Connected</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </Card>
      </div>

      {/* Achievements */}
      <div className="px-6 mb-6">
        <h3 className="text-white mb-4">Achievements</h3>
        <div className="grid grid-cols-3 gap-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              <Card
                className={`p-4 text-center ${
                  achievement.unlocked
                    ? "bg-white/10 border-white/20"
                    : "bg-white/5 border-white/10 opacity-50"
                }`}
              >
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <p className="text-xs text-gray-400">{achievement.name}</p>
                {achievement.unlocked ? (
                  <CheckCircle className="w-4 h-4 text-[#00B686] mx-auto mt-2" />
                ) : (
                  <XCircle className="w-4 h-4 text-gray-500 mx-auto mt-2" />
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Language Toggle */}
      <div className="px-6 mb-6">
        <Card className="p-4 bg-white/10 border-white/20">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[#4DC3E9]" />
              <span className="text-white">Language / اللغة</span>
            </div>
            <div className="flex gap-2">
              <Button
                variant={language === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("en")}
                className={
                  language === "en"
                    ? "bg-[#00B686] hover:bg-[#00d99a]"
                    : "text-white hover:bg-white/10"
                }
              >
                EN
              </Button>
              <Button
                variant={language === "ar" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("ar")}
                className={
                  language === "ar"
                    ? "bg-[#00B686] hover:bg-[#00d99a]"
                    : "text-white hover:bg-white/10"
                }
              >
                AR
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Moon className="w-5 h-5 text-[#4DC3E9]" />
              <span className="text-white">Dark Mode</span>
            </div>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-[#4DC3E9]" />
              <span className="text-white">Notifications</span>
            </div>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </div>
        </Card>
      </div>

      {/* Menu Items */}
      <div className="px-6 mb-6">
        <div className="space-y-3">
          {[
            { icon: User, label: "Edit Profile", color: "#00B686" },
            { icon: ShieldCheck, label: "Privacy & Security", color: "#4DC3E9" },
            { icon: HelpCircle, label: "Help & Support", color: "#CBAF64" },
            { icon: Settings, label: "App Settings", color: "#00B686" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
              >
                <Card className="p-4 bg-white/10 border-white/20 hover:bg-white/15 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5" style={{ color: item.color }} />
                      <span className="text-white">{item.label}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Logout */}
      <div className="px-6">
        <Button
          variant="ghost"
          className="w-full justify-center text-red-400 hover:bg-red-400/10 hover:text-red-400"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Sign Out
        </Button>
      </div>

      {/* App Version */}
      <div className="text-center mt-6 text-xs text-gray-500">
        GreenXchain v1.0.0
        <br />
        Powered by Web3 Blockchain
      </div>
    </div>
  );
}
