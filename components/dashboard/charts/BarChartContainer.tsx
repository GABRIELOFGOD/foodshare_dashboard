import { HiDotsVertical } from 'react-icons/hi'
import BarChart from './BarChart';

export const BarChartContainer = () => {
  return (
    <div className='bg-white w-full rounded-md shadow-md flex flex-col gap-2 py-5 px-6'>
      <div className="justify-between flex">
        <p className="font-bold text-xl">Customer Map</p>
        <div className="flex gap-10">
          <div className="text-secondary-200 flex duration-200 cursor-pointer h-8 w-8 rounded-full justify-center items-center hover:bg-neutral-200"><HiDotsVertical size={20} /></div>
        </div>
      </div>
      <div>
        <BarChart />
      </div>
    </div>
  )
}
