import React from 'react';

const Step = ({ stepNumber, title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-4 lg:px-6 mb-auto">
      <div className="bg-primary rounded-full w-10 h-10 text-white mb-1">
        <span className="text-2xl">{stepNumber}</span>
      </div>
      <p className="font-bold text-dark_grey text-xl">{title}</p>
      <div className="bg-primary rounded-full w-16 h-1 my-2"></div>
      <p className="text-dark_grey text-xl">{description}</p>
    </div>
  );
};
export default Step;
