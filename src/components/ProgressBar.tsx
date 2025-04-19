
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
  barClassName?: string;
  animate?: boolean;
  label?: string;
  showPercentage?: boolean;
}

const ProgressBar = ({
  value,
  max,
  className,
  barClassName,
  animate = true,
  label,
  showPercentage = false,
}: ProgressBarProps) => {
  const [width, setWidth] = useState(animate ? 0 : (value / max) * 100);
  const percentage = Math.round((value / max) * 100);
  
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setWidth((value / max) * 100);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [value, max, animate]);

  return (
    <div className={cn("w-full space-y-1", className)}>
      {label && (
        <div className="flex justify-between items-center text-sm">
          <span>{label}</span>
          {showPercentage && <span>{percentage}%</span>}
        </div>
      )}
      <div className="h-2 w-full bg-primary/20 rounded-full overflow-hidden">
        <div
          className={cn("h-full bg-primary rounded-full", barClassName)}
          style={{
            width: `${width}%`,
            transition: animate ? "width 1s ease-in-out" : "none",
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
