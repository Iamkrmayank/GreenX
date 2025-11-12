import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ArrowLeft, Gift, Lock, ShoppingBag, Coffee, Car, Utensils, Zap } from "lucide-react";

interface MarketplaceScreenProps {
  onBack: () => void;
}

const vouchers = [
  {
    id: 1,
    brand: "Careem",
    icon: Car,
    value: "50 AED",
    cost: "15 GXCT",
    discount: "10%",
    color: "#00B686",
  },
  {
    id: 2,
    brand: "Talabat",
    icon: Utensils,
    value: "100 AED",
    cost: "28 GXCT",
    discount: "8%",
    color: "#CBAF64",
  },
  {
    id: 3,
    brand: "Costa Coffee",
    icon: Coffee,
    value: "25 AED",
    cost: "7 GXCT",
    discount: "12%",
    color: "#4DC3E9",
  },
  {
    id: 4,
    brand: "DEWA Bill",
    icon: Zap,
    value: "200 AED",
    cost: "55 GXCT",
    discount: "5%",
    color: "#00B686",
  },
  {
    id: 5,
    brand: "Noon",
    icon: ShoppingBag,
    value: "150 AED",
    cost: "42 GXCT",
    discount: "7%",
    color: "#4DC3E9",
  },
  {
    id: 6,
    brand: "Amazon.ae",
    icon: ShoppingBag,
    value: "200 AED",
    cost: "56 GXCT",
    discount: "6%",
    color: "#CBAF64",
  },
];

const rewards = [
  {
    id: 1,
    title: "Metro Gold Card",
    description: "Free Metro rides for 1 month",
    points: "500 GXCT",
    availability: "Limited",
    image: "🚇",
  },
  {
    id: 2,
    title: "Dubai Parks VIP Pass",
    description: "Access to all Dubai Parks",
    points: "1000 GXCT",
    availability: "Available",
    image: "🎢",
  },
  {
    id: 3,
    title: "Solar Panel Discount",
    description: "20% off on solar installation",
    points: "2000 GXCT",
    availability: "Partner Offer",
    image: "☀️",
  },
  {
    id: 4,
    title: "Electric Bike Rental",
    description: "Free e-bike rental for 1 week",
    points: "300 GXCT",
    availability: "Available",
    image: "🚲",
  },
];

export function MarketplaceScreen({ onBack }: MarketplaceScreenProps) {
  const gxctBalance = 192.8;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#101820] to-[#1a2230] pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#CBAF64] to-[#00B686] p-6 pb-24 rounded-b-3xl">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h2 className="text-xl text-white">Marketplace</h2>
          <div className="w-10" />
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-white/80 mb-2">Your Balance</p>
          <h1 className="text-4xl text-white mb-1">{gxctBalance} GXCT</h1>
          <p className="text-white/70">Ready to redeem</p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-16">
        <Tabs defaultValue="vouchers" className="w-full">
          <TabsList className="grid grid-cols-3 w-full mb-6 bg-white/10">
            <TabsTrigger
              value="vouchers"
              className="data-[state=active]:bg-[#00B686]"
            >
              <ShoppingBag className="w-4 h-4 mr-1" />
              Vouchers
            </TabsTrigger>
            <TabsTrigger
              value="rewards"
              className="data-[state=active]:bg-[#CBAF64]"
            >
              <Gift className="w-4 h-4 mr-1" />
              Rewards
            </TabsTrigger>
            <TabsTrigger
              value="stake"
              className="data-[state=active]:bg-[#4DC3E9]"
            >
              <Lock className="w-4 h-4 mr-1" />
              Stake
            </TabsTrigger>
          </TabsList>

          <TabsContent value="vouchers" className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-4 bg-gradient-to-br from-[#00B686]/20 to-[#4DC3E9]/10 border-[#00B686]/30 mb-6">
                <h3 className="text-white mb-2">Special Offer!</h3>
                <p className="text-sm text-gray-300">
                  Get 15% extra value on all vouchers this week 🎉
                </p>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                {vouchers.map((voucher, index) => {
                  const Icon = voucher.icon;
                  return (
                    <motion.div
                      key={voucher.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-4 bg-white/10 border-white/20 hover:bg-white/15 transition-colors">
                        <div className="mb-3">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                            style={{ backgroundColor: `${voucher.color}20` }}
                          >
                            <Icon
                              className="w-6 h-6"
                              style={{ color: voucher.color }}
                            />
                          </div>
                          <h4 className="text-white mb-1">{voucher.brand}</h4>
                          <p className="text-lg text-[#CBAF64] mb-1">
                            {voucher.value}
                          </p>
                          <Badge className="bg-[#00B686]/20 text-[#00B686] border-[#00B686]/30 text-xs">
                            {voucher.discount} off
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-400">Cost</span>
                            <span className="text-white">{voucher.cost}</span>
                          </div>
                          <Button
                            className="w-full h-9 text-xs"
                            style={{ backgroundColor: voucher.color }}
                          >
                            Redeem
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="rewards" className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {rewards.map((reward, index) => (
                <motion.div
                  key={reward.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 bg-white/10 border-white/20 hover:bg-white/15 transition-colors mb-3">
                    <div className="flex items-start gap-4">
                      <div className="text-5xl">{reward.image}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-white mb-1">{reward.title}</h4>
                            <p className="text-sm text-gray-400 mb-2">
                              {reward.description}
                            </p>
                            <Badge
                              className={`text-xs ${
                                reward.availability === "Limited"
                                  ? "bg-[#CBAF64]/20 text-[#CBAF64] border-[#CBAF64]/30"
                                  : reward.availability === "Available"
                                  ? "bg-[#00B686]/20 text-[#00B686] border-[#00B686]/30"
                                  : "bg-[#4DC3E9]/20 text-[#4DC3E9] border-[#4DC3E9]/30"
                              }`}
                            >
                              {reward.availability}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#CBAF64]">{reward.points}</span>
                          <Button className="h-9 bg-[#CBAF64] hover:bg-[#e0c87f] text-[#101820]">
                            Claim
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="stake" className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6 bg-gradient-to-br from-[#4DC3E9]/20 to-[#00B686]/10 border-[#4DC3E9]/30 mb-6">
                <h3 className="text-xl text-white mb-2">Staking Pools</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Lock your GXCT tokens and earn passive rewards
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl text-[#CBAF64] mb-1">5-25%</p>
                    <p className="text-xs text-gray-400">APY Range</p>
                  </div>
                  <div>
                    <p className="text-2xl text-[#00B686] mb-1">7-30</p>
                    <p className="text-xs text-gray-400">Days Lock</p>
                  </div>
                  <div>
                    <p className="text-2xl text-[#4DC3E9] mb-1">10+</p>
                    <p className="text-xs text-gray-400">Min GXCT</p>
                  </div>
                </div>
              </Card>

              {[
                {
                  name: "Green Pool A",
                  apy: "25%",
                  duration: "30 days",
                  minStake: "50 GXCT",
                  rewards: "Daily",
                },
                {
                  name: "Eco Pool B",
                  apy: "15%",
                  duration: "14 days",
                  minStake: "25 GXCT",
                  rewards: "Daily",
                },
                {
                  name: "Dubai Pool C",
                  apy: "5%",
                  duration: "7 days",
                  minStake: "10 GXCT",
                  rewards: "Daily",
                },
              ].map((pool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 bg-white/10 border-white/20 mb-3">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white">{pool.name}</h4>
                      <Badge className="bg-[#CBAF64]/20 text-[#CBAF64] border-[#CBAF64]/30">
                        {pool.apy} APY
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
                      <div>
                        <p className="text-gray-400">Duration</p>
                        <p className="text-white">{pool.duration}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Min Stake</p>
                        <p className="text-white">{pool.minStake}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Rewards</p>
                        <p className="text-white">{pool.rewards}</p>
                      </div>
                    </div>
                    <Button className="w-full bg-[#4DC3E9] hover:bg-[#6dd5f5] text-white">
                      Stake Now
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
