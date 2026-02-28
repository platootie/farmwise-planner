// Mock data for the farm dashboard

export const weatherData = {
  current: {
    temp: 28,
    humidity: 65,
    condition: "Partly Cloudy",
    windSpeed: 12,
    rainfall: 0,
    uvIndex: 6,
  },
  forecast: [
    { day: "Mon", temp: 29, rain: 10, icon: "sun" },
    { day: "Tue", temp: 27, rain: 40, icon: "cloud-rain" },
    { day: "Wed", temp: 25, rain: 60, icon: "cloud-rain" },
    { day: "Thu", temp: 26, rain: 30, icon: "cloud" },
    { day: "Fri", temp: 28, rain: 5, icon: "sun" },
    { day: "Sat", temp: 30, rain: 0, icon: "sun" },
    { day: "Sun", temp: 29, rain: 15, icon: "cloud" },
  ],
};

export const droneData = {
  lastScan: "2026-02-27",
  soilMoisture: 72,
  cropHealth: 85,
  pestRisk: "Low",
  ndviScore: 0.78,
  areas: [
    { name: "Field A - Maize", health: 92, moisture: 68, status: "Healthy" },
    { name: "Field B - Wheat", health: 78, moisture: 75, status: "Needs Attention" },
    { name: "Field C - Soybeans", health: 88, moisture: 70, status: "Healthy" },
    { name: "Field D - Tomatoes", health: 65, moisture: 80, status: "At Risk" },
  ],
};

export const crops = [
  { name: "Maize", plantDate: "2025-11-15", harvestDate: "2026-04-20", progress: 68, area: "12 ha", status: "Growing" },
  { name: "Wheat", plantDate: "2025-10-01", harvestDate: "2026-03-15", progress: 85, area: "8 ha", status: "Near Harvest" },
  { name: "Soybeans", plantDate: "2025-12-01", harvestDate: "2026-05-10", progress: 45, area: "6 ha", status: "Growing" },
  { name: "Tomatoes", plantDate: "2026-01-10", harvestDate: "2026-04-30", progress: 35, area: "3 ha", status: "Growing" },
];

export const marketData = [
  { crop: "Maize", localPrice: 320, globalPrice: 295, demand: "High", trend: "up" },
  { crop: "Wheat", localPrice: 410, globalPrice: 385, demand: "Medium", trend: "stable" },
  { crop: "Soybeans", localPrice: 580, globalPrice: 550, demand: "High", trend: "up" },
  { crop: "Tomatoes", localPrice: 150, globalPrice: 130, demand: "Low", trend: "down" },
];

export const financialData = {
  totalRevenue: 285000,
  totalCosts: 178000,
  netProfit: 107000,
  profitMargin: 37.5,
  monthlyData: [
    { month: "Sep", revenue: 15000, costs: 28000 },
    { month: "Oct", revenue: 12000, costs: 32000 },
    { month: "Nov", revenue: 8000, costs: 25000 },
    { month: "Dec", revenue: 5000, costs: 18000 },
    { month: "Jan", revenue: 22000, costs: 15000 },
    { month: "Feb", revenue: 38000, costs: 12000 },
    { month: "Mar (est)", revenue: 65000, costs: 14000 },
    { month: "Apr (est)", revenue: 120000, costs: 34000 },
  ],
  costs: [
    { category: "Seeds & Seedlings", amount: 35000 },
    { category: "Fertilizer", amount: 42000 },
    { category: "Labor", amount: 55000 },
    { category: "Equipment & Fuel", amount: 28000 },
    { category: "Water & Irrigation", amount: 18000 },
  ],
};
