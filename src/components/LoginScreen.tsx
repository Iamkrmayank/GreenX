import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Chrome, Shield, Leaf, ArrowLeft, Mail, Lock } from "lucide-react";
import logo from "figma:asset/79eab8a38dab2c66f445d140873418f5b421e79d.png";

interface LoginScreenProps {
  onLogin: () => void;
  onBack: () => void;
}

export function LoginScreen({ onLogin, onBack }: LoginScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center p-4 lg:p-8 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300/40 rounded-full blur-3xl" />
      </div>

      {/* Back Button */}
      <motion.div
        className="absolute top-4 left-4 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-gray-700 hover:bg-white hover:text-gray-900 border-2 border-transparent hover:border-emerald-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Button>
      </motion.div>

      {/* Content */}
      <div className="max-w-md w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Card Container */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-emerald-200">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={logo} alt="GreenXchain" className="h-24 w-auto" />
              </motion.div>
            </div>

            <h2 className="text-3xl lg:text-4xl text-center mb-2 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
              Welcome Back
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Sign in to continue earning green rewards
            </p>

            {/* Social Login Buttons */}
            <div className="space-y-3 mb-6">
              <Button
                onClick={onLogin}
                className="w-full h-12 bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-emerald-300 flex items-center justify-center gap-3 shadow-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </Button>

              <Button
                onClick={onLogin}
                className="w-full h-12 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white flex items-center justify-center gap-3 shadow-md"
              >
                <Shield className="w-5 h-5" />
                Continue with UAE Pass
              </Button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <Separator className="flex-1 bg-gray-300" />
              <span className="text-gray-500 text-sm">or</span>
              <Separator className="flex-1 bg-gray-300" />
            </div>

            {/* Email Login Form */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-gray-700 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-600" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="mt-1.5 bg-gray-50 border-2 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-emerald-400 h-11"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-700 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1.5 bg-gray-50 border-2 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-emerald-400 h-11"
                />
              </div>

              <Button
                onClick={onLogin}
                className="w-full h-12 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-md"
              >
                Sign In
              </Button>
            </div>

            {/* Footer Links */}
            <div className="mt-6 text-center space-y-2">
              <button className="text-teal-600 hover:text-teal-700 text-sm">
                Forgot Password?
              </button>
              <p className="text-gray-600 text-sm">
                Don't have an account?{" "}
                <button
                  onClick={onLogin}
                  className="text-emerald-600 hover:text-emerald-700"
                >
                  Create Account
                </button>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-gray-600 mt-6">
            By continuing, you agree to our{" "}
            <button className="text-emerald-600 hover:text-emerald-700">
              Terms & Privacy Policy
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
