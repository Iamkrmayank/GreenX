import { motion } from "motion/react";
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  ArrowLeft,
  Wallet,
  TrendingUp,
  TrendingDown,
  Download,
  Lock,
  Clock,
  CheckCircle,
} from "lucide-react";

interface WalletScreenProps {
  onBack: () => void;
}

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
];

const stakingPools = [
  {
    id: 1,
    name: "Green Pool A",
    apy: "25%",
    duration: "30 days",
    minStake: "50 Carbeneum",
    totalStaked: "12,500",
  },
  {
    id: 2,
    name: "Eco Pool B",
    apy: "15%",
    duration: "14 days",
    minStake: "25 Carbeneum",
    totalStaked: "8,300",
  },
  {
    id: 3,
    name: "Dubai Pool C",
    apy: "5%",
    duration: "7 days",
    minStake: "10 Carbeneum",
    totalStaked: "5,200",
  },
];

export function WalletScreen({ onBack }: WalletScreenProps) {
  const [activeTab, setActiveTab] = useState("earned");
  const gxctBalance = 192.8;
  const gxctInAED = (gxctBalance * 3.67).toFixed(2);
  const stakedAmount = 100.0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#101820] to-[#1a2230] pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00B686] to-[#4DC3E9] p-6 pb-32 rounded-b-3xl">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h2 className="text-xl text-white">Carbeneum Wallet</h2>
          <div className="w-10" />
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-white/80 mb-2">Total Balance</p>
          <motion.h1
            className="text-5xl text-white mb-2"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {gxctBalance}
          </motion.h1>
          <p className="text-xl text-white/90 mb-1">Carbeneum</p>
          <p className="text-[#CBAF64]">≈ {gxctInAED} AED</p>
        </motion.div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 -mt-20 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 bg-white/10 backdrop-blur-md border-white/20">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-4 h-4 text-[#CBAF64]" />
              <span className="text-xs text-gray-400">Staked</span>
            </div>
            <p className="text-xl text-white">{stakedAmount}</p>
            <p className="text-xs text-gray-400">Carbeneum</p>
          </Card>

          <Card className="p-4 bg-white/10 backdrop-blur-md border-white/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-[#00B686]" />
              <span className="text-xs text-gray-400">This Week</span>
            </div>
            <p className="text-xl text-white">+48.3</p>
            <p className="text-xs text-[#00B686]">Carbeneum</p>
          </Card>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 w-full mb-6 bg-white/10">
            <TabsTrigger value="earned" className="data-[state=active]:bg-[#00B686]">
              Earned
            </TabsTrigger>
            <TabsTrigger value="withdraw" className="data-[state=active]:bg-[#4DC3E9]">
              Withdraw
            </TabsTrigger>
            <TabsTrigger value="stake" className="data-[state=active]:bg-[#CBAF64]">
              Stake
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-[#00B686]">
              History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="earned" className="space-y-4">
            <Card className="p-4 bg-gradient-to-br from-[#00B686]/20 to-[#4DC3E9]/10 border-[#00B686]/30">
              <h3 className="text-white mb-2">Monthly Earnings</h3>
              <p className="text-3xl text-[#00B686] mb-1">192.8 Carbeneum</p>
              <p className="text-sm text-gray-400">≈ 707.38 AED</p>
            </Card>

            <div className="space-y-3">
              <h4 className="text-white">Recent Earnings</h4>
              {transactions
                .filter((t) => t.type === "earned")
                .map((transaction) => (
                  <Card
                    key={transaction.id}
                    className="p-4 bg-white/10 border-white/20"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#00B686]/20 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-[#00B686]" />
                        </div>
                        <div>
                          <p className="text-white">{transaction.title}</p>
                          <p className="text-xs text-gray-400">{transaction.date}</p>
                        </div>
                      </div>
                      <p className="text-lg text-[#00B686]">{transaction.amount}</p>
                    </div>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="withdraw" className="space-y-4">
            <Card className="p-6 bg-white/10 border-white/20">
              <h3 className="text-white mb-4">Withdraw Carbeneum</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="amount" className="text-white">
                    Amount (Carbeneum)
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    className="mt-1.5 bg-white/5 border-white/20 text-white"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Available: {gxctBalance} Carbeneum
                  </p>
                </div>

                <div>
                  <Label htmlFor="bank" className="text-white">
                    Withdraw To
                  </Label>
                  <select
                    id="bank"
                    className="mt-1.5 w-full h-10 px-3 rounded-lg bg-white/5 border border-white/20 text-white"
                  >
                    <option value="bank">UAE Bank Account</option>
                    <option value="wallet">Crypto Wallet</option>
                    <option value="voucher">Convert to Voucher</option>
                  </select>
                </div>

                <div className="bg-[#4DC3E9]/10 border border-[#4DC3E9]/30 rounded-lg p-3">
                  <p className="text-xs text-gray-300">
                    💡 Minimum withdrawal: 50 Carbeneum
                    <br />
                    Processing time: 1-3 business days
                    <br />
                    Fee: 1% (max 5 Carbeneum)
                  </p>
                </div>

                <Button className="w-full h-12 bg-gradient-to-r from-[#00B686] to-[#4DC3E9] hover:from-[#00d99a] hover:to-[#6dd5f5]">
                  <Download className="w-4 h-4 mr-2" />
                  Withdraw
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="stake" className="space-y-4">
            <Card className="p-4 bg-gradient-to-br from-[#CBAF64]/20 to-[#CBAF64]/5 border-[#CBAF64]/30">
              <h3 className="text-white mb-2">Earn Passive Income</h3>
              <p className="text-sm text-gray-400">
                Stake your Carbeneum tokens and earn up to 25% APY
              </p>
            </Card>

            <div className="space-y-3">
              {stakingPools.map((pool) => (
                <Card
                  key={pool.id}
                  className="p-4 bg-white/10 border-white/20 hover:bg-white/15 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="text-white mb-1">{pool.name}</h4>
                      <p className="text-xs text-gray-400">{pool.duration}</p>
                    </div>
                    <Badge className="bg-[#CBAF64]/20 text-[#CBAF64] border-[#CBAF64]/30">
                      {pool.apy} APY
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-400">Min Stake</span>
                    <span className="text-sm text-white">{pool.minStake}</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-400">Total Staked</span>
                    <span className="text-sm text-white">{pool.totalStaked} Carbeneum</span>
                  </div>
                  <Button className="w-full bg-[#CBAF64] hover:bg-[#e0c87f] text-[#101820]">
                    Stake Now
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-3">
            {transactions.map((transaction) => (
              <Card
                key={transaction.id}
                className="p-4 bg-white/10 border-white/20"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === "earned"
                          ? "bg-[#00B686]/20"
                          : transaction.type === "withdraw"
                          ? "bg-[#4DC3E9]/20"
                          : "bg-[#CBAF64]/20"
                      }`}
                    >
                      {transaction.type === "earned" ? (
                        <TrendingUp
                          className={`w-5 h-5 ${
                            transaction.type === "earned"
                              ? "text-[#00B686]"
                              : "text-[#4DC3E9]"
                          }`}
                        />
                      ) : transaction.type === "withdraw" ? (
                        <TrendingDown className="w-5 h-5 text-[#4DC3E9]" />
                      ) : (
                        <Lock className="w-5 h-5 text-[#CBAF64]" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-white">{transaction.title}</p>
                        {transaction.status === "pending" && (
                          <Clock className="w-3 h-3 text-[#CBAF64]" />
                        )}
                        {transaction.status === "completed" && (
                          <CheckCircle className="w-3 h-3 text-[#00B686]" />
                        )}
                      </div>
                      <p className="text-xs text-gray-400">{transaction.date}</p>
                    </div>
                  </div>
                  <p
                    className={`text-lg ${
                      transaction.amount.startsWith("+")
                        ? "text-[#00B686]"
                        : "text-[#4DC3E9]"
                    }`}
                  >
                    {transaction.amount}
                  </p>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
