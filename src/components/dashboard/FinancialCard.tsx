import { DollarSign, TrendingUp, ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { financialData } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts";

const formatCurrency = (val: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);

const FinancialCard = () => {
  const { totalRevenue, totalCosts, netProfit, profitMargin, monthlyData, costs } = financialData;

  return (
    <Card className="col-span-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-secondary" />
          Financial Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Summary stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <div className="p-3 rounded-lg bg-muted/50 border border-border">
            <p className="text-xs text-muted-foreground flex items-center gap-1"><ArrowUpRight className="h-3 w-3 text-success" />Revenue</p>
            <p className="text-xl font-display font-bold">{formatCurrency(totalRevenue)}</p>
          </div>
          <div className="p-3 rounded-lg bg-muted/50 border border-border">
            <p className="text-xs text-muted-foreground flex items-center gap-1"><ArrowDownRight className="h-3 w-3 text-destructive" />Costs</p>
            <p className="text-xl font-display font-bold">{formatCurrency(totalCosts)}</p>
          </div>
          <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
            <p className="text-xs text-muted-foreground flex items-center gap-1"><TrendingUp className="h-3 w-3 text-primary" />Net Profit</p>
            <p className="text-xl font-display font-bold text-primary">{formatCurrency(netProfit)}</p>
          </div>
          <div className="p-3 rounded-lg bg-muted/50 border border-border">
            <p className="text-xs text-muted-foreground">Profit Margin</p>
            <p className="text-xl font-display font-bold">{profitMargin}%</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart */}
          <div className="lg:col-span-2">
            <p className="text-sm font-medium mb-3">Monthly Revenue vs Costs</p>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData} barGap={2}>
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                  <Tooltip formatter={(value: number) => formatCurrency(value)} />
                  <Legend iconSize={8} wrapperStyle={{ fontSize: 12 }} />
                  <Bar dataKey="revenue" name="Revenue" fill="hsl(152 55% 40%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="costs" name="Costs" fill="hsl(38 85% 55%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Cost breakdown */}
          <div>
            <p className="text-sm font-medium mb-3">Cost Breakdown</p>
            <div className="space-y-2.5">
              {costs.map((c) => {
                const pct = Math.round((c.amount / totalCosts) * 100);
                return (
                  <div key={c.category}>
                    <div className="flex justify-between text-xs mb-1">
                      <span>{c.category}</span>
                      <span className="text-muted-foreground">{formatCurrency(c.amount)} ({pct}%)</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialCard;
