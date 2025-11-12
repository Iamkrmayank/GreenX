import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Leaf, Sparkles, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "figma:asset/79eab8a38dab2c66f445d140873418f5b421e79d.png";

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-300/30 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl mx-auto p-6 lg:p-8">
        {/* Logo and Branding */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8 relative inline-block"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img src={logo} alt="GreenXchain" className="h-40 w-auto drop-shadow-2xl" />
            <motion.div
              className="absolute -top-4 -right-4"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Sparkles className="w-12 h-12 text-amber-500" />
            </motion.div>
          </motion.div>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <Badge className="bg-amber-100 text-amber-700 border-0 text-sm px-3 py-1">
              Web3
            </Badge>
          </div>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Earn for Being Green 🌱
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Track your eco-friendly actions and earn real money through Web3 carbon credits.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              { icon: "🌱", label: "Eco Tracking", color: "emerald" },
              { icon: "♻️", label: "Recycling", color: "green" },
              { icon: "🚇", label: "Transport", color: "teal" },
              { icon: "☀️", label: "Solar Energy", color: "amber" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-4 rounded-2xl bg-white border-2 border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <p className="text-sm text-gray-800">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {[
              { value: "1,245+", label: "Active Users" },
              { value: "45K kg", label: "CO₂ Saved" },
              { value: "28K", label: "Carbenium Earned" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-2xl text-emerald-600">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Button
              onClick={onGetStarted}
              className="h-20 px-16 text-lg bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-2xl shadow-emerald-500/30 rounded-2xl group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-center text-gray-600 mt-6 text-sm">
              🔐 Powered by Blockchain • ✓ Verified & Secure
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={className}>
      {children}
    </span>
  );
}
