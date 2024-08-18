import React from 'react';

interface DashboardHeaderProps {
  username: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ username }) => {
  return (
    <div >
      <h2 className="text-lg ">Hi 👋 {username}, Welcome back</h2>
      <div className="p-6 bg-green-200 text-white rounded-lg mb-4 mt-4">
        <p className="mt-1 text-gray-600 font-bold">Current tasks</p>
        <p className="mt-2 text-2xl text-gray-600">You have 3 <span className="px-2 py-1 bg-white text-red-500 rounded-full">High</span> tasks for today</p>
        <div className="mt-4 flex space-x-2 text-sm text-gray-600 flex-grow border-t border-gray-400">
          <span>#shopping</span>
          <span>#renovation</span>
          <span>#planning</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;