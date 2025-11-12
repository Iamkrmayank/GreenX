import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Trophy, Medal, Award, TrendingUp, MapPin, Leaf } from "lucide-react";
import { Footer } from "./Footer";

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
    color: "#10B981",
  },
  {
    rank: 5,
    name: "Khalid Rashid",
    location: "Dubai Hills",
    co2Saved: 2398.5,
    tokens: 1321,
    badge: "5",
    color: "#10B981",
  },
  {
    rank: 6,
    name: "Layla Mohammed",
    location: "Palm Jumeirah",
    co2Saved: 2156.9,
    tokens: 1198,
    badge: "6",
    color: "#059669",
  },
  {
    rank: 7,
    name: "Omar Saeed",
    location: "DIFC",
    co2Saved: 1987.4,
    tokens: 1102,
    badge: "7",
    color: "#059669",
  },
  {
    rank: 8,
    name: "Kumar Mayank (You)",
    location: "Dubai Marina",
    co2Saved: 1247.5,
    tokens: 708,
    badge: "8",
    color: "#34D399",
    isCurrentUser: true,
  },
  {
    rank: 9,
    name: "Hassan Ibrahim",
    location: "Arabian Ranches",
    co2Saved: 1123.2,
    tokens: 645,
    badge: "9",
    color: "#34D399",
  },
  {
    rank: 10,
    name: "Noura Ahmed",
    location: "Motor City",
    co2Saved: 1056.8,
    tokens: 598,
    badge: "10",
    color: "#00B686",
  },
];

export function LeaderboardScreenWeb() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-3 sm:p-4 lg:p-6 pb-20 sm:pb-6">
      {/* Header */}
      <motion.div
        className="mb-4 sm:mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl sm:text-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-1 sm:mb-2">
          UAE Green Leaders 🏆
        </h1>
        <p className="text-sm sm:text-base text-gray-700">Top eco-warriors making a difference</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
        {/* Top 3 Podium */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
            {/* 2nd Place */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="order-1"
            >
              <Card className="p-4 bg-gradient-to-br from-gray-100 to-gray-50 border-2 border-gray-300 text-center shadow-lg">
                <div className="text-4xl mb-2">🥈</div>
                <Avatar className="w-16 h-16 mx-auto mb-3 border-4 border-gray-400 shadow-md">
                  <AvatarFallback className="bg-gradient-to-br from-gray-400 to-gray-300 text-white text-xl">
                    SH
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-base text-gray-900 mb-1">{leaderboardData[1].name}</h3>
                <p className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {leaderboardData[1].location}
                </p>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 mb-2">
                  <p className="text-xs text-gray-600">CO₂ Saved</p>
                  <p className="text-lg text-gray-900">{leaderboardData[1].co2Saved} kg</p>
                </div>
                <Badge className="bg-emerald-100 text-emerald-700 border-0">
                  {leaderboardData[1].tokens} Carbenium
                </Badge>
              </Card>
            </motion.div>

            {/* 1st Place */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="order-2"
            >
              <Card className="p-5 bg-gradient-to-br from-amber-200 to-amber-100 border-2 border-amber-400 text-center shadow-2xl transform scale-110">
                <div className="text-5xl mb-2">🥇</div>
                <Avatar className="w-20 h-20 mx-auto mb-3 border-4 border-amber-500 shadow-lg">
                  <AvatarFallback className="bg-gradient-to-br from-amber-500 to-amber-400 text-white text-2xl">
                    AA
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg text-gray-900 mb-1">{leaderboardData[0].name}</h3>
                <p className="text-xs text-gray-700 mb-2 flex items-center justify-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {leaderboardData[0].location}
                </p>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 mb-2">
                  <p className="text-xs text-gray-700">CO₂ Saved</p>
                  <p className="text-xl text-gray-900">{leaderboardData[0].co2Saved} kg</p>
                </div>
                <Badge className="bg-amber-600 text-white border-0 shadow-md">
                  {leaderboardData[0].tokens} Carbenium
                </Badge>
              </Card>
            </motion.div>

            {/* 3rd Place */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="order-3"
            >
              <Card className="p-4 bg-gradient-to-br from-orange-100 to-orange-50 border-2 border-orange-300 text-center shadow-lg">
                <div className="text-4xl mb-2">🥉</div>
                <Avatar className="w-16 h-16 mx-auto mb-3 border-4 border-orange-400 shadow-md">
                  <AvatarFallback className="bg-gradient-to-br from-orange-400 to-orange-300 text-white text-xl">
                    MA
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-base text-gray-900 mb-1">{leaderboardData[2].name}</h3>
                <p className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {leaderboardData[2].location}
                </p>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 mb-2">
                  <p className="text-xs text-gray-600">CO₂ Saved</p>
                  <p className="text-lg text-gray-900">{leaderboardData[2].co2Saved} kg</p>
                </div>
                <Badge className="bg-emerald-100 text-emerald-700 border-0">
                  {leaderboardData[2].tokens} Carbenium
                </Badge>
              </Card>
            </motion.div>
          </div>

          {/* Full Leaderboard */}
          <Card className="p-5 bg-white border-2 border-gray-200 shadow-lg">
            <h3 className="text-xl text-gray-900 mb-4">Complete Rankings</h3>
            <div className="space-y-2">
              {leaderboardData.map((user, index) => (
                <motion.div
                  key={user.rank}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <Card
                    className={`p-4 ${
                      user.isCurrentUser
                        ? "bg-gradient-to-r from-emerald-100 to-green-100 border-2 border-emerald-400 shadow-md"
                        : "bg-gray-50 border border-gray-200 hover:bg-white hover:border-emerald-200 hover:shadow-sm"
                    } transition-all`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-2xl w-10 text-center">{user.badge}</div>
                      <Avatar className="w-12 h-12 border-2 border-gray-300">
                        <AvatarFallback
                          className="text-white"
                          style={{ background: user.color }}
                        >
                          {user.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="text-base text-gray-900">{user.name}</h4>
                        <p className="text-xs text-gray-600 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {user.location}
                        </p>
                      </div>
                      <div className="text-right hidden sm:block">
                        <p className="text-sm text-emerald-600 flex items-center justify-end gap-1">
                          <Leaf className="w-4 h-4" />
                          {user.co2Saved} kg
                        </p>
                        <p className="text-xs text-gray-600">{user.tokens} Carbenium</p>
                      </div>
                      {user.isCurrentUser && (
                        <Badge className="bg-emerald-600 text-white border-0 shadow-sm">
                          You
                        </Badge>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>

        {/* Stats Sidebar */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="p-5 bg-gradient-to-br from-emerald-100 to-green-100 border-2 border-emerald-300 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-md">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-gray-900">Your Progress</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Current Rank</p>
                  <p className="text-2xl text-gray-900">#8</p>
                  <p className="text-xs text-emerald-600 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Up 3 positions
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">To Next Rank</p>
                  <p className="text-xl text-gray-900">739.9 kg CO₂</p>
                  <p className="text-xs text-gray-600">394 Carbenium more</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="p-5 bg-white border-2 border-gray-200 shadow-lg">
              <h4 className="text-lg text-gray-900 mb-4">UAE Stats</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Total Users</p>
                  <p className="text-2xl text-gray-900">1,245</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Total CO₂ Saved</p>
                  <p className="text-2xl text-emerald-600">45,678 kg</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Total Carbenium Earned</p>
                  <p className="text-2xl text-amber-600">28,432</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card className="p-5 bg-gradient-to-br from-teal-50 to-emerald-50 border-2 border-teal-200">
              <h4 className="text-lg text-gray-900 mb-3">🎯 Achievements</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg p-2">
                  <Award className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="text-sm text-gray-900">Eco Warrior</p>
                    <p className="text-xs text-gray-600">1000+ kg CO₂</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg p-2">
                  <Medal className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="text-sm text-gray-900">Green Champion</p>
                    <p className="text-xs text-gray-600">Top 10 User</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
