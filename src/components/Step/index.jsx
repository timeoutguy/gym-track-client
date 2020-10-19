import React from 'react';

const Step = ({ stepNumber, title, description }) => {
  return (
    <div className="lg:flex lg:flex-col justify-center text-center mb-4 lg:mx-8">
      <div className="bg-primary rounded-full w-10 h-10 mx-auto text-white mb-1">
        <span className="text-2xl">{stepNumber}</span>
      </div>
      <p className="font-bold">{title}</p>
      <div className="bg-primary rounded-full w-16 h-1 mx-auto "></div>
      <p className="mt-4">{description}</p>
    </div>
  );
};
export default Step;
