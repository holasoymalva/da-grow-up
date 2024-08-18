import React from 'react';

const ProgressStatistics: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-gray-700 text-xl font-semibold">Statistics</h3>
      <p className="mt-4 text-gray-900 text-2xl">Your overall score is above average</p>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <p className="text-gray-500">Growth: <span className="text-green-500">+15%</span></p>
          <p className="text-gray-500">Best Result: <span className="font-semibold">5/6 Tasks</span></p>
        </div>
        <div>
          <p className="text-gray-700 text-sm">Your progress</p>
          <p className="text-3xl font-bold">78%</p>
        </div>
      </div>
      <div className="mt-4 flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Weekly</button>
        <button className="px-4 py-2 bg-gray-300 text-black rounded-lg">Monthly</button>
      </div>
    </div>
  );
};

export default ProgressStatistics;