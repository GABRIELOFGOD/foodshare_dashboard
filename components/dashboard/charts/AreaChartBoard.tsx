import { BiArrowToBottom } from 'react-icons/bi'
import AreaChart from './AreaChart';

export const AreaChartBoard = () => {
  return (
    <div className='bg-white w-full rounded-md shadow-md flex flex-col gap-2 py-5 px-6'>
      <div className="justify-between flex">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-xl">Chart Order</p>
          <p className='text-xs text-secondary-100'>Lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
        <button className="flex justify-center gap-3 border-tertiary border rounded-lg py-2 px-6 ">
          <div className='my-auto text-tertiary'><BiArrowToBottom size={20} /></div>
          <p className='text-tertiary font-semibold my-auto'>Save Report</p>
        </button>
      </div>
      <div className=' w-full h-[227px]'>
        <AreaChart />
      </div>
    </div>
  )
}
