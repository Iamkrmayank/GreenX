import { motion } from "motion/react";
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  Download,
  Lock,
  Clock,
  CheckCircle,
  ArrowUpRight,
  ArrowDownLeft,
  Send,
  Coins,
  CreditCard,
  History,
} from "lucide-react";
import { Footer } from "./Footer";

const transactions = [
  {
    id: 1,
    type: "earned",
    title: "Energy Savings",
    amount: "+12.5",
    date: "2 hours ago",
    status: "completed",
  },
  {
    id: 2,
    type: "earned",
    title: "Metro Journey",
    amount: "+8.2",
    date: "5 hours ago",
    status: "completed",
  },
  {
    id: 3,
    type: "withdraw",
    title: "Withdraw to Bank",
    amount: "-50.0",
    date: "1 day ago",
    status: "pending",
  },
  {
    id: 4,
    type: "earned",
    title: "Recycling Activity",
    amount: "+15.3",
    date: "2 days ago",
    status: "completed",
  },
  {
    id: 5,
    type: "staked",
    title: "Staking Pool A",
    amount: "-100.0",
    date: "3 days ago",
    status: "completed",
  },
  {
    id: 6,
    type: "earned",
    title: "Solar Generation",
    amount: "+18.7",
    date: "3 days ago",
    status: "completed",
  },
  {
    id: 7,
    type: "earned",
    title: "Fitness Activity",
    amount: "+9.4",
    date: "4 days ago",
    status: "completed",
  },
];

const stakingPools = [
  {
    id: 1,
    name: "Green Pool A",
    apy: "25%",
    duration: "30 days",
    minStake: "50 Carbenium",
    totalStaked: "12,500",
  },
  {
    id: 2,
    name: "Eco Pool B",
    apy: "15%",
    duration: "14 days",
    minStake: "25 Carbenium",
    totalStaked: "8,300",
  },
  {
    id: 3,
    name: "Dubai Pool C",
    apy: "5%",
    duration: "7 days",
    minStake: "10 Carbenium",
    totalStaked: "5,200",
  },
];

export function WalletScreenWeb() {
  const [activeTab, setActiveTab] = useState("earned");
  const gxctBalance = 192.8;
  const gxctInAED = (gxctBalance * 3.67).toFixed(2);
  const stakedAmount = 100.0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-3 sm:p-4 lg:p-6 pb-20 sm:pb-6">
      {/* Header */}
      <motion.div
        className="mb-4 sm:mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl sm:text-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-1 sm:mb-2">
          Carbenium Wallet
        </h1>
        <p className="text-sm sm:text-base text-gray-700">Manage your tokens and earnings</p>
      </motion.div>

      {/* Quick Actions - Square Cards */}
      <div className="mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {[
            { title: "Withdraw", icon: Send, color: "#10B981", desc: "Cash out" },
            { title: "Stake", icon: Lock, color: "#F59E0B", desc: "Earn APY" },
            { title: "Swap", icon: Coins, color: "#14B8A6", desc: "Exchange" },
            { title: "Buy More", icon: CreditCard, color: "#059669", desc: "Add funds" },
          ].map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square"
              >
                <Card className="p-4 bg-white border-2 border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all cursor-pointer group h-full flex flex-col justify-between">
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: action.color }}
                  />
                  <div className="space-y-3">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform mx-auto"
                      style={{
                        background: `linear-gradient(135deg, ${action.color}, ${action.color}dd)`,
                      }}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="text-center">
                      <h4 className="text-sm sm:text-base text-gray-900">{action.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{action.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-5 bg-gradient-to-br from-amber-100 to-amber-50 border-2 border-amber-200 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <Wallet className="w-7 h-7 text-amber-700" />
              <ArrowUpRight className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-xs text-gray-700 mb-2">Total Balance</p>
            <motion.p
              className="text-4xl text-gray-900 mb-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {gxctBalance}
            </motion.p>
            
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-5 bg-white border-2 border-emerald-200 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <Lock className="w-7 h-7 text-emerald-600" />
              <Badge className="bg-emerald-100 text-emerald-700 border-0 text-xs">
                Locked
              </Badge>
            </div>
            <p className="text-xs text-gray-700 mb-2">Staked</p>
            <p className="text-4xl text-gray-900 mb-2">{stakedAmount}</p>
            <p className="text-gray-700">Carbenium</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-5 bg-white border-2 border-teal-200 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <TrendingUp className="w-7 h-7 text-green-600" />
              <Badge className="bg-green-100 text-green-700 border-0 text-xs">
                +12%
              </Badge>
            </div>
            <p className="text-xs text-gray-700 mb-2">This Week</p>
            <p className="text-4xl text-gray-900 mb-2">+48.3</p>
            <p className="text-gray-700">Carbenium</p>
          </Card>
        </motion.div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 w-full max-w-2xl mb-6 bg-white border-2 border-gray-200">
          <TabsTrigger 
            value="earned" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-green-600 data-[state=active]:text-white"
          >
            Earned
          </TabsTrigger>
          <TabsTrigger 
            value="withdraw" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-teal-600 data-[state=active]:text-white"
          >
            Withdraw
          </TabsTrigger>
          <TabsTrigger 
            value="stake" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-amber-600 data-[state=active]:text-white"
          >
            Stake
          </TabsTrigger>
          <TabsTrigger 
            value="history" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-green-600 data-[state=active]:text-white"
          >
            History
          </TabsTrigger>
        </TabsList>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <TabsContent value="earned" className="space-y-4 mt-0">
              <Card className="p-5 bg-gradient-to-br from-emerald-100 to-green-100 border-2 border-emerald-200 shadow-lg">
                <h3 className="text-xl text-gray-900 mb-2">Monthly Earnings</h3>
                <p className="text-4xl text-emerald-700 mb-2">192.8 Carbenium</p>
                <p className="text-gray-700">.</p>
              </Card>

              <div className="space-y-3">
                <h4 className="text-lg text-gray-900">Recent Earnings</h4>
                {transactions
                  .filter((t) => t.type === "earned")
                  .map((transaction) => (
                    <Card
                      key={transaction.id}
                      className="p-4 bg-white border-2 border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-emerald-600" />
                          </div>
                          <div>
                            <p className="text-gray-900">{transaction.title}</p>
                            <p className="text-xs text-gray-600">{transaction.date}</p>
                          </div>
                        </div>
                        <p className="text-xl text-emerald-600">{transaction.amount}</p>
                      </div>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="withdraw" className="space-y-4 mt-0">
              <Card className="p-5 bg-white border-2 border-gray-200 shadow-lg">
                <h3 className="text-xl text-gray-900 mb-6">Withdraw Carbenium</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="amount" className="text-gray-900">
                      Amount (Carbenium)
                    </Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="0.00"
                      className="mt-1.5 bg-gray-50 border-gray-300 text-gray-900 h-12"
                    />
                    <p className="text-xs text-gray-600 mt-1">
                      Available: {gxctBalance} Carbenium
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="bank" className="text-gray-900">
                      Withdraw To
                    </Label>
                    <select
                      id="bank"
                      className="mt-1.5 w-full h-12 px-3 rounded-lg bg-gray-50 border-2 border-gray-300 text-gray-900"
                    >
                      <option value="bank">UAE Bank Account</option>
                      <option value="wallet">Crypto Wallet</option>
                      <option value="voucher">Convert to Voucher</option>
                    </select>
                  </div>

                  <div className="bg-teal-50 border-2 border-teal-200 rounded-lg p-4">
                    <p className="text-sm text-gray-800">
                      💡 Minimum withdrawal: 50 Carbenium
                      <br />
                      Processing time: 1-3 business days
                      <br />
                      Fee: 1% (max 5 Carbenium)
                    </p>
                  </div>

                  <Button className="w-full h-12 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-md">
                    <Download className="w-4 h-4 mr-2" />
                    Withdraw
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="stake" className="space-y-4 mt-0">
              <Card className="p-5 bg-gradient-to-br from-amber-100 to-amber-50 border-2 border-amber-200 shadow-lg">
                <h3 className="text-xl text-gray-900 mb-2">Earn Passive Income</h3>
                <p className="text-gray-700">
                  Stake your Carbenium tokens and earn up to 25% APY
                </p>
              </Card>

              <div className="space-y-3">
                {stakingPools.map((pool) => (
                  <Card
                    key={pool.id}
                    className="p-5 bg-white border-2 border-gray-200 hover:border-amber-300 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-lg text-gray-900 mb-1">{pool.name}</h4>
                        <p className="text-sm text-gray-600">{pool.duration}</p>
                      </div>
                      <Badge className="bg-amber-100 text-amber-800 border-0 text-lg px-3 py-1">
                        {pool.apy} APY
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-600">Min Stake</p>
                        <p className="text-gray-900">{pool.minStake}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Total Staked</p>
                        <p className="text-gray-900">{pool.totalStaked} Carbenium</p>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                      Stake Now
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="history" className="space-y-3 mt-0">
              {transactions.map((transaction) => (
                <Card
                  key={transaction.id}
                  className="p-4 bg-white border-2 border-gray-200 hover:border-green-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-full flex items-center justify-center ${
                          transaction.type === "earned"
                            ? "bg-emerald-100"
                            : transaction.type === "withdraw"
                            ? "bg-teal-100"
                            : "bg-amber-100"
                        }`}
                      >
                        {transaction.type === "earned" ? (
                          <ArrowDownLeft className="w-5 h-5 text-emerald-600" />
                        ) : transaction.type === "withdraw" ? (
                          <ArrowUpRight className="w-5 h-5 text-teal-600" />
                        ) : (
                          <Lock className="w-5 h-5 text-amber-600" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-gray-900">{transaction.title}</p>
                          {transaction.status === "pending" && (
                            <Clock className="w-4 h-4 text-amber-600" />
                          )}
                          {transaction.status === "completed" && (
                            <CheckCircle className="w-4 h-4 text-emerald-600" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{transaction.date}</p>
                      </div>
                    </div>
                    <p
                      className={`text-xl ${
                        transaction.amount.startsWith("+")
                          ? "text-emerald-600"
                          : "text-teal-600"
                      }`}
                    >
                      {transaction.amount}
                    </p>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-4">
            <Card className="p-5 bg-white border-2 border-gray-200 shadow-lg">
              <h4 className="text-gray-900 mb-4">Quick Stats</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Earned (All Time)</p>
                  <p className="text-2xl text-emerald-600">892.8 Carbenium</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Withdrawn</p>
                  <p className="text-2xl text-teal-600">600.0 Carbenium</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Avg. Weekly Earnings</p>
                  <p className="text-2xl text-amber-600">48.3 Carbenium</p>
                </div>
              </div>
            </Card>

            <Card className="p-5 bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 shadow-lg">
              <h4 className="text-gray-900 mb-3">Staking Rewards</h4>
              <p className="text-sm text-gray-700 mb-4">
                Earn passive income by staking your Carbenium tokens
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">APY Range</span>
                  <span className="text-sm text-amber-700">5-25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Lock Period</span>
                  <span className="text-sm text-gray-900">7-30 days</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Tabs>

      <Footer />
    </div>
  );
}
