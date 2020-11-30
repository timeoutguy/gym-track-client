import React from 'react';
import Instructors from '../../components/Instructors';
import Students from '../../components/Students/index';

const Dashboard = () => {
  return (
    <>
      <div className="flex md:px-32 md:py-6 pl-8 py-3">
        <button className="bg-primary mt-8 px-4 py-2 rounded-full text-white font-bold ">
          Adicionar Instrutor
        </button>
      </div>
      <div className="flex flex-col justify-center p-4 lg:px-40 ">
        <Instructors />
        <Instructors />
        <Instructors />
        <Instructors />
        <Instructors />
        <Instructors />
        <Instructors />
        <Instructors />
      </div>
    </>
  );
};
export default Dashboard;
