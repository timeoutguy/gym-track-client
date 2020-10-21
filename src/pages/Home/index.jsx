import React from 'react';
import hero from '../../assets/hero.svg';
import Step from '../../components/Step';

const Home = () => {
  return (
    <>
      <div className="p-4 lg:px-24 lg:py-16 lg:flex items-center ">
        <div className=" lg:w-1/2 pr-8">
          <h1 className="text-3xl font-bold text-dark_grey">
            Facilite a forma como você treina
          </h1>
          <p className="text-dark_grey text-lg lg:text-2xl">
            Usando <b> Gym Track </b> você tem acesso as suas listar de
            exercicios para cada dia da semana e recebe mais informações sobre
            como eles atuam no seu corpo
          </p>
        </div>
        <div className="lg:ml-24">
          <img src={hero} alt="Pessoa malhando" />
        </div>
      </div>
      <div className="p-4 lg:px-24 flex flex-col lg:flex-row">
        <Step
          stepNumber={1}
          title="O seu instrutor te cadastra no sistema"
          description="Ao ingressar na academia o instrutor te cadastra no sistema e te informa as credencias para fazer login"
        />
        <Step
          stepNumber={2}
          title="Encontre sua lista de exercicio de forma pratica"
          description="Por meio do sistema você consegue visualizar as listas de exercicios para cada dia da semana e como os exercicios agem no seu corpo"
        />
        <Step
          stepNumber={3}
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque nunc non accumsan congue. Vivamus elementum scelerisque urna in ultrices."
        />
      </div>
    </>
  );
};

export default Home;
