import { DashboardCard } from "../../components/dashboard/DashboardCard"
import { OrderListCards } from "../../utils/constants"
import useFetchOrders from "../../hooks/orderHook";
import { Loader } from "../../utils/Loader";
import { toast } from "material-react-toastify";

export const OrderList = () => {

  const { orders, loading, error } = useFetchOrders();

  function formatOrderDate(orderDateString: string) {
    const orderDate = new Date(orderDateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
  
    if (orderDate.toDateString() === today.toDateString()) {
      return "Today";
    } else if (orderDate.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else {
      return orderDate.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        weekday: "short",
      });
    }
  }

  if (loading) {
    return (
      <div className="justify-center items-center flex h-[200px] w-full">
        <Loader />
      </div>
    );
  }

  if (error) {
    toast.error("An error occured while loading your orders", {
      position: "top-right",
      draggable: true,
    });
    
    return (
      <div className="justify-center text-lg items-center flex h-[200px] w-full">
        <p>An <span className="text-red-500">Error 😪</span> occur while loading your orders, please <button onClick={location.reload} className="text-primary underline font-semibold cursor-pointer">Refresh</button> this page</p>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col gap-5 overflow-auto">
      <div className="flex gap-5 justify-between">
        {OrderListCards.map((card, index) => (
          <DashboardCard key={index} {...card} />
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <table>
          <thead className="text-left bg-primary bg-opacity-20">
            <tr>
              <th className="py-2 pl-2">Order ID</th>
              <th>Date</th>
              <th>Customer Name</th>
              <th>Price</th>
              <th>Item</th>
              <th>status</th>
              <th>Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr className="pl-2" key={index}>
                <td>{order.orderId}</td>
                <td>{formatOrderDate(order.orderDate)}</td>
                <td>{order.customerName}</td>
                <td>{order.price}</td>
                <td>{order.item}</td>
                <td>{order.status}</td>
                <td>{order.paymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
