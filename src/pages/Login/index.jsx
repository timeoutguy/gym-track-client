import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../../context/auth';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const { signed, signIn } = useContext(AuthContext);

  let history = useHistory();

  const handleSignIn = () => {
    signIn(values.email, values.password, 'gym');
    history.push('/dashboard');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col mx-auto justify-center p-4 lg:w-4/12 lg:mt-32">
      <h1 className="font-bold text-4xl text-dark_grey">Faça Login</h1>
      <h4 className="text-dark_grey font-light text-lg">
        Para visualizar o painel de ações é necessario fazer login
      </h4>
      <label className="text-dark_grey text-2xl font-light mt-6">E-mail</label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Digite seu endereço de e-mail"
      />

      <label for="password" className="text-dark_grey text-2xl font-light">
        Senha
      </label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Digite sua senha"
      />

      <div className="flex flex-col justify-center items-center">
        <button
          onClick={handleSignIn}
          className="bg-primary mt-8 p-2 rounded-full text-white font-bold w-1/2"
        >
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
