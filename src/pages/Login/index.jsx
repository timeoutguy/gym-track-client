import React from 'react';

const Login = () => {
  return (
    <>
      <div className="lg:flex items-center justify-start lg:px-64 lg:py-16 lg:flex-col">
        <h1 className="lg:object-center font-extrabold text-4xl p">Nojin</h1>
        <h4 className="text-gray-600">
          Para visualizar o painel de ações é necessario fazer Nojin
        </h4>
      </div>
      <div
        for="email"
        className="lg:flex items-center justify-center lg:px-64  lg:flex-col mb-2"
      >
        <label className="text-black text-2xl">E-mail</label>
        <input
          className="border-gray-600 border-2 rounded-lg h-10 w-4/12 text-black text-justify placeholder-gray-900 pl-3 mt-2"
          type="text"
          name="email"
          placeholder="digite seu endereço de e-mail"
        />
      </div>
      <div className="lg:flex items-center lg:px-64  lg:flex-col">
        <label for="password" className="text-black text-2xl">
          Senha
        </label>
        <input
          className="border-gray-600 border-2 rounded-lg h-10 w-4/12 text-black placeholder-gray-900 pl-3 mt-2 mb-10"
          type="text"
          name="password"
          placeholder="digite sua senha"
        />
      </div>
      <div className="flex items-center justify-center">
        <button className="mr-4 bg-primary py-2 px-4 rounded-full text-white font-bold placeholder-gray-600 mb-2">
          Entrar
        </button>
      </div>
      <div className="flex items-center justify-center">
        <h4 className="font-bold">
          Ainda não tem uma conta? Faça seu cadastro{' '}
          <a href="#" className="text-primary font-bold">
            clicando aqui
          </a>
        </h4>
      </div>
    </>
  );
};

export default Login;
