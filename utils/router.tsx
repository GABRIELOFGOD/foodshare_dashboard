import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../src/Layout";
import { Dashboard } from "../pages/Dashboard";
import { DashboardHome } from "../pages/dashboard/DashboardHome";
import { OrderList } from "../pages/dashboard/OrderList";
import { Customer } from "../pages/dashboard/Customer";
import { Analytics } from "../pages/dashboard/Analytics";
import { Reviews } from "../pages/dashboard/Reviews";
import { Food } from "../pages/dashboard/Food";
import { Chat } from "../pages/dashboard/Chat";
import { Wallet } from "../pages/dashboard/Wallet";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <DashboardHome />
          },
          {
            path: "orders",
            element: <OrderList />
          },
          {
            path: "customer",
            element: <Customer />
          },
          {
            path: "analytics",
            element: <Analytics />
          },
          {
            path: "reviews",
            element: <Reviews />
          },
          {
            path: "foods",
            element: <Food />
          },
          {
            path: "chat",
            element: <Chat />
          },
          {
            path: "wallet",
            element: <Wallet />
          }

          // TODO: add settings and gift routes
        ]
      }
    ]
  }
]);