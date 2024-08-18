import React from 'react';

interface DashboardHeaderProps {
  username: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ username }) => {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg mb-4">
      <h2 className="text-lg">Hi 👋 {username}, Welcome back</h2>
      <p className="mt-1 text-gray-400">Current tasks</p>
      <p className="mt-2 text-2xl">You have 3 tasks for today</p>
      <div className="mt-4 flex space-x-2 text-sm">
        <span className="px-2 py-1 bg-red-500 text-white rounded-full">High</span>
        <span>#shopping</span>
        <span>#renovation</span>
        <span>#planning</span>
      </div>
    </div>
  );
};

export default DashboardHeader;