import { ToastContainer } from "material-react-toastify"
import { Outlet } from "react-router-dom"
import 'material-react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  return (
    <div>
      <ToastContainer />
      <Outlet />
    </div>
  )
}
