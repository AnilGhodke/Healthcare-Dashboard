import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import './index.css';
import DashboardMainContent from './Components/DashboardMainContent/DashboardMainContent';
import CalendarView from './Components/DashboardMainContent/CalendarView';
import ActivityFeed from './Components/DashboardMainContent/ActivityFeed';
import HealthStatusCards from './Components/DashboardMainContent/HealthStatusCards';
import UpcomingSchedule from './Components/DashboardMainContent/UpcomingSchedule';
function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen font-sans bg-[#f5f9ff]">
      <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <Header/>
        {activeTab === 'dashboard' && <DashboardMainContent />}
        {activeTab === 'calendar' && <CalendarView />}
        {activeTab === 'history' && <HealthStatusCards/>}
        {activeTab === 'appointments' && <UpcomingSchedule/>}
        {activeTab === 'statistics' && <ActivityFeed/>}
        {/* Add more conditions if needed */}
      </div>
    </div>
  );
}

export default App;
