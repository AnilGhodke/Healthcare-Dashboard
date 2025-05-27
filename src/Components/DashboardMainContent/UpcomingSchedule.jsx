import React from 'react';
import { upcomingAppointments } from '../../data/upcomingAppointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const iconMap = {
  Cardiologist: '❤️',
  Dentist: '🦷',
  Neurologist: '🧠',
  Ophthalmologist: '👁️',
};

const UpcomingSchedule = () => {
  return (
    <section className="bg-white p-3 rounded-xl shadow-lg mt-2 max-w-full">
      <h3 className="text-2xl font-semibold mb-3 text-gray-800">The Upcoming Schedule</h3>
      
      <div className="space-y-8">
        {upcomingAppointments.map((group) => (
          <div key={group.id}>
            <h4 className="text-lg font-semibold text-gray-700 mb-4 border-b border-gray-200 pb-2">
              {group.day}
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {group.appointments.map((appt) => (
                <SimpleAppointmentCard
                  key={appt.id}
                  icon={iconMap[appt.title] || '🩺'}
                  title={appt.title}
                  time={appt.time}
                  doctor={appt.doctor}
                  location={appt.location}
                  status={appt.status}
                  reminder={appt.reminder}
                  onReschedule={() => alert(`Reschedule ${appt.title}`)}
                  onCancel={() => alert(`Cancel ${appt.title}`)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingSchedule;
