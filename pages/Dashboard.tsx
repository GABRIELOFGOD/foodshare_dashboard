import { Sidebar } from '../components/dashboard/Sidebar'
import { DashboardHeader } from '../components/dashboard/DashboardHeader'
import { DashboardPostHeader } from "../components/dashboard/DashboardPostHeader";
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useStore from '../utils/zustands';

export const Dashboard = () => {

  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState('');

  const { user, company } = useStore()

  useEffect(() => {
    const path = location.pathname.split('/').filter(Boolean).pop() || '';
    setCurrentRoute(path);
  }, [location]);
  
  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar />
      <div className='md:flex-[5] bg-[#F3F2F7] px-10 py-6'>
        <DashboardHeader />
        <DashboardPostHeader page={currentRoute} company={company} role={user} />
        <Outlet />
      </div>
    </div>
  )
}
