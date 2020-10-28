import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupGym from '../../components/SignupGym';

const Signup = () => {
  const initialState = {
    type: 'academia',
  };

  const [type, setType] = useState(initialState.type);

  return (
    <div className="flex flex-col mx-auto justify-center p-4 lg:w-4/12 lg:mt-32">
      <h1 className="font-bold text-4xl text-dark_grey">Faça o seu cadastro</h1>
      <h4 className="text-dark_grey font-light text-lg">
        e tenha acesso a nossa plataforma
      </h4>
      <label className="text-dark_grey text-2xl font-light mt-6">
        Você quer se registrar como?
      </label>
      <select
        name="type"
        id="type"
        className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="academia">Academia</option>
        <option value="instrutor">Instrutor</option>
        <option value="aluno">Aluno</option>
      </select>
      {type === 'academia' && <SignupGym />}
      <div className="flex flex-col justify-center items-center ">
        <button
          type="submit"
          className="bg-primary mt-8 p-2 rounded-full text-white font-bold w-1/2 hover:opacity-75 focus:outline-none"
        >
          Cadastrar
        </button>
        <p className="font-light mt-4">
          Já possui uma conta? Faça login{' '}
          <Link to="/cadastro" className="text-primary font-normal">
            clicando aqui
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
