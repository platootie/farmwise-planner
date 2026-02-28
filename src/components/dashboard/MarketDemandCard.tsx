import { TrendingUp, TrendingDown, Minus, Store } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { marketData } from "@/data/mockData";

const trendIcon = (trend: string) => {
  if (trend === "up") return <TrendingUp className="h-4 w-4 text-success" />;
  if (trend === "down") return <TrendingDown className="h-4 w-4 text-destructive" />;
  return <Minus className="h-4 w-4 text-muted-foreground" />;
};

const demandColor = (demand: string) => {
  if (demand === "High") return "text-success";
  if (demand === "Low") return "text-destructive";
  return "text-warning";
};

const MarketDemandCard = () => {
  return (
    <Card className="col-span-full lg:col-span-1">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Store className="h-5 w-5 text-secondary" />
          Market Prices
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="grid grid-cols-4 text-xs text-muted-foreground font-medium pb-1 border-b border-border">
            <span>Crop</span>
            <span className="text-right">Local</span>
            <span className="text-right">Global</span>
            <span className="text-right">Demand</span>
          </div>
          {marketData.map((item) => (
            <div key={item.crop} className="grid grid-cols-4 items-center text-sm">
              <span className="font-medium flex items-center gap-1.5">
                {trendIcon(item.trend)}
                {item.crop}
              </span>
              <span className="text-right">${item.localPrice}</span>
              <span className="text-right text-muted-foreground">${item.globalPrice}</span>
              <span className={`text-right font-medium ${demandColor(item.demand)}`}>{item.demand}</span>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-muted-foreground mt-3">Prices per ton · Updated daily</p>
      </CardContent>
    </Card>
  );
};

export default MarketDemandCard;
