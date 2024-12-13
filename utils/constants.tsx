import { LuUsers } from "react-icons/lu";
import { VscListFlat } from "react-icons/vsc";
import { AiOutlineBarChart } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi";
import { MdOutlineFastfood } from "react-icons/md";
import { BiMessageSquareDots } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import { DashboardCardType, NavListType } from "./index.d";

export const NavLists:NavListType[] = [
  // {
  //   title: "Dashboard",
  //   path: "/dashboard",
  //   icon: <LuLayoutDashboard />
  // },
  {
    title: "Order List",
    path: "/dashboard/orders",
    icon: <VscListFlat />
  },
  {
    title: "Customer",
    path: "/dashboard/customer",
    icon: <LuUsers />
  },
  {
    title: "Analytics",
    path: "/dashboard/analytics",
    icon: <AiOutlineBarChart />
  },
  {
    title: "Reviews",
    path: "/dashboard/reviews",
    icon: <HiOutlinePencil />
  },
  {
    title: "Foods",
    path: "/dashboard/foods",
    icon: <MdOutlineFastfood />
  },
  {
    title: "Chat",
    path: "/dashboard/chat",
    icon: <BiMessageSquareDots />
  },
  {
    title: "Wallet",
    path: "/dashboard/wallet",
    icon: <CiWallet />
  }
]

export const DashboardHomeCards: DashboardCardType[] = [
  {
    title: "Total Orders",
    image: "/svgs/order.svg",
    movement: "positive",
    subValue: "4%, (30 days)",
    value: 75
  },
  {
    title: "Total Delivered",
    image: "/svgs/delivery.svg",
    movement: "positive",
    subValue: "4%, (30 days)",
    value: 357
  },
  {
    title: "Total Cancelled",
    image: "/svgs/cancel.svg",
    movement: "negative",
    subValue: "25%, (30 days)",
    value: 65
  },
  {
    title: "Total Revenue",
    image: "/svgs/revenue.svg",
    movement: "negative",
    subValue: "12%, (30 days)",
    value: 1100000,
    money: true
  }
]

export const OrderListCards: DashboardCardType[] = [
  {
    title: "Total Orders",
    image: "/svgs/order.svg",
    value: 75
  },
  {
    title: "Delivered Orders",
    image: "/svgs/delivery.svg",
    value: 357
  },
  {
    title: "Pending Orders",
    image: "/svgs/cancel.svg",
    value: 65
  },
  {
    title: "Cancelled Orders",
    image: "/svgs/revenue.svg",
    value: 10,
  }
]
