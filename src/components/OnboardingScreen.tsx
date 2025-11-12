import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Check, Zap, Train, Activity, Recycle, Sun, ShoppingBag, Sparkles } from "lucide-react";

interface OnboardingScreenProps {
  onComplete: (selectedActivities: string[]) => void;
}

const integrations = [
  {
    id: "dewa",
    name: "Electricity",
    description: "Track your electricity usage",
    icon: Zap,
    color: "#10B981",
  },
  {
    id: "rta",
    name: "Public Transport",
    description: "Monitor public transport usage",
    icon: Train,
    color: "#059669",
  },
  {
    id: "fitness",
    name: "Google Fit",
    description: "Track walking & cycling",
    icon: Activity,
    color: "#34D399",
  },
  {
    id: "municipality",
    name: "Dubai Municipality",
    description: "Log recycling activities",
    icon: Recycle,
    color: "#00B686",
  },
  {
    id: "solar",
    name: "Solar Tracker",
    description: "Monitor solar energy generation",
    icon: Sun,
    color: "#CBAF64",
  },
  {
    id: "shopping",
    name: "Eco Shopping",
    description: "Earn from sustainable purchases",
    icon: ShoppingBag,
    color: "#6EE7B7",
  },
];

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([]);
  const [step, setStep] = useState(1);

  const toggleIntegration = (id: string) => {
    setSelectedIntegrations((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const progress = (selectedIntegrations.length / integrations.length) * 100;

  const handleContinue = () => {
    if (step === 1) {
      setStep(2);
    } else {
      onComplete(selectedIntegrations);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-4 lg:p-8 flex items-center justify-center relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl w-full relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-0 px-4 py-1.5">
            Step {step} of 2
          </Badge>
          <h2 className="text-3xl lg:text-4xl mb-3 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
            {step === 1 ? "Connect Your Apps 🔗" : "Review & Confirm ✓"}
          </h2>
          <p className="text-gray-700 text-lg">
            {step === 1
              ? "Link your accounts to start tracking eco-friendly activities"
              : "You're all set! Start earning Carbenium tokens"}
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-5 bg-white border-2 border-emerald-200 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-700">Setup Progress</span>
              <span className="text-sm text-emerald-600">
                {selectedIntegrations.length} of {integrations.length} selected
              </span>
            </div>
            <Progress value={progress} className="h-2.5" />
          </Card>
        </motion.div>

        {step === 1 ? (
          <>
            {/* Integration Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {integrations.map((integration, index) => {
                const Icon = integration.icon;
                const isSelected = selectedIntegrations.includes(integration.id);

                return (
                  <motion.div
                    key={integration.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <Card
                      className={`p-5 cursor-pointer transition-all ${
                        isSelected
                          ? "bg-gradient-to-br from-emerald-100 to-green-100 border-2 border-emerald-400 shadow-lg scale-105"
                          : "bg-white border-2 border-gray-200 hover:border-emerald-300 hover:shadow-md"
                      }`}
                      onClick={() => toggleIntegration(integration.id)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                          style={{
                            background: isSelected
                              ? integration.color
                              : `linear-gradient(135deg, ${integration.color}20, ${integration.color}10)`,
                          }}
                        >
                          <Icon
                            className="w-6 h-6"
                            style={{ color: isSelected ? "white" : integration.color }}
                          />
                        </div>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center shadow-md"
                          >
                            <Check className="w-5 h-5 text-white" />
                          </motion.div>
                        )}
                      </div>
                      <h3 className={`text-lg mb-1 ${isSelected ? "text-gray-900" : "text-gray-800"}`}>
                        {integration.name}
                      </h3>
                      <p className={`text-sm ${isSelected ? "text-gray-700" : "text-gray-600"}`}>
                        {integration.description}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="p-5 bg-gradient-to-r from-teal-50 to-emerald-50 border-2 border-teal-200 mb-6">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-800">
                      💡 <strong>Tip:</strong> Connect at least 3 apps to maximize your earnings!
                      Each integration tracks different eco-friendly activities and helps you earn more Carbenium tokens.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-8 bg-white border-2 border-emerald-200 shadow-xl mb-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mx-auto mb-4 shadow-xl shadow-emerald-500/30">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl text-gray-900 mb-2">All Set!</h3>
                <p className="text-gray-700">
                  You've successfully connected {selectedIntegrations.length} app
                  {selectedIntegrations.length !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {selectedIntegrations.map((id) => {
                  const integration = integrations.find((i) => i.id === id);
                  if (!integration) return null;
                  const Icon = integration.icon;

                  return (
                    <div
                      key={id}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm"
                        style={{ backgroundColor: integration.color }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{integration.name}</p>
                        <p className="text-xs text-gray-600">{integration.description}</p>
                      </div>
                      <Check className="w-5 h-5 text-emerald-600" />
                    </div>
                  );
                })}
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-amber-100 border-2 border-amber-200 rounded-xl p-4">
                <p className="text-center text-sm text-gray-800">
                  🎉 You're ready to start earning Carbenium tokens for your eco-friendly actions!
                </p>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          {step === 2 && (
            <Button
              variant="outline"
              onClick={() => setStep(1)}
              className="border-2 border-gray-300 hover:border-emerald-300 hover:bg-emerald-50 text-gray-700"
            >
              Back
            </Button>
          )}
          <Button
            onClick={handleContinue}
            disabled={step === 1 && selectedIntegrations.length === 0}
            className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-12 shadow-lg disabled:opacity-50"
          >
            {step === 1 ? "Continue" : "Start Earning"}
          </Button>
        </div>

        {/* Skip Link */}
        {step === 1 && (
          <div className="text-center mt-4">
            <button
              onClick={() => onComplete([])}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              Skip for now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
