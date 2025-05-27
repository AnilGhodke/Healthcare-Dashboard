// import React from "react";
// import anatomyImg from '../../assets/anatomy.png';


// const AnatomySection = () => {
//   return (
    
//     <div className="flex gap-8">
      
//       {/* Left: Anatomy Image with overlays */}
//       <div className="relative w-96 h-[480px] border border-gray-200 rounded-lg overflow-hidden">
//         <img
//           src={anatomyImg}
//           alt="Anatomy"
//           className="object-contain w-full h-full"
//         />

//         {/* Overlay labels */}
//         <div className="absolute top-35 left-27 bg-green-100 text-green-800 px-3 py-1 rounded shadow-md text-sm font-semibold">
//           Healthy Heart
//         </div>
//         <div className="absolute top-83 left-2 bg-green-100 text-green-800 px-3 py-1 rounded shadow-md text-sm font-semibold">
//           Healthy Leg
//         </div>
//       </div>

//       {/* Right: Health Indicator Cards */}
//       <div className="flex flex-col gap-6 w-80">
//         <div className="bg-white rounded-lg shadow p-4">
//           <h3 className="font-semibold text-lg mb-2">Lungs</h3>
//           <p className="text-gray-500 text-sm mb-3">Last checked: 2 May 2025</p>
//           <div className="w-full bg-gray-200 rounded-full h-2">
//             <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow p-4">
//           <h3 className="font-semibold text-lg mb-2">Teeth</h3>
//           <p className="text-gray-500 text-sm mb-3">Last checked: 15 May 2025</p>
//           <div className="w-full bg-gray-200 rounded-full h-2">
//             <div className="bg-blue-500 h-2 rounded-full w-1/2"></div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow p-4">
//           <h3 className="font-semibold text-lg mb-2">Bone</h3>
//           <p className="text-gray-500 text-sm mb-3">Last checked: 10 May 2025</p>
//           <div className="w-full bg-gray-200 rounded-full h-2">
//             <div className="bg-blue-500 h-2 rounded-full w-2/3"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnatomySection;


import React from "react";
import anatomyImg from '../../assets/anatomy.png';

const AnatomySection = () => {
  return (
    <div className="relative w-[300px] h-[480px] border border-gray-200 rounded-xl overflow-hidden shadow">
      <img
        src={anatomyImg}
        alt="Anatomy"
        className="object-contain w-full h-full"
      />

      {/* Overlay Labels */}
      <div className="absolute top-28 left-40 bg-green-100 text-green-800 px-3 py-1 rounded shadow text-sm font-semibold">
        Healthy Heart
      </div>
      <div className="absolute top-90 left-5 bg-green-100 text-green-800 px-3 py-1 rounded shadow text-sm font-semibold">
        Healthy Leg
      </div>
    </div>
  );
};

export default AnatomySection;

