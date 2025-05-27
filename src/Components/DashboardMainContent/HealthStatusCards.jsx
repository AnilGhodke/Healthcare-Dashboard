import React from 'react';
import heartIcon from '../../assets/icons/heart.jpg';
import teethIcon from '../../assets/icons/teeth.jpg';
import boneIcon from '../../assets/icons/bone.jpg';

const cards = [
  {
    id: 1,
    icon: heartIcon,
    label: 'Heart',
    checked: '2 May 2025',
    progress: 'w-3/4',
    color: 'bg-blue-500',
  },
  {
    id: 2,
    icon: teethIcon,
    label: 'Teeth',
    checked: '15 May 2025',
    progress: 'w-1/2',
    color: 'bg-green-500',
  },
  {
    id: 3,
    icon: boneIcon,
    label: 'Bone',
    checked: '10 May 2025',
    progress: 'w-2/3',
    color: 'bg-purple-500',
  },
];

const HealthCareStatus = () => {
  return (
    <div className="flex flex-col gap-6 flex-1 px-4 py-2 bg-gray-50 rounded-lg">
      {cards.map(({ id, icon, label, checked, progress, color }) => (
        <div
          key={id}
          className="bg-white rounded-xl shadow-md p-5 flex items-start gap-4 transition hover:shadow-lg"
        >
          <img
            src={icon}
            alt={label}
            className="w-12 h-12 rounded-full object-cover border border-gray-200"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">{label}</h3>
            <p className="text-gray-500 text-sm mb-2">Last checked: {checked}</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className={`${color} h-2 rounded-full ${progress}`}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthCareStatus;
