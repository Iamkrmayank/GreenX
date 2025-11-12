import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Gift, Lock, ShoppingBag, Coffee, Car, Utensils, Zap, Star, TrendingUp } from "lucide-react";
import { Footer } from "./Footer";

const vouchers = [
  {
    id: 1,
    brand: "Careem",
    icon: Car,
    value: "50 AED",
    cost: "15 Carbenium",
    discount: "10%",
    color: "#10B981",
  },
  {
    id: 2,
    brand: "Talabat",
    icon: Utensils,
    value: "100 AED",
    cost: "28 Carbenium",
    discount: "8%",
    color: "#CBAF64",
  },
  {
    id: 3,
    brand: "Costa Coffee",
    icon: Coffee,
    value: "25 AED",
    cost: "7 Carbenium",
    discount: "12%",
    color: "#059669",
  },
  {
    id: 4,
    brand: "DEWA Bill",
    icon: Zap,
    value: "200 AED",
    cost: "55 Carbenium",
    discount: "5%",
    color: "#34D399",
  },
  {
    id: 5,
    brand: "Noon",
    icon: ShoppingBag,
    value: "150 AED",
    cost: "42 Carbenium",
    discount: "7%",
    color: "#00B686",
  },
  {
    id: 6,
    brand: "Amazon.ae",
    icon: ShoppingBag,
    value: "200 AED",
    cost: "56 Carbenium",
    discount: "6%",
    color: "#6EE7B7",
  },
];

const rewards = [
  {
    id: 1,
    title: "Metro Gold Card",
    description: "Free Metro rides for 1 month",
    points: "500 Carbenium",
    availability: "Limited",
    image: "🚇",
  },
  {
    id: 2,
    title: "Dubai Parks VIP Pass",
    description: "Access to all Dubai Parks",
    points: "1000 Carbenium",
    availability: "Available",
    image: "🎢",
  },
  {
    id: 3,
    title: "Solar Panel Discount",
    description: "20% off solar installation",
    points: "750 Carbenium",
    availability: "Available",
    image: "☀️",
  },
  {
    id: 4,
    title: "Electric Scooter Rental",
    description: "1 month free rental",
    points: "600 Carbenium",
    availability: "Limited",
    image: "🛴",
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
    yourStake: "0",
  },
  {
    id: 2,
    name: "Eco Pool B",
    apy: "15%",
    duration: "14 days",
    minStake: "25 Carbenium",
    totalStaked: "8,300",
    yourStake: "100",
  },
  {
    id: 3,
    name: "Dubai Pool C",
    apy: "5%",
    duration: "7 days",
    minStake: "10 Carbenium",
    totalStaked: "5,200",
    yourStake: "0",
  },
];

export function MarketplaceScreenWeb() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-3 sm:p-4 lg:p-6 pb-20 sm:pb-6">
      {/* Header */}
      <motion.div
        className="mb-4 sm:mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl sm:text-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-1 sm:mb-2">
          Marketplace 🛍️
        </h1>
        <p className="text-sm sm:text-base text-gray-700">Redeem your GXCT tokens for rewards</p>
      </motion.div>

      <Tabs defaultValue="vouchers" className="w-full">
        <TabsList className="grid grid-cols-3 w-full max-w-2xl mb-4 sm:mb-6 bg-white border-2 border-gray-200 h-auto">
          <TabsTrigger 
            value="vouchers" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-green-600 data-[state=active]:text-white text-xs sm:text-sm py-2"
          >
            <Gift className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
            <span className="hidden sm:inline">Vouchers</span>
          </TabsTrigger>
          <TabsTrigger 
            value="rewards" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-amber-600 data-[state=active]:text-white text-xs sm:text-sm py-2"
          >
            <Star className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
            <span className="hidden sm:inline">Rewards</span>
          </TabsTrigger>
          <TabsTrigger 
            value="staking" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-teal-600 data-[state=active]:text-white text-xs sm:text-sm py-2"
          >
            <Lock className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
            <span className="hidden sm:inline">Staking</span>
          </TabsTrigger>
        </TabsList>

        {/* Vouchers Tab */}
        <TabsContent value="vouchers">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
            {vouchers.map((voucher, index) => {
              const Icon = voucher.icon;
              return (
                <motion.div
                  key={voucher.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square"
                >
                  <Card className="p-3 sm:p-4 bg-white border-2 border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all cursor-pointer group h-full flex flex-col justify-between relative">
                    {/* Color accent bar */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ backgroundColor: voucher.color }}
                    />
                    
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform"
                          style={{
                            background: `linear-gradient(135deg, ${voucher.color}, ${voucher.color}dd)`,
                          }}
                        >
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <Badge className="bg-emerald-100 text-emerald-700 border-0 text-xs">
                          -{voucher.discount}
                        </Badge>
                      </div>
                      
                      <div>
                        <h3 className="text-sm sm:text-base text-gray-900 line-clamp-1">{voucher.brand}</h3>
                        <p className="text-xs text-gray-600 line-clamp-1">{voucher.value}</p>
                      </div>
                    </div>

                    {/* Price & Button */}
                    <div className="space-y-2">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-sm text-gray-700 mb-2">{voucher.cost}</p>
                        <Button 
                          size="sm" 
                          className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white h-8 text-xs"
                        >
                          Redeem
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </TabsContent>

        {/* Rewards Tab */}
        <TabsContent value="rewards">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {rewards.map((reward, index) => (
              <motion.div
                key={reward.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-5 bg-white border-2 border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center text-4xl shadow-sm">
                      {reward.image}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg text-gray-900">{reward.title}</h3>
                        <Badge
                          className={`${
                            reward.availability === "Limited"
                              ? "bg-red-100 text-red-700"
                              : "bg-green-100 text-green-700"
                          } border-0`}
                        >
                          {reward.availability}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{reward.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-amber-700">{reward.points}</span>
                        <Button 
                          size="sm" 
                          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
                        >
                          Get Reward
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Staking Tab */}
        <TabsContent value="staking">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
            {stakingPools.map((pool, index) => (
              <motion.div
                key={pool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-5 bg-white border-2 border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl text-gray-900 mb-1">{pool.name}</h3>
                      <p className="text-sm text-gray-600">{pool.duration} lock period</p>
                    </div>
                    <Badge className="bg-teal-100 text-teal-700 border-0 text-lg px-3 py-1.5">
                      {pool.apy} APY
                    </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Min Stake</p>
                      <p className="text-sm text-gray-900">{pool.minStake}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Total Staked</p>
                      <p className="text-sm text-gray-900">{pool.totalStaked}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Your Stake</p>
                      <p className="text-sm text-emerald-600">{pool.yourStake} Carbenium</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Stake
                    </Button>
                    {pool.yourStake !== "0" && (
                      <Button variant="outline" className="flex-1 border-2 border-gray-300 hover:bg-gray-50">
                        Unstake
                      </Button>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Info Card */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-5 bg-gradient-to-br from-teal-50 to-emerald-50 border-2 border-teal-200">
              <h4 className="text-lg text-gray-900 mb-2">📊 How Staking Works</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Lock your Carbenium tokens for a fixed period</li>
                <li>• Earn passive income with competitive APY rates</li>
                <li>• Higher lock periods = Higher APY rewards</li>
                <li>• Rewards are automatically compounded</li>
                <li>• Withdraw anytime after lock period ends</li>
              </ul>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>

      <Footer />
    </div>
  );
}
