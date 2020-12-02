import React from 'react';
import hero from '../../assets/hero.svg';
import Step from '../../components/Step';

const Home = () => {
  return (
    <>
      <div className="p-4 flex flex-col items-center justify-center lg:px-24 lg:py-16 lg:flex-row">
        <div className=" lg:w-1/2 pr-8">
          <h1 className="text-3xl font-bold text-dark_grey">
            Facilite a forma como gere sua academia
          </h1>
          <p className="text-dark_grey text-2xl">
            Usando <b> Gym Track </b> você tem disponibilidade para gerir seus
            funcionarios e seus clientes, tendo acesso a todos os dados deles
            facilitando a comunicação instrutor cliente
          </p>
        </div>
        <div className="lg:ml-24">
          <img src={hero} alt="Pessoa malhando" />
        </div>
      </div>
      <div className="p-4 lg:px-24 flex flex-col lg:flex-row">
        <Step
          stepNumber={1}
          title="Você gere seus instrutores"
          description="O gerente da academia tem acesso para gerir instrutores com seus dados no sistema"
        />
        <Step
          stepNumber={2}
          title="O seu instrutor te cadastra no sistema"
          description="Ao ingressar na academia o instrutor te cadastra no sistema e fica com suas informações para casos de emergência"
        />
        <Step
          stepNumber={3}
          title="Implementações futuras"
          description="No futuro nosso sistema irá fornecer explicações detalhadas sobre cada exercício para seus alunos, fazendo com que ele possa montar sua série em casa"
        />
      </div>
    </>
  );
};

export default Home;
