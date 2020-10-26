import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex flex-col mx-auto justify-center p-4 lg:w-4/12 lg:mt-32">
      <h1 className="font-bold text-4xl text-dark_grey">Faça Login</h1>
      <h4 className="text-dark_grey font-light text-lg">
        Para visualizar o painel de ações é necessario fazer login
      </h4>
      <label className="text-dark_grey text-2xl font-light mt-6">E-mail</label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="text"
        name="email"
        placeholder="Digite seu endereço de e-mail"
      />

      <label for="password" className="text-dark_grey text-2xl font-light">
        Senha
      </label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="password"
        name="password"
        placeholder="Digite sua senha"
      />

      <div className="flex flex-col justify-center items-center">
        <button className="bg-primary mt-8 p-2 rounded-full text-white font-bold w-1/2">
          Entrar
        </button>
        <p className="font-light mt-4">
          Ainda não tem uma conta? Faça seu cadastro{' '}
          <Link to="/cadastro" className="text-primary font-normal">
            clicando aqui
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
