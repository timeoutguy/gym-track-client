import React from 'react';
import hero from '../../assets/hero.svg';

const Home = () => {
  return (
    <div className="p-4 lg:px-24 lg:py-16 lg:flex items-center ">
      <div className=" lg:w-1/2 pr-8">
        <h1 className="text-3xl font-bold text-dark_grey">
          Facilite a forma como você treina
        </h1>
        <p className="text-dark_grey text-lg lg:text-2xl">
          Usando <b> Gym Track </b> você tem acesso as suas listar de exercicios
          para cada dia da semana e recebe mais informações sobre como eles
          atuam no seu corpo
        </p>
      </div>
      <div className="lg:ml-24">
        <img src={hero} alt="Pessoa malhando" />
      </div>
    </div>
  );
};

export default Home;
