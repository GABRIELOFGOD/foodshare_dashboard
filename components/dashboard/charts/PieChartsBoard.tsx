import { useState } from "react";
import DoughnutChart from "./PieChart";
import { HiDotsVertical } from "react-icons/hi";

export const PieChartsBoard = () => {
  const [showValue, setShowValue] = useState(false);

  const toggleShowValue = () => {
    setShowValue(!showValue);
  }
  
  return (
    <div className='bg-white w-full rounded-md shadow-md flex flex-col gap-2 py-5 px-6'>
      <div className="justify-between flex">
        <p className="font-bold text-xl">Pie Chart</p>
        <div className="flex gap-10">
          <div className="flex gap-2">
            <div onClick={toggleShowValue} className={`border h-4 cursor-pointer w-4 my-auto border-quaternary rounded-sm ${showValue ? "bg-quaternary" : "bg-transparent"}`}></div>
            <p className="my-auto font-semibold text-sm">Show Value</p>
          </div>
          <div className="text-secondary-200 flex duration-200 cursor-pointer h-8 w-8 rounded-full justify-center items-center hover:bg-neutral-200"><HiDotsVertical size={20} /></div>
        </div>
      </div>

      <div className="flex w-full h-[227px] justify-between gap-5">
        <div className="flex flex-col w-fit justify-center items-center gap-3 h-fit">
          <DoughnutChart
            color="red"
            percentage={75}
            completeLabel="Successfull Orders"
            remainingLabel="Failed Orders"
          />
          <p className="text-sm">Total Orders</p>
        </div>
        <div className="flex flex-col w-fit justify-center items-center gap-3 h-fit">
          <DoughnutChart
            color="green"
            percentage={22}
            completeLabel="New Customers"
            remainingLabel="Existing Customers"
          />
          <p className="text-sm">Customer Growth</p>
        </div>
        <div className="flex flex-col w-fit justify-center items-center gap-3 h-fit">
          <DoughnutChart
            color="blue"
            percentage={62}
            completeLabel="Total Revenue"
            remainingLabel="Total Expenses"
          />
          <p className="text-sm">Total Revenue</p>
        </div>
      </div>
    </div>
  )
}
