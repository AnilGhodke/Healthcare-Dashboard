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

