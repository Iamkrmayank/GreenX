import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Leaf,
  LayoutDashboard,
  Wallet,
  ShoppingBag,
  TrendingUp,
  User,
  Bell,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/79eab8a38dab2c66f445d140873418f5b421e79d.png";

interface NavigationBarProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
  gxctBalance?: number;
}

export function NavigationBar({
  currentScreen,
  onNavigate,
  gxctBalance = 192.8,
}: NavigationBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    { id: "wallet", label: "Wallet", icon: Wallet },
    {
      id: "marketplace",
      label: "Marketplace",
      icon: ShoppingBag,
    },
    {
      id: "leaderboard",
      label: "Leaderboard",
      icon: TrendingUp,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-emerald-200 shadow-md">
      <div className="max-w-[1800px] mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <motion.div
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => onNavigate("dashboard")}
            >
              <img src={logo} alt="GreenXchain" className="h-10 w-auto" />
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentScreen === item.id;

              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  onClick={() => onNavigate(item.id)}
                  className={`${
                    isActive
                      ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-md"
                      : "text-gray-700 hover:text-gray-900 hover:bg-emerald-50"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Balance Card - Hidden on mobile */}
            <motion.div
              className="hidden md:block px-4 py-2 rounded-xl bg-gradient-to-r from-amber-100 to-amber-50 border-2 border-amber-200 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => onNavigate("wallet")}
            >
              <p className="text-xs text-gray-600">Balance</p>
              <p className="text-base text-gray-900">{gxctBalance} Token</p>
            </motion.div>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-emerald-50 rounded-xl"
            >
              <Bell className="w-5 h-5 text-gray-700" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-red-500 text-white border-0 text-xs">
                3
              </Badge>
            </Button>

            {/* Profile Avatar */}
            <Avatar
              className="w-10 h-10 border-2 border-emerald-300 cursor-pointer hover:border-emerald-500 transition-colors"
              onClick={() => onNavigate("profile")}
            >
              <AvatarImage src="https://res.cloudinary.com/dvgoquoqv/image/upload/v1762785501/Screenshot_2025-11-10_200802_yw30kx.png" alt="Kumar Mayank" />
              <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-green-600 text-white">
                KM
              </AvatarFallback>
            </Avatar>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-emerald-50 rounded-xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden py-4 border-t border-emerald-200"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="space-y-2">
              {/* Balance on Mobile */}
              <div
                className="px-4 py-3 rounded-xl bg-gradient-to-r from-amber-100 to-amber-50 border-2 border-amber-200 mb-3"
                onClick={() => {
                  onNavigate("wallet");
                  setMobileMenuOpen(false);
                }}
              >
                <p className="text-xs text-gray-600">Carbenium Balance</p>
                <p className="text-xl text-gray-900">{gxctBalance} Carbenium</p>
              </div>

              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentScreen === item.id;

                return (
                  <Button
                    key={item.id}
                    variant={isActive ? "default" : "ghost"}
                    onClick={() => {
                      onNavigate(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full justify-start ${
                      isActive
                        ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white"
                        : "text-gray-700 hover:bg-emerald-50"
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Button>
                );
              })}

              <Button
                variant="ghost"
                onClick={() => {
                  onNavigate("profile");
                  setMobileMenuOpen(false);
                }}
                className="w-full justify-start text-gray-700 hover:bg-emerald-50"
              >
                <User className="w-5 h-5 mr-3" />
                Profile
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start text-red-600 hover:bg-red-50"
              >
                <LogOut className="w-5 h-5 mr-3" />
                Sign Out
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
