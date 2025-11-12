import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface LeafConfettiProps {
  show: boolean;
  onComplete?: () => void;
}

export function LeafConfetti({ show, onComplete }: LeafConfettiProps) {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    if (show) {
      setParticles(Array.from({ length: 20 }, (_, i) => i));
      setTimeout(() => {
        setParticles([]);
        onComplete?.();
      }, 3000);
    }
  }, [show, onComplete]);

  if (!show || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
            rotate: 0,
            opacity: 1,
          }}
          animate={{
            y: window.innerHeight + 20,
            x: Math.random() * window.innerWidth,
            rotate: Math.random() * 360,
            opacity: 0,
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            ease: "easeOut",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#00B686]"
          >
            <path
              d="M12 2C12 2 8 6 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 6 12 2 12 2Z"
              fill="currentColor"
              opacity="0.6"
            />
            <path
              d="M12 14C12 14 16 18 16 22C16 22 12 20 12 16C12 16 8 22 8 22C8 18 12 14 12 14Z"
              fill="currentColor"
              opacity="0.8"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
