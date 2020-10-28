import React, { useState } from 'react';
import Cep from 'react-simple-cep-mask';
import PhoneInput from 'react-phone-number-input/input';

const SignupGym = () => {
  const [cep, setCep] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <>
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
    </>
  );
};

export default SignupGym;
