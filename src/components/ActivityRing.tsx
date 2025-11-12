import { motion } from "motion/react";

interface ActivityRingProps {
  progress: number;
  color: string;
  size?: number;
  strokeWidth?: number;
  delay?: number;
}

export function ActivityRing({ 
  progress, 
  color, 
  size = 140, 
  strokeWidth = 12,
  delay = 0 
}: ActivityRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg 
      width="100%" 
      height="100%" 
      viewBox={`0 0 ${size} ${size}`}
      className="transform -rotate-90"
    >
      {/* Background circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#E5E7EB"
        strokeWidth={strokeWidth}
        fill="none"
        opacity={0.2}
      />
      {/* Progress circle */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        strokeLinecap="round"
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset }}
        transition={{ duration: 1.5, delay, ease: "easeOut" }}
      />
    </svg>
  );
}
