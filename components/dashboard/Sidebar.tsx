import { NavLink } from "react-router-dom"
import { NavLists } from "../../utils/constants"
import { LuLayoutDashboard } from "react-icons/lu"

export const Sidebar = () => {
  return (
    <div className={`md:flex-1 bg-white`}>
      <div className="px-6 pt-6">
        <p className="font-bold text-[#333333] text-2xl logo">FoodShare</p>
        <p className="text-[#B9BBBD]">... fun share</p>
      </div>
      <div className="py-10 flex flex-col nav px-5">
        <NavLink to="/dashboard" end className="py-3 flex gap-3 hover:bg-neutral-200 duration-200 rounded-md px-6 h-fit"><div className="my-auto"><LuLayoutDashboard /></div> Dashboard</NavLink>
        {NavLists.map((item, i) => (
          <NavLink to={item.path} key={i} className="py-3 flex gap-3 hover:bg-neutral-200 duration-200 rounded-md px-6 h-fit"><div className="my-auto">{item.icon}</div> {item.title}</NavLink>
        ))}
      </div>
    </div>
  )
}
