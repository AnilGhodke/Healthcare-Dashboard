import React from 'react';

const DashboardOverview = () => {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-6">Overview</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Example overview cards */}
        <div className="bg-blue-50 rounded-lg p-4 shadow-sm">
          <h4 className="text-sm font-medium text-blue-600">Patients</h4>
          <p className="text-2xl font-bold">1,245</p>
          <p className="text-xs text-gray-500">Total registered patients</p>
        </div>

        <div className="bg-green-50 rounded-lg p-4 shadow-sm">
          <h4 className="text-sm font-medium text-green-600">Appointments</h4>
          <p className="text-2xl font-bold">345</p>
          <p className="text-xs text-gray-500">Scheduled this month</p>
        </div>

        <div className="bg-yellow-50 rounded-lg p-4 shadow-sm">
          <h4 className="text-sm font-medium text-yellow-600">Doctors</h4>
          <p className="text-2xl font-bold">58</p>
          <p className="text-xs text-gray-500">Active medical staff</p>
        </div>

        <div className="bg-red-50 rounded-lg p-4 shadow-sm">
          <h4 className="text-sm font-medium text-red-600">Alerts</h4>
          <p className="text-2xl font-bold">4</p>
          <p className="text-xs text-gray-500">Pending issues</p>
        </div>
      </div>
    </section>
  );
};

export default DashboardOverview;
