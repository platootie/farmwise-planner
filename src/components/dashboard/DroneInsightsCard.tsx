import { Scan, Leaf, Droplets, Bug } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { droneData } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";

const statusColor = (status: string) => {
  if (status === "Healthy") return "bg-success/10 text-success border-success/20";
  if (status === "Needs Attention") return "bg-warning/10 text-warning border-warning/20";
  return "bg-destructive/10 text-destructive border-destructive/20";
};

const DroneInsightsCard = () => {
  return (
    <Card className="col-span-full lg:col-span-1">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Scan className="h-5 w-5 text-info" />
          Drone Insights
        </CardTitle>
        <p className="text-xs text-muted-foreground">Last scan: {droneData.lastScan}</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center p-2 rounded-lg bg-muted">
            <Leaf className="h-4 w-4 mx-auto text-success mb-1" />
            <p className="text-lg font-bold">{droneData.cropHealth}%</p>
            <p className="text-[10px] text-muted-foreground">Crop Health</p>
          </div>
          <div className="text-center p-2 rounded-lg bg-muted">
            <Droplets className="h-4 w-4 mx-auto text-info mb-1" />
            <p className="text-lg font-bold">{droneData.soilMoisture}%</p>
            <p className="text-[10px] text-muted-foreground">Soil Moisture</p>
          </div>
          <div className="text-center p-2 rounded-lg bg-muted">
            <Bug className="h-4 w-4 mx-auto text-warning mb-1" />
            <p className="text-lg font-bold">{droneData.pestRisk}</p>
            <p className="text-[10px] text-muted-foreground">Pest Risk</p>
          </div>
        </div>
        <div className="space-y-3">
          {droneData.areas.map((area) => (
            <div key={area.name} className="flex items-center justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{area.name}</p>
                <Progress value={area.health} className="h-1.5 mt-1" />
              </div>
              <Badge variant="outline" className={`text-[10px] shrink-0 ${statusColor(area.status)}`}>
                {area.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DroneInsightsCard;
