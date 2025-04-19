
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, Flame, Dumbbell, Timer } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  id: number;
  time: string;
  title: string;
  description: string;
  type: "cardio" | "steps" | "calories" | "workout" | "heartrate";
}

// Helper function to get icon based on activity type
const getActivityIcon = (type: TimelineItem["type"]) => {
  switch (type) {
    case "cardio":
      return <Timer className="h-4 w-4 text-blue-500" />;
    case "steps":
      return <Activity className="h-4 w-4 text-green-500" />;
    case "calories":
      return <Flame className="h-4 w-4 text-orange-500" />;
    case "workout":
      return <Dumbbell className="h-4 w-4 text-purple-500" />;
    case "heartrate":
      return <Heart className="h-4 w-4 text-red-500" />;
    default:
      return <Activity className="h-4 w-4" />;
  }
};

interface ActivityTimelineProps {
  activities: TimelineItem[];
  className?: string;
}

const ActivityTimeline = ({ activities, className }: ActivityTimelineProps) => {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle className="text-lg">Today's Activity</CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        <div className="space-y-4">
          {activities.map((item) => (
            <div
              key={item.id}
              className="flex items-start space-x-3 rounded-lg px-3 py-2 transition-colors hover:bg-muted/50"
            >
              <div className="mt-1">{getActivityIcon(item.type)}</div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{item.title}</p>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                </div>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityTimeline;
