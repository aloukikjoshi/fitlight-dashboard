
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface ProgressCircleProps {
  value: number;
  max: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  color?: string;
  label: string;
  labelClassName?: string;
  animate?: boolean;
}

const ProgressCircle = ({
  value,
  max,
  size = 120,
  strokeWidth = 10,
  className,
  color = "hsl(var(--primary))",
  label,
  labelClassName,
  animate = true,
}: ProgressCircleProps) => {
  const [progress, setProgress] = useState(animate ? 0 : (value / max) * 100);
  
  // Calculate dimensions
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  
  // Animation effect
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setProgress((value / max) * 100);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [value, max, animate]);

  return (
    <div className={cn("relative flex flex-col items-center justify-center", className)}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="opacity-10"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: animate ? "stroke-dashoffset 1s ease-in-out" : "none" }}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-2xl font-bold">{value.toLocaleString()}</span>
        <span className={cn("text-xs text-muted-foreground", labelClassName)}>{label}</span>
      </div>
    </div>
  );
};

export default ProgressCircle;
