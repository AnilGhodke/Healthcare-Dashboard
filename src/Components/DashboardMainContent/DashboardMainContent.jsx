import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';  // added
import ActivityFeed from './ActivityFeed';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';

const DashboardMainContent = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full">
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col gap-6 w-full max-w-full overflow-hidden">
          {/* Anatomy + Health Status side by side */}
          <div className="flex gap-6 w-full max-w-full overflow-hidden">
            <AnatomySection />
            <HealthStatusCards/>
          </div>

          {/* Activity Feed below */}
          <ActivityFeed />
        </div>

        {/* Right Column: Calendar and Schedule */}
        <div className="lg:col-span-2 flex flex-col gap-6 w-full max-w-full overflow-hidden">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
