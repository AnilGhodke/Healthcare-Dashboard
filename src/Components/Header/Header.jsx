import React from 'react';
import avatar from '../../assets/avatar.png';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5 shadow bg-white">
      {/* Heading on the left */}
      <div className="text-2xl font-bold text-blue-700">
        Health<span className="text-black">care.</span>
      </div>

      {/* Search Input in the middle */}
      <input
        className="px-4 py-2 text-sm bg-gray-100 rounded-md w-1/3"
        type="text"
        placeholder="Search"
        disabled
      />

      {/* Right-side icons */}
      <div className="flex items-center space-x-4">
        <span className="text-xl">🔔</span>
        <img src={avatar} alt="User" className="w-8 h-8 rounded-full" />
        <button className="text-2xl font-bold text-white bg-blue-600 rounded-full w-8 h-8">＋</button>
      </div>
    </header>
  );
};

export default Header;
