import { HeaderNotificationsProps } from "../utils"

export const HeaderNotifications = ({ icon, color, notification }: HeaderNotificationsProps) => {
  return (
    <div className={`relative rounded-md ${color == "red" ? "bg-quaternary" : color == "purple" ? "bg-quinary" : "bg-tertiary" } bg-opacity-15 h-12 w-12 flex justify-center items-center`}>
      <div className={`${color == "red" ? "text-quaternary" : color == "purple" ? "text-quinary" : "text-tertiary" }`}>{icon}</div>
      <div className={`absolute -top-2 -right-2 ${color == "red" ? "bg-quaternary" : color == "purple" ? "bg-quinary" : "bg-tertiary" } text-white text-xs w-5 h-5 rounded-full flex justify-center items-center`}>{notification}</div>
    </div>
  )
}
