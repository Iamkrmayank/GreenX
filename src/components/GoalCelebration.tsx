import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

interface GoalCelebrationProps {
  show: boolean;
  onComplete?: () => void;
}

export function GoalCelebration({ show, onComplete }: GoalCelebrationProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string }>>([]);

  useEffect(() => {
    if (show) {
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: ["#10B981", "#059669", "#34D399", "#14B8A6", "#F59E0B"][Math.floor(Math.random() * 5)],
      }));
      setParticles(newParticles);

      const timeout = setTimeout(() => {
        if (onComplete) onComplete();
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [show, onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-3 h-3 rounded-full"
          style={{
            backgroundColor: particle.color,
            left: `${particle.x}%`,
            top: `-10%`,
          }}
          initial={{ y: 0, opacity: 1, scale: 0 }}
          animate={{
            y: window.innerHeight + 100,
            opacity: [1, 1, 0],
            scale: [0, 1, 0.5],
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            ease: "easeOut",
          }}
        />
      ))}
      
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-6 rounded-2xl shadow-2xl flex items-center gap-3">
          <Sparkles className="w-8 h-8" />
          <div>
            <h3 className="text-2xl mb-1">🎉 Goal Achieved!</h3>
            <p className="text-sm text-white/90">Great job on your sustainability journey</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
