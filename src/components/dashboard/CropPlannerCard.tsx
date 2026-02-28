import { Sprout } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { crops } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";

const statusBadge = (status: string) => {
  if (status === "Near Harvest") return "bg-secondary/15 text-secondary border-secondary/30";
  return "bg-primary/10 text-primary border-primary/30";
};

const CropPlannerCard = () => {
  return (
    <Card className="col-span-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Sprout className="h-5 w-5 text-primary" />
          Crop Planner
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {crops.map((crop) => (
            <div key={crop.name} className="p-3 rounded-lg bg-muted/50 border border-border">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-sm">{crop.name}</h4>
                  <p className="text-xs text-muted-foreground">{crop.area}</p>
                </div>
                <Badge variant="outline" className={statusBadge(crop.status)}>{crop.status}</Badge>
              </div>
              <Progress value={crop.progress} className="h-2 mb-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Planted: {new Date(crop.plantDate).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</span>
                <span className="font-medium">{crop.progress}% complete</span>
                <span>Harvest: {new Date(crop.harvestDate).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CropPlannerCard;
