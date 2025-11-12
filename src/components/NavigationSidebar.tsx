import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import {
  Leaf,
  LayoutDashboard,
  Wallet,
  ShoppingBag,
  TrendingUp,
  User,
  Settings,
  Bell,
  LogOut,
  Sparkles,
} from "lucide-react";
import logo from "figma:asset/79eab8a38dab2c66f445d140873418f5b421e79d.png";

interface NavigationSidebarProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
  gxctBalance?: number;
}

export function NavigationSidebar({
  currentScreen,
  onNavigate,
  gxctBalance = 192.8,
}: NavigationSidebarProps) {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      color: "#10B981",
    },
    { id: "wallet", label: "Wallet", icon: Wallet, color: "#CBAF64" },
    {
      id: "marketplace",
      label: "Marketplace",
      icon: ShoppingBag,
      color: "#059669",
    },
    {
      id: "leaderboard",
      label: "Leaderboard",
      icon: TrendingUp,
      color: "#34D399",
    },
    { id: "profile", label: "Profile", icon: User, color: "#00B686" },
  ];

  return (
    <div className="w-72 h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white border-r-2 border-emerald-200 flex flex-col fixed left-0 top-0 shadow-lg">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-emerald-300/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-green-300/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Logo */}
        <div className="p-6">
          <motion.div 
            className="flex justify-center mb-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={logo} alt="GreenXchain" className="h-16 w-auto" />
          </motion.div>
        </div>

        <Separator className="bg-emerald-200" />

        {/* Balance Card */}
        <div className="px-6 py-4">
          <motion.div
            className="relative overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-emerald-100 to-green-100 border-2 border-emerald-300 shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuNCkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <Wallet className="w-4 h-4 text-emerald-700" />
                <p className="text-xs text-gray-700">GXCT Balance</p>
              </div>
              <p className="text-3xl text-gray-900 mb-1">
                {gxctBalance}
              </p>
              <p className="text-xs text-amber-700">
                ≈ {(gxctBalance * 3.67).toFixed(2)} AED
              </p>
            </div>
          </motion.div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-2">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentScreen === item.id;

              return (
                <motion.div
                  key={item.id}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    onClick={() => onNavigate(item.id)}
                    className={`w-full justify-start h-12 rounded-xl ${
                      isActive
                        ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-md shadow-emerald-500/30"
                        : "text-gray-700 hover:text-gray-900 hover:bg-emerald-50 border border-transparent hover:border-emerald-200"
                    }`}
                  >
                    <Icon
                      className="w-5 h-5 mr-3"
                      style={isActive ? {} : { color: item.color }}
                    />
                    <span>{item.label}</span>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </nav>

        <Separator className="bg-emerald-200" />

        {/* Bottom Actions */}
        <div className="p-4 space-y-2">
          <motion.div whileHover={{ x: 5 }}>
            <Button
              variant="ghost"
              className="w-full justify-start h-12 rounded-xl text-gray-700 hover:text-gray-900 hover:bg-emerald-50 border border-transparent hover:border-emerald-200"
            >
              <Bell className="w-5 h-5 mr-3" />
              Notifications
              <Badge className="ml-auto bg-red-100 text-red-700 border-0 shadow-sm">
                3
              </Badge>
            </Button>
          </motion.div>
          <motion.div whileHover={{ x: 5 }}>
            <Button
              variant="ghost"
              className="w-full justify-start h-12 rounded-xl text-gray-700 hover:text-gray-900 hover:bg-emerald-50 border border-transparent hover:border-emerald-200"
            >
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </Button>
          </motion.div>
          <motion.div whileHover={{ x: 5 }}>
            <Button
              variant="ghost"
              className="w-full justify-start h-12 rounded-xl text-red-600 hover:text-red-700 hover:bg-red-50 border border-transparent hover:border-red-200"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Sign Out
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
