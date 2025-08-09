import React from 'react';

const StatsCard = ({ stat }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-4xl font-bold text-blue-600 mb-2">
        {stat.number}
      </div>
      <div className="text-gray-600 font-medium">
        {stat.label}
      </div>
    </div>
  );
};

export default StatsCard;
