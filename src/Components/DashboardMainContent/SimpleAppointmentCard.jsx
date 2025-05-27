/import React from 'react';

const SimpleAppointmentCard = ({ title, time, doctor, status, icon, appointmentType }) => {
  // Badge color based on status
  const statusColor = {
    Upcoming: 'bg-green-100 text-green-700',
    Completed: 'bg-gray-100 text-gray-700',
    Cancelled: 'bg-red-100 text-red-700',
    Rescheduled: 'bg-yellow-100 text-yellow-700',
  }[status] || 'bg-gray-100 text-gray-700';

  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm flex items-start justify-between text-left">
      {/* Icon */}
      <div className="text-2xl mr-3">{icon}</div>

      {/* Content */}
      <div className="flex-1">
        <h4 className="font-semibold text-sm">{title}</h4>
        {doctor && <p className="text-gray-600 text-xs">Dr. {doctor}</p>}
        <p className="text-gray-500 text-xs">{time}</p>
        {appointmentType && <p className="text-blue-500 text-xs mt-1">{appointmentType}</p>}
      </div>

      {/* Right Side: Status + Buttons */}
      <div className="flex flex-col items-end gap-1">
        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColor}`}>
          {status}
        </span>
        <div className="flex gap-1 mt-1">
          {status === 'Upcoming' && (
            <>
              <button className="text-[10px] px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 text-gray-700">
                Reschedule
              </button>
              <button className="text-[10px] px-2 py-1 bg-red-100 rounded hover:bg-red-200 text-red-700">
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
