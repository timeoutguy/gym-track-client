import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cep from 'react-simple-cep-mask';
import PhoneInput from 'react-phone-number-input/input';

const Signup = () => {
  const [cep, setCep] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className="flex flex-col mx-auto justify-center p-4 lg:w-4/12 lg:mt-16">
      <h1 className="font-bold text-4xl text-dark_grey">Faça o seu cadastro</h1>
      <h4 className="text-dark_grey font-light text-lg">
        e tenha acesso a nossa plataforma
      </h4>
      <label className="text-dark_grey text-2xl font-light mt-6">E-mail</label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="text"
        name="email"
        placeholder="Digite seu endereço de e-mail"
      />
      <label for="password" className="text-dark_grey text-2xl font-light mt-6">
        Senha
      </label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="password"
        name="password"
        placeholder="Digite sua senha"
      />
      <label className="text-dark_grey text-2xl font-light mt-6">
        Nome da academia
      </label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="text"
        name="name"
        placeholder="Digite o nome da sua academia"
      />
      <label className="text-dark_grey text-2xl font-light mt-6">Bairro</label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="text"
        name="neighborhood "
        placeholder="Digite o bairro da academia"
      />
      <label className="text-dark_grey text-2xl font-light mt-6 w">Rua</label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="text"
        name="street"
        placeholder="Digite a rua da academia"
      />
      <label className="text-dark_grey text-2xl font-light mt-6 w">
        Número
      </label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="number"
        name="number"
        placeholder="Digite o bairro da academia"
      />
      <label className="text-dark_grey text-2xl font-light mt-6 w">
        Complemento
      </label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="text"
        name="street"
        placeholder="Digite um complemento da academia"
      />
      <label className="text-dark_grey text-2xl font-light mt-6 w">CEP</label>
      <Cep
        value={cep}
        onChange={(cep) => setCep(cep)}
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        name="cep"
        placeholder="Digite o cep da academia"
      />
      <label className="text-dark_grey text-2xl font-light mt-6 w">
        Cidade
      </label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="text"
        name="city"
        placeholder="Digite a cidade da academia"
      />
      <label className="text-dark_grey text-2xl font-light mt-6 w">
        Telefone
      </label>
      <PhoneInput
        country="BR"
        value={phone}
        onChange={setPhone}
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        placeholder="Digite o telefone da academia"
      />
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
