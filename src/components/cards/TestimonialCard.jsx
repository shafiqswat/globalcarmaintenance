import React from 'react';
import { StarIcon } from '../../assets/svg';

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="flex mr-2">
          {renderStars(testimonial.rating)}
        </div>
        <span className="text-sm text-gray-500">
          {testimonial.rating}/5
        </span>
      </div>
      <p className="text-gray-700 mb-4 leading-relaxed">
        "{testimonial.comment}"
      </p>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.date}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
