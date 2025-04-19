
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { useIsMobile } from "@/hooks/use-mobile";

interface WeeklyData {
  day: string;
  steps: number;
  calories: number;
}

interface WeeklyActivityChartProps {
  data: WeeklyData[];
  className?: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border p-2 rounded-md shadow-md text-sm">
        <p className="font-medium">{label}</p>
        <p className="text-blue-500">Steps: {payload[0].value.toLocaleString()}</p>
        <p className="text-amber-500">Calories: {payload[1].value.toLocaleString()}</p>
      </div>
    );
  }

  return null;
};

const WeeklyActivityChart = ({ data, className }: WeeklyActivityChartProps) => {
  const isMobile = useIsMobile();
  
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-lg">Weekly Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              yAxisId="left" 
              orientation="left" 
              stroke="#0EA5E9" 
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => isMobile ? `${value/1000}k` : value.toLocaleString()}
              axisLine={false} 
              tickLine={false}
              width={40}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#F97316"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => isMobile ? `${value/1000}k` : value.toLocaleString()}
              axisLine={false}
              tickLine={false}
              width={40}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              yAxisId="left"
              dataKey="steps"
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
              barSize={isMobile ? 10 : 20}
            />
            <Bar
              yAxisId="right"
              dataKey="calories"
              fill="hsl(var(--accent))"
              radius={[4, 4, 0, 0]}
              barSize={isMobile ? 10 : 20}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default WeeklyActivityChart;
