import React from 'react';

const Step = () => {
  return (
    <div className="block lg:flex lg:flex-col justify-center text-center lg:mx-8">
      <div className="bg-primary rounded-full w-10 h-10 mx-auto text-white mb-1">
        <span className="text-2xl">1</span>
      </div>
      <p className="font-bold">O ser instrutor te cadastra no sistema</p>
      <p className="bg-primary rounded-full w-16 h-1 mx-auto "></p>
      <p className="mt-4">
        Ao ingressar na academia o instrutor te cadastra no sistema e te informa
        as credencias para fazer login
      </p>
    </div>
  );
};
export default Step;
