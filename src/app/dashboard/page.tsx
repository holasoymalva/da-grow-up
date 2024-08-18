import React from 'react';
import DashboardHeader from '../component/DashboardHeader';
import TaskCard from '../component/TaskCard';
import ProgressStatistics from '../component/ProgressStatistics';

interface Task {
  date: string;
  title: string;
  description: string;
  time: string;
}

const tasks: Task[] = [
  {
    date: 'Fri 11',
    title: 'Webinar',
    description: 'Implementation of habits.',
    time: '3:00 PM',
  },
  {
    date: 'Sat 12',
    title: 'Morning Run',
    description: '5k run in the park.',
    time: '7:00 AM',
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <DashboardHeader username="Martin" />
      <ProgressStatistics />
      <div className="mt-6">
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;