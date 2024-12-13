import { DashboardCardType } from '../../utils';
import { BiArrowToBottom, BiArrowToTop } from 'react-icons/bi';

export const DashboardCard = ({ title, image, subValue, movement, value, money }: DashboardCardType) => {
  return (
    <div className='w-full rounded-md bg-white py-8 px-10 shadow-md flex gap-3'>
      <div className='my-auto h-20 w-20 flex justify-center items-center rounded-full p-4 bg-primary bg-opacity-15'><img src={image} alt="Card icon" /></div>
      <div className='flex flex-col gap-2'>
        <p className="font-bold text-3xl">
          {money ? "₦" : ""}
          {value >= 1000000 ? (value / 1000000).toFixed(1) + "M" : value >= 10000 ? (value / 1000).toFixed(1) + "k" : value}
        </p>
        <p className="text-sm font-light whitespace-nowrap">{title}</p>
        <div className="flex gap-2">
          {movement && <div className={`rounded-full p-1 h-fit w-fit whitespace-nowrap bg-opacity-30 ${movement == "positive" ? "text-primary bg-primary" : "text-quaternary bg-quaternary"}`}>{movement == "positive" ? <BiArrowToTop size={10} /> : <BiArrowToBottom size={10} />}</div>}
          <p className="text-xs font-light whitespace-nowrap text-secondary-100">{subValue}</p>
        </div>
      </div>
    </div>
  )
}

