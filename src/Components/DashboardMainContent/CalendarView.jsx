// // import React from 'react';
// // import { calendarAppointments, appointmentCards } from '../../data/calendarData';

// // const daysInMonth = 31;

// // function CalendarView() {
// //   return (
// //     <main className="p-6 bg-gray-50 min-h-screen">
// //       <section className="bg-white p-6 rounded-xl shadow-md">
// //         <h3 className="text-xl font-semibold mb-4">
// //           Calendar - {calendarAppointments.month}
// //         </h3>

// //         {/* Calendar Grid */}
// //         <div className="grid grid-cols-7 gap-4 text-center mb-6">
// //           {Array.from({ length: daysInMonth }, (_, i) => {
// //             const day = i + 1;
// //             const times = calendarAppointments.daysWithAppointments[day] || [];
// //             return (
// //               <div
// //                 key={day}
// //                 className={`border p-2 rounded-lg ${
// //                   times.length ? 'bg-blue-50 border-blue-300' : 'bg-gray-50'
// //                 }`}
// //               >
// //                 <div className="font-semibold">{day}</div>
// //                 {times.map((time, idx) => (
// //                   <div key={idx} className="text-xs text-blue-600">
// //                     {time}
// //                   </div>
// //                 ))}
// //               </div>
// //             );
// //           })}
// //         </div>

// //         {/* Appointment Cards */}
// //         <div className="grid md:grid-cols-2 gap-4">
// //           {appointmentCards.map((card) => (
// //             <div key={card.id} className="bg-gray-100 p-4 rounded-md">
// //               <h4 className="font-semibold">{card.title}</h4>
// //               <p className="text-sm text-gray-700">{card.time}</p>
// //               <p className="text-xs text-gray-500">{card.date}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //     </main>
// //   );
// // }

// // export default CalendarView;




// import React from 'react'; 
// import { calendarAppointments, appointmentCards } from '../../data/calendarData';

// const daysInMonth = 31;

// function CalendarView() {
//   return (
//     <section className="bg-white p-6 rounded-xl shadow-md mb-0">
//       <h3 className="text-lg font-semibold mb-2">
//         Calendar - {calendarAppointments.month}
//       </h3>

//       {/* Calendar Grid */}
//       <div className="grid grid-cols-7 gap-4 text-center mb-2">
//         {Array.from({ length: daysInMonth }, (_, i) => {
//           const day = i + 1;
//           const times = calendarAppointments.daysWithAppointments[day] || [];
//           return (
//             <div
//               key={day}
//               className={`border p-2 rounded-md text-xs ${
//                 times.length ? 'bg-blue-50 border-blue-300' : 'bg-gray-50'
//               }`}
//             >
//               <div className="font-semibold">{day}</div>
//               {times.map((time, idx) => (
//                 <div key={idx} className="text-[10px] text-blue-600">
//                   {time}
//                 </div>
//               ))}
//             </div>
//           );
//         })}
//       </div>

//       {/* Appointment Cards */}
//       <div className="grid md:grid-cols-2 gap-3">
//         {appointmentCards.map((card) => (
//           <div key={card.id} className="bg-gray-100 p-2 rounded-md">
//             <h4 className="font-semibold text-sm">{card.title}</h4>
//             <p className="text-xs text-gray-700">{card.time}</p>
//             <p className="text-[10px] text-gray-500">{card.date}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default CalendarView;


import React from 'react'; 
import { calendarAppointments, appointmentCards } from '../../data/calendarData';

const daysInMonth = 31;
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // Weekdays array

function CalendarView() {
  return (
    <section className="bg-white p-5 rounded-xl shadow-md mb-0">
      <h3 className="text-lg font-semibold mb-2">
        Calendar - {calendarAppointments.month}
      </h3>

      {/* Weekday Names */}
      <div className="grid grid-cols-7 gap-6 text-center mb-1 text-xs font-semibold text-gray-600 select-none">
        {weekdays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 text-center mb-2">
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const times = calendarAppointments.daysWithAppointments[day] || [];
          return (
            <div
              key={day}
              className={`border p-2 rounded-md text-xs ${
                times.length ? 'bg-blue-50 border-blue-300' : 'bg-gray-50'
              }`}
            >
              <div className="font-semibold">{day}</div>
              {times.map((time, idx) => (
                <div key={idx} className="text-[10px] text-blue-600">
                  {time}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Appointment Cards */}
      <div className="grid md:grid-cols-2 gap-2">
        {appointmentCards.map((card) => (
          <div key={card.id} className="bg-gray-100 p-2 rounded-md">
            <h4 className="font-semibold text-sm">{card.title}</h4>
            <p className="text-xs text-gray-700">{card.time}</p>
            <p className="text-[10px] text-gray-500">{card.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CalendarView;
