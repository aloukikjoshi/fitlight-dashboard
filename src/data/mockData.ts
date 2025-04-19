
import { addDays, format } from "date-fns";

// Generate this week's dates
const generateWeekDays = () => {
  const today = new Date();
  const weekStart = addDays(today, -6);
  
  return Array(7)
    .fill(null)
    .map((_, index) => {
      const date = addDays(weekStart, index);
      return format(date, "EEE");
    });
};

const weekDays = generateWeekDays();

// Mock weekly steps and calories
export const weeklyActivityData = weekDays.map((day, index) => {
  // Create a pattern that grows throughout the week with some variation
  const baseSteps = 5000 + (index * 800) + (Math.random() * 2000 - 1000);
  const baseCalories = 1800 + (index * 120) + (Math.random() * 400 - 200);
  
  return {
    day,
    steps: Math.round(baseSteps),
    calories: Math.round(baseCalories),
  };
});

// Today's progress
export const todayProgress = {
  steps: 7854,
  stepsGoal: 10000,
  caloriesBurned: 1640,
  caloriesGoal: 2500,
  activeMinutes: 48,
  activeMinutesGoal: 60,
  heartRate: 72,
  waterIntake: 5,
  waterIntakeGoal: 8,
};

// Today's activity timeline
export const todayActivities = [
  {
    id: 1,
    time: "7:30 AM",
    title: "Morning Walk",
    description: "Completed 2,345 steps in 20 minutes",
    type: "steps" as const,
  },
  {
    id: 2,
    time: "9:15 AM",
    title: "Heart Rate Check",
    description: "Resting heart rate: 68 BPM",
    type: "heartrate" as const,
  },
  {
    id: 3,
    time: "12:30 PM",
    title: "Caloric Intake",
    description: "Lunch: 580 calories consumed",
    type: "calories" as const,
  },
  {
    id: 4,
    time: "5:45 PM",
    title: "Evening Workout",
    description: "30 minute strength training session",
    type: "workout" as const,
  },
  {
    id: 5,
    time: "7:00 PM",
    title: "Evening Run",
    description: "3.2 miles in 28 minutes",
    type: "cardio" as const,
  },
];

// Health stats
export const healthStats = {
  sleep: {
    value: "7h 20m",
    trend: { value: 5, isPositive: true },
  },
  weight: {
    value: "165 lbs",
    trend: { value: 1.2, isPositive: false },
  },
  bloodPressure: {
    value: "120/80",
    trend: { value: 2, isPositive: true },
  },
  restingHeartRate: {
    value: "68 BPM",
    trend: { value: 3, isPositive: true },
  },
};
