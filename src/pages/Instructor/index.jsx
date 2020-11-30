import React from 'react';
import Instructors from '../../components/Instructors';
import { Link } from 'react-router-dom';
import Students from '../../components/Students/index';

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-between md:px-32 md:py-6 pl-8 py-3">
        <Link
          to="/newclient"
          className="bg-primary mt-8 px-4 py-2 rounded-full text-white font-bold "
        >
          Adicionar Instrutor
        </Link>
        <Link to="/dashboard" className="mt-12 text-primary font-bold">
          Visualizar alunos
        </Link>
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
