import { Cloud, Sun, CloudRain, Droplets, Wind, Thermometer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { weatherData } from "@/data/mockData";

const iconMap: Record<string, React.ElementType> = {
  sun: Sun,
  cloud: Cloud,
  "cloud-rain": CloudRain,
};

const WeatherCard = () => {
  const { current, forecast } = weatherData;

  return (
    <Card className="col-span-full lg:col-span-1">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Sun className="h-5 w-5 text-secondary" />
          Weather
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-4xl font-display font-bold">{current.temp}°C</p>
            <p className="text-muted-foreground text-sm">{current.condition}</p>
          </div>
          <div className="text-right space-y-1 text-sm text-muted-foreground">
            <p className="flex items-center gap-1 justify-end"><Droplets className="h-3.5 w-3.5" /> {current.humidity}%</p>
            <p className="flex items-center gap-1 justify-end"><Wind className="h-3.5 w-3.5" /> {current.windSpeed} km/h</p>
            <p className="flex items-center gap-1 justify-end"><Thermometer className="h-3.5 w-3.5" /> UV {current.uvIndex}</p>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 pt-3 border-t border-border">
          {forecast.map((day) => {
            const Icon = iconMap[day.icon] || Cloud;
            return (
              <div key={day.day} className="text-center">
                <p className="text-xs text-muted-foreground mb-1">{day.day}</p>
                <Icon className="h-4 w-4 mx-auto text-muted-foreground" />
                <p className="text-xs font-medium mt-1">{day.temp}°</p>
                <p className="text-[10px] text-info">{day.rain}%</p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
