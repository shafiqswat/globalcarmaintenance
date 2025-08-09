/** @format */

import React from "react";
import * as Icons from "../../assets/svg";

const ServiceCard = ({ service }) => {
  const IconComponent = Icons[service.icon];

  return (
    <div className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100'>
      <div className='flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto'>
        {IconComponent && <IconComponent className='w-8 h-8 text-blue-600' />}
      </div>
      <h3 className='text-xl font-semibold text-gray-800 mb-3 text-center'>
        {service.title}
      </h3>
      <p className='text-gray-600 text-center leading-relaxed'>
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;
