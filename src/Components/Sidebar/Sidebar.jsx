import React from 'react';
import {
  Home,
  Clock,
  CalendarDays,
  CalendarCheck,
  BarChart2,
  MessageSquare,
  LifeBuoy,
  Settings,
} from 'lucide-react';

// All nav links except "Setting"
const navLinks = [
  { id: 'dashboard', label: 'Dashboard', icon: Home, section: 'general' },
  { id: 'history', label: 'History', icon: Clock, section: 'general' },
  { id: 'calendar', label: 'Calendar', icon: CalendarDays, section: 'general' },
  { id: 'appointments', label: 'Appointments', icon: CalendarCheck, section: 'general' },
  { id: 'statistics', label: 'Statistics', icon: BarChart2, section: 'general' },
  { id: 'chat', label: 'Chat', icon: MessageSquare, section: 'tools' },
  { id: 'support', label: 'Support', icon: LifeBuoy, section: 'tools' },
];

// Setting is handled separately
const settingLink = { id: 'setting', label: 'Setting', icon: Settings };

const Sidebar = ({ activeTab, setActiveTab }) => {
  const generalLinks = navLinks.filter(link => link.section === 'general');
  const toolsLinks = navLinks.filter(link => link.section === 'tools');

  return (
    <aside className="w-64 p-6 bg-white shadow-lg min-h-screen flex flex-col justify-between">
      <div>
        {/* General Section */}
        <h2 className="mb-4 text-lg font-semibold text-gray-700">General</h2>
        <ul className="space-y-2 mb-6">
          {generalLinks.map(({ id, label, icon: Icon }) => (
            <li
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors duration-200
                ${activeTab === id ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </li>
          ))}
        </ul>

        {/* Tools Section */}
        <h2 className="mb-4 text-lg font-semibold text-gray-700">Tools</h2>
        <ul className="space-y-2">
          {toolsLinks.map(({ id, label, icon: Icon }) => (
            <li
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors duration-200
                ${activeTab === id ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Setting at Bottom */}
      <div className="mt-6 border-t pt-4">
        <li
          onClick={() => setActiveTab(settingLink.id)}
          className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors duration-200
            ${activeTab === settingLink.id ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
        >
          <settingLink.icon className="w-5 h-5" />
          <span>{settingLink.label}</span>
        </li>
      </div>
    </aside>
  );
};

export default Sidebar;
