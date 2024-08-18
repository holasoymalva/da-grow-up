import React from 'react';

interface Task {
  date: string;
  title: string;
  description: string;
  time: string;
}

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="text-gray-700">{task.date}</p>
          <p className="text-black text-lg font-semibold">{task.title}</p>
        </div>
        <div className="text-gray-400 text-sm">{task.time}</div>
      </div>
      <p className="text-gray-600">{task.description}</p>
    </div>
  );
};

export default TaskCard;