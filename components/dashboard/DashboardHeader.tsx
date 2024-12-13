import { BiMessageSquareDots, BiSearch } from "react-icons/bi"
import { HeaderNotifications } from "../HeaderNotifications"
import { CiSettings } from "react-icons/ci"
import { PiGiftThin } from "react-icons/pi"
import { IoMdNotificationsOutline } from "react-icons/io"
import { Link } from "react-router-dom"
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react"

export const DashboardHeader = () => {
  const [username, setUsername] = useState("John Doe");
  const [role, setRole] = useState("Admin");
  const [companyName, setCompanyName] = useState("FoodShare");
  
  return (
    <div className="flex gap-10 h-fit">
      <div className="flex w-full relative h-fit">
        <input type="text" placeholder="Search here" className="rounded-md bg-white placeholder:text-secondary-100 px-4 outline-none h-12 w-full text-tertiary font-semibold" />
        <div className=" absolute my-auto pr-6 top-1/4 right-0 text-secondary-100"><BiSearch size={25} /></div>
      </div>
      <div className="flex gap-5">
        <HeaderNotifications icon={<IoMdNotificationsOutline size={25} />} color="blue" notification={5} />
        <Link to="/dashboard/chat"><HeaderNotifications icon={<BiMessageSquareDots size={25} />} color="blue" notification={5} /></Link>
        <HeaderNotifications icon={<PiGiftThin size={25} />} color="purple" notification={5} />
        <HeaderNotifications icon={<CiSettings size={25} />} color="red" notification={5} />
      </div>
      <div className="border-secondary-100 bg-secondary-100 border-2 h-12 w-[2px] my-auto"></div>
      <div className="flex gap-3 my-auto">
        <div className="my-auto">
          <p className="flex gap-2 whitespace-nowrap">Hello, <span className="font-semibold">{username}</span></p>
          <p className="text-secondary-100 text-xs">{role} at {companyName}</p>
        </div>
        <div className="my-auto bg-secondary-200 rounded-full p-2 text-white"><FaUserAlt /></div>
      </div>
    </div>
  )
}
