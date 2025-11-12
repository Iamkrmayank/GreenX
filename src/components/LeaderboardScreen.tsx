import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { ArrowLeft, Trophy, Medal, Award, TrendingUp } from "lucide-react";

interface LeaderboardScreenProps {
  onBack: () => void;
}

const leaderboardData = [
  {
    rank: 1,
    name: "Ahmed Al Maktoum",
    location: "Dubai Marina",
    co2Saved: 3245.8,
    tokens: 1876,
    badge: "🥇",
    color: "#CBAF64",
  },
  {
    rank: 2,
    name: "Sara Hassan",
    location: "Downtown Dubai",
    co2Saved: 2987.3,
    tokens: 1654,
    badge: "🥈",
    color: "#C0C0C0",
  },
  {
    rank: 3,
    name: "Mohammed Ali",
    location: "JBR",
    co2Saved: 2756.2,
    tokens: 1523,
    badge: "🥉",
    color: "#CD7F32",
  },
  {
    rank: 4,
    name: "Fatima Abdullah",
    location: "Business Bay",
    co2Saved: 2543.7,
    tokens: 1402,
    badge: "4",
    color: "#00B686",
  },
  {
    rank: 5,
    name: "Khalid Rashid",
    location: "Dubai Hills",
    co2Saved: 2398.5,
    tokens: 1321,
    badge: "5",
    color: "#00B686",
  },
  {
    rank: 6,
    name: "Layla Mohammed",
    location: "Palm Jumeirah",
    co2Saved: 2156.9,
    tokens: 1198,
    badge: "6",
    color: "#4DC3E9",
  },
  {
    rank: 7,
    name: "Omar Saeed",
    location: "DIFC",
    co2Saved: 1987.4,
    tokens: 1102,
    badge: "7",
    color: "#4DC3E9",
  },
  {
    rank: 8,
    name: "Aisha Khan (You)",
    location: "Dubai Marina",
    co2Saved: 1247.5,
    tokens: 708,
    badge: "8",
    color: "#4DC3E9",
    isCurrentUser: true,
  },
];

export function LeaderboardScreen({ onBack }: LeaderboardScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#101820] to-[#1a2230] pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#CBAF64] via-[#00B686] to-[#4DC3E9] p-6 pb-32 rounded-b-3xl">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h2 className="text-xl text-white">Leaderboard</h2>
          <div className="w-10" />
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Trophy className="w-16 h-16 text-[#CBAF64] mx-auto mb-4" />
          <h1 className="text-2xl text-white mb-2">Top Green Users</h1>
          <p className="text-white/70">Dubai's Eco Champions</p>
        </motion.div>
      </div>

      {/* Top 3 Podium */}
      <div className="px-6 -mt-24 mb-6">
        <div className="flex items-end justify-center gap-2 mb-8">
          {/* 2nd Place */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-4 bg-gradient-to-b from-gray-400/20 to-transparent border-gray-400/30 text-center">
              <div className="text-4xl mb-2">🥈</div>
              <Avatar className="w-16 h-16 mx-auto mb-2 border-2 border-gray-400">
                <AvatarFallback className="bg-gray-400/20 text-white">
                  SH
                </AvatarFallback>
              </Avatar>
              <p className="text-white text-sm mb-1">Sara Hassan</p>
              <p className="text-xs text-gray-400 mb-2">Downtown</p>
              <Badge className="bg-[#00B686]/20 text-[#00B686] border-[#00B686]/30 text-xs">
                2987 kg CO₂
              </Badge>
            </Card>
          </motion.div>

          {/* 1st Place */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-4 bg-gradient-to-b from-[#CBAF64]/30 to-transparent border-[#CBAF64]/50 text-center relative">
              <motion.div
                className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Trophy className="w-8 h-8 text-[#CBAF64]" />
              </motion.div>
              <div className="text-5xl mb-2">🥇</div>
              <Avatar className="w-20 h-20 mx-auto mb-2 border-4 border-[#CBAF64]">
                <AvatarFallback className="bg-[#CBAF64]/20 text-white">
                  AM
                </AvatarFallback>
              </Avatar>
              <p className="text-white mb-1">Ahmed Al M.</p>
              <p className="text-xs text-gray-400 mb-2">Marina</p>
              <Badge className="bg-[#CBAF64]/20 text-[#CBAF64] border-[#CBAF64]/30 text-xs">
                3245 kg CO₂
              </Badge>
            </Card>
          </motion.div>

          {/* 3rd Place */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-4 bg-gradient-to-b from-orange-600/20 to-transparent border-orange-600/30 text-center">
              <div className="text-4xl mb-2">🥉</div>
              <Avatar className="w-16 h-16 mx-auto mb-2 border-2 border-orange-600">
                <AvatarFallback className="bg-orange-600/20 text-white">
                  MA
                </AvatarFallback>
              </Avatar>
              <p className="text-white text-sm mb-1">Mohammed A.</p>
              <p className="text-xs text-gray-400 mb-2">JBR</p>
              <Badge className="bg-[#00B686]/20 text-[#00B686] border-[#00B686]/30 text-xs">
                2756 kg CO₂
              </Badge>
            </Card>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <Card className="p-3 bg-white/10 border-white/20 text-center">
            <Medal className="w-5 h-5 text-[#CBAF64] mx-auto mb-1" />
            <p className="text-lg text-white">8th</p>
            <p className="text-xs text-gray-400">Your Rank</p>
          </Card>
          <Card className="p-3 bg-white/10 border-white/20 text-center">
            <TrendingUp className="w-5 h-5 text-[#00B686] mx-auto mb-1" />
            <p className="text-lg text-white">+3</p>
            <p className="text-xs text-gray-400">This Week</p>
          </Card>
          <Card className="p-3 bg-white/10 border-white/20 text-center">
            <Award className="w-5 h-5 text-[#4DC3E9] mx-auto mb-1" />
            <p className="text-lg text-white">1.2k</p>
            <p className="text-xs text-gray-400">CO₂ Saved</p>
          </Card>
        </div>

        {/* Full Leaderboard */}
        <div className="space-y-3">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white">All Rankings</h3>
            <Badge className="bg-white/10 text-white border-white/20">
              This Month
            </Badge>
          </div>

          {leaderboardData.map((user, index) => (
            <motion.div
              key={user.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.05 }}
            >
              <Card
                className={`p-4 transition-all ${
                  user.isCurrentUser
                    ? "bg-gradient-to-r from-[#00B686]/20 to-[#4DC3E9]/10 border-[#00B686]"
                    : "bg-white/10 border-white/20"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                      user.rank <= 3
                        ? "bg-gradient-to-br from-[#CBAF64] to-[#CBAF64]/50"
                        : "bg-white/10"
                    }`}
                  >
                    {user.badge}
                  </div>
                  <Avatar className="w-12 h-12">
                    <AvatarFallback
                      className={`${
                        user.isCurrentUser
                          ? "bg-[#00B686]/20 text-[#00B686]"
                          : "bg-white/10 text-white"
                      }`}
                    >
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-white">{user.name}</p>
                      {user.isCurrentUser && (
                        <Badge className="bg-[#4DC3E9]/20 text-[#4DC3E9] border-[#4DC3E9]/30 text-xs">
                          You
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-400">{user.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#00B686]">
                      {user.co2Saved.toLocaleString()} kg
                    </p>
                    <p className="text-xs text-gray-400">{user.tokens} GXCT</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
