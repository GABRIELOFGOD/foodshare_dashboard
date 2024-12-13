import { AreaChartBoard } from "../../components/dashboard/charts/AreaChartBoard";
import { PieChartsBoard } from "../../components/dashboard/charts/PieChartsBoard";
import { RevenueChartBoard } from "../../components/dashboard/charts/RevenueChartBoard";
import { BarChartContainer } from "../../components/dashboard/charts/BarChartContainer";

export const Analytics = () => {
  return (
    <div className="flex flex-col gap-5 overflow-auto analytics pb-32 h-full">
      <div className="flex justify-between gap-5">
        <PieChartsBoard />
        <AreaChartBoard />
      </div>
      <div className="flex justify-between gap-5">
        <div className="flex-[2]"><RevenueChartBoard currentYear={2021} previousYear={2020} /></div>
        <div className="flex-1"><BarChartContainer /></div>
      </div>
    </div>
  )
}
