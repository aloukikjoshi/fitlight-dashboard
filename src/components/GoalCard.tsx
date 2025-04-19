
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import ProgressBar from "./ProgressBar";
import { LucideIcon } from "lucide-react";

interface GoalCardProps {
  title: string;
  current: number;
  target: number;
  icon: LucideIcon;
  unit: string;
  className?: string;
  progressColor?: string;
}

const GoalCard = ({
  title,
  current,
  target,
  icon: Icon,
  unit,
  className,
  progressColor,
}: GoalCardProps) => {
  const percentage = Math.min(Math.round((current / target) * 100), 100);
  
  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between items-baseline">
            <span className="text-2xl font-bold">{current.toLocaleString()}</span>
            <span className="text-sm text-muted-foreground">
              of {target.toLocaleString()} {unit}
            </span>
          </div>
          <ProgressBar 
            value={current} 
            max={target} 
            barClassName={progressColor}
          />
          <div className="text-xs text-right text-muted-foreground">
            {percentage}% completed
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoalCard;
