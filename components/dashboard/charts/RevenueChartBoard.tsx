import RevenueAreaChart from './RevenueAreaChart';
import { RevenueBoardProps } from '../../../utils'

export const RevenueChartBoard = ({ currentYear, previousYear } : RevenueBoardProps) => {
  return (
    <div className='bg-white w-full rounded-md shadow-md flex flex-col gap-2 py-5 px-6'>
      <div className="justify-between flex">
        <p className="font-bold text-xl">Total Revenue</p>
        <div className="flex gap-5">
          <div className='gap-2 flex'>
            <div className="rounded-full p-1 h-fit w-fit my-auto bg-tertiary"></div>
            <p className='my-auto text-secondary-100'>{previousYear}</p>
          </div>
          <div className='gap-2 flex'>
            <div className="rounded-full p-1 h-fit w-fit my-auto bg-quaternary"></div>
            <p className='my-auto text-secondary-100'>{currentYear}</p>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <RevenueAreaChart currentYear={2021} previousYear={2020} />
      </div>
    </div>
  )
}
