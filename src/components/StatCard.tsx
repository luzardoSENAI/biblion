
import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  percentage?: string;
}

const StatCard = ({ title, value, icon, percentage }: StatCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-600">{title}</h3>
          <p className="text-3xl font-bold text-library-darkMaroon">{value}</p>
          {percentage && (
            <p className="text-xs text-gray-500">{percentage}</p>
          )}
        </div>
        <div className="w-12 h-12 rounded-full bg-library-maroon text-white flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
