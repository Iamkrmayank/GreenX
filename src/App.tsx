import { useState, useEffect } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { LoginScreen } from "./components/LoginScreen";
import { OnboardingScreen } from "./components/OnboardingScreen";
import { DashboardWeb } from "./components/DashboardWeb";
import { WalletScreenWeb } from "./components/WalletScreenWeb";
import { MarketplaceScreenWeb } from "./components/MarketplaceScreenWeb";
import { LeaderboardScreenWeb } from "./components/LeaderboardScreenWeb";
import { ProfileScreenWeb } from "./components/ProfileScreenWeb";
import { EnergyTrackerPage } from "./components/EnergyTrackerPage";
import { TransportTrackerPage } from "./components/TransportTrackerPage";
import { FitnessTrackerPage } from "./components/FitnessTrackerPage";
import { RecyclingTrackerPage } from "./components/RecyclingTrackerPage";
import { SolarTrackerPage } from "./components/SolarTrackerPage";
import { EcoShoppingTrackerPage } from "./components/EcoShoppingTrackerPage";
import { NavigationBar } from "./components/NavigationBar";
import { Toaster } from "./components/ui/sonner";

type Screen =
  | "welcome"
  | "login"
  | "onboarding"
  | "dashboard"
  | "wallet"
  | "marketplace"
  | "leaderboard"
  | "profile"
  | "addActivity"
  | "energy-tracker"
  | "transport-tracker"
  | "fitness-tracker"
  | "recycling-tracker"
  | "solar-tracker"
  | "eco-shopping-tracker";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentScreen("onboarding");
  };

  const handleOnboardingComplete = (activities: string[]) => {
    setSelectedActivities(activities);
    setCurrentScreen("dashboard");
  };

  const showNavbar =
    isAuthenticated &&
    currentScreen !== "welcome" &&
    currentScreen !== "login" &&
    currentScreen !== "onboarding" &&
    !currentScreen.includes("-tracker");

  const renderScreen = () => {
    switch (currentScreen) {
      case "welcome":
        return <WelcomeScreen onGetStarted={() => setCurrentScreen("login")} />;

      case "login":
        return (
          <LoginScreen
            onLogin={handleLogin}
            onBack={() => setCurrentScreen("welcome")}
          />
        );

      case "onboarding":
        return <OnboardingScreen onComplete={handleOnboardingComplete} />;

      case "dashboard":
        return (
          <DashboardWeb
            onNavigate={(screen) => setCurrentScreen(screen as Screen)}
            selectedActivities={selectedActivities}
          />
        );

      case "wallet":
        return <WalletScreenWeb />;

      case "marketplace":
        return <MarketplaceScreenWeb />;

      case "leaderboard":
        return <LeaderboardScreenWeb />;

      case "profile":
        return <ProfileScreenWeb />;

      case "energy-tracker":
        return <EnergyTrackerPage onBack={() => setCurrentScreen("dashboard")} />;

      case "transport-tracker":
        return <TransportTrackerPage onBack={() => setCurrentScreen("dashboard")} />;

      case "fitness-tracker":
        return <FitnessTrackerPage onBack={() => setCurrentScreen("dashboard")} />;

      case "recycling-tracker":
        return <RecyclingTrackerPage onBack={() => setCurrentScreen("dashboard")} />;

      case "solar-tracker":
        return <SolarTrackerPage onBack={() => setCurrentScreen("dashboard")} />;

      case "eco-shopping-tracker":
        return <EcoShoppingTrackerPage onBack={() => setCurrentScreen("dashboard")} />;

      default:
        return (
          <DashboardWeb
            onNavigate={(screen) => setCurrentScreen(screen as Screen)}
            selectedActivities={selectedActivities}
          />
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Show Navbar only when authenticated and not on welcome/login/onboarding */}
      {showNavbar && (
        <NavigationBar
          currentScreen={currentScreen}
          onNavigate={(screen) => setCurrentScreen(screen as Screen)}
        />
      )}

      {/* Main Content */}
      <div>
        {renderScreen()}
      </div>

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1a2230",
            color: "#ffffff",
            border: "1px solid rgba(0, 182, 134, 0.3)",
          },
        }}
      />
    </div>
  );
}
