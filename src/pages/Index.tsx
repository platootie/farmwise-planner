import { Tractor, Sprout, DollarSign, TrendingUp } from "lucide-react";
import WeatherCard from "@/components/dashboard/WeatherCard";
import DroneInsightsCard from "@/components/dashboard/DroneInsightsCard";
import CropPlannerCard from "@/components/dashboard/CropPlannerCard";
import MarketDemandCard from "@/components/dashboard/MarketDemandCard";
import FinancialCard from "@/components/dashboard/FinancialCard";

const quickStats = [
  { label: "Active Fields", value: "4", icon: Sprout, color: "text-primary" },
  { label: "Total Area", value: "29 ha", icon: Tractor, color: "text-info" },
  { label: "Season Profit", value: "$107K", icon: DollarSign, color: "text-success" },
  { label: "Avg Crop Health", value: "85%", icon: TrendingUp, color: "text-secondary" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
              <Sprout className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-display font-bold leading-tight">FarmVision</h1>
              <p className="text-xs text-muted-foreground">Smart Farm Dashboard</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">Good morning, Farmer</p>
            <p className="text-xs text-muted-foreground">Season 2025–2026</p>
          </div>
        </div>
      </header>

      <main className="container max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {quickStats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-card rounded-xl border border-border p-4 flex items-center gap-3 animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
              <div>
                <p className="text-2xl font-display font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Weather + Drone row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <WeatherCard />
          <DroneInsightsCard />
        </div>

        {/* Crop Planner */}
        <CropPlannerCard />

        {/* Market + Financial row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <MarketDemandCard />
          <div className="lg:col-span-2">
            <FinancialCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
