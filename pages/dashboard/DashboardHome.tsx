import { DashboardHomeCards } from "../../utils/constants"
import { DashboardCard } from "../../components/dashboard/DashboardCard"
import { PieChartsBoard } from "../../components/dashboard/charts/PieChartsBoard"
import { AreaChartBoard } from "../../components/dashboard/charts/AreaChartBoard"

export const DashboardHome = () => {
  return (
    <div className="h-full flex flex-col gap-5 overflow-auto">
      <div className="flex gap-5 justify-between">
        {DashboardHomeCards.map((card, index) => (
          <DashboardCard key={index} {...card} />
        ))}
      </div>
      <div className="flex justify-between gap-5">
        <PieChartsBoard />
        <AreaChartBoard />
      </div>
    </div>
  )
}
