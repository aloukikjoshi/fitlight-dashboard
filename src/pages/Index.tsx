
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import ProgressCircle from "@/components/ProgressCircle";
import StatCard from "@/components/StatCard";
import ActivityTimeline from "@/components/ActivityTimeline";
import WeeklyActivityChart from "@/components/WeeklyActivityChart";
import GoalCard from "@/components/GoalCard";
import { Button } from "@/components/ui/button";
import {
  Activity,
  BarChart4,
  BellRing,
  Calendar,
  Flame,
  Heart,
  Home,
  Settings,
  Timer,
  User,
  Waves,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  todayProgress, 
  weeklyActivityData, 
  todayActivities, 
  healthStats 
} from "@/data/mockData";

const Index = () => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration issues with theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">FitTrack</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <BellRing className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
              <span className="sr-only">User profile</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 py-6">
        <div className="flex flex-col gap-6">
          {/* Dashboard Title */}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Today
            </Button>
          </div>

          {/* Circular Progress Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProgressCircle
              value={todayProgress.steps}
              max={todayProgress.stepsGoal}
              label="Steps"
              color="hsl(var(--primary))"
              size={isMobile ? 150 : 180}
              className="mx-auto md:mx-0"
            />
            <ProgressCircle
              value={todayProgress.caloriesBurned}
              max={todayProgress.caloriesGoal}
              label="Calories"
              color="hsl(var(--accent))"
              size={isMobile ? 150 : 180}
              className="mx-auto md:mx-0"
            />
            <ProgressCircle
              value={todayProgress.activeMinutes}
              max={todayProgress.activeMinutesGoal}
              label="Active Minutes"
              color="#0ea5e9"
              size={isMobile ? 150 : 180}
              className="mx-auto md:mx-0"
            />
          </div>

          {/* Goals Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <GoalCard
              title="Daily Steps"
              current={todayProgress.steps}
              target={todayProgress.stepsGoal}
              icon={Activity}
              unit="steps"
              progressColor="bg-primary"
            />
            <GoalCard
              title="Calories Burned"
              current={todayProgress.caloriesBurned}
              target={todayProgress.caloriesGoal}
              icon={Flame}
              unit="cal"
              progressColor="bg-accent"
            />
            <GoalCard
              title="Active Minutes"
              current={todayProgress.activeMinutes}
              target={todayProgress.activeMinutesGoal}
              icon={Timer}
              unit="min"
              progressColor="bg-blue-500"
            />
            <GoalCard
              title="Water Intake"
              current={todayProgress.waterIntake}
              target={todayProgress.waterIntakeGoal}
              icon={Waves}
              unit="glasses"
              progressColor="bg-sky-400"
            />
          </div>

          {/* Weekly Chart and Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <WeeklyActivityChart 
              data={weeklyActivityData} 
              className="lg:col-span-2"
            />
            <ActivityTimeline activities={todayActivities} />
          </div>

          {/* Health Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Sleep Duration"
              value={healthStats.sleep.value}
              icon={Timer}
              trend={healthStats.sleep.trend}
              iconColor="text-blue-400"
            />
            <StatCard
              title="Current Weight"
              value={healthStats.weight.value}
              icon={BarChart4}
              trend={healthStats.weight.trend}
              iconColor="text-teal-500"
            />
            <StatCard
              title="Blood Pressure"
              value={healthStats.bloodPressure.value}
              icon={Activity}
              trend={healthStats.bloodPressure.trend}
              iconColor="text-purple-500"
            />
            <StatCard
              title="Resting Heart Rate"
              value={healthStats.restingHeartRate.value}
              icon={Heart}
              trend={healthStats.restingHeartRate.trend}
              iconColor="text-red-500"
            />
          </div>
        </div>
      </main>

      {/* Bottom Navigation on Mobile */}
      {isMobile && (
        <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
          <div className="flex justify-around">
            <Button variant="ghost" className="flex-1 flex flex-col py-2 h-16 rounded-none">
              <Home className="h-5 w-5 mb-1" />
              <span className="text-xs">Home</span>
            </Button>
            <Button variant="ghost" className="flex-1 flex flex-col py-2 h-16 rounded-none">
              <Activity className="h-5 w-5 mb-1" />
              <span className="text-xs">Activity</span>
            </Button>
            <Button variant="ghost" className="flex-1 flex flex-col py-2 h-16 rounded-none">
              <BarChart4 className="h-5 w-5 mb-1" />
              <span className="text-xs">Stats</span>
            </Button>
            <Button variant="ghost" className="flex-1 flex flex-col py-2 h-16 rounded-none">
              <Settings className="h-5 w-5 mb-1" />
              <span className="text-xs">Settings</span>
            </Button>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Index;
