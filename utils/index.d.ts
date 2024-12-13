import { ReactNode } from 'react';

interface CreateState {
  user: string;
  company: string;
  setUser: (user: string) => void;
  setCompany: (company: string) => void;
}

export interface NavListType {
  title: string;
  icon: ReactNode;
  path: string;
}

export interface DashboardCardType {
  title: string;
  image: string;
  value: number;
  subValue?: string;
  movement?: "positive" | "negative";
  money?: boolean;
}

export interface HeaderNotificationsProps {
  icon: ReactNode,
  color: string,
  notification?: number
}

export interface Route {
  path: string;
  element: ReactNode;
  children?: Route[];
}

export interface DoughtnutChartProps {
  color: "red" | "green" | "blue";
  percentage: number;
  completeLabel: string;
  remainingLabel: string;
}

export interface RevenueBoardProps {
  currentYear: number;
  previousYear: number;
}

export interface OrdersType {
  orderId: string;
  orderDate: string;
  customerName: string;
  price: number;
  item: string;
  status: string;
  paymentMethod: string;

}
