import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cep from 'react-simple-cep-mask';
import PhoneInput from 'react-phone-number-input/input';

const Signup = () => {
  const initialState = {
    email: '',
    password: '',
    name: '',
    neighborhood: '',
    street: '',
    number: 0,
    complement: '',
    cep: '',
    city: '',
    phone: '',
  };

  const [email, setEmail] = useState(initialState.email);
  const [password, setPassword] = useState(initialState.password);
  const [name, setName] = useState(initialState.name);
  const [neighborhood, setNeighborhood] = useState(initialState.neighborhood);
  const [street, setStreet] = useState(initialState.street);
  const [number, setNumber] = useState(initialState.number);
  const [complement, setComplement] = useState(initialState.complement);
  const [cep, setCep] = useState(initialState.cep);
  const [city, setCity] = useState(initialState.city);
  const [phone, setPhone] = useState(initialState.phone);

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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label for="password" className="text-dark_grey text-2xl font-light mt-6">
        Senha
      </label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="password"
        name="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label className="text-dark_grey text-2xl font-light mt-6">
        Nome da academia
      </label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="text"
        name="name"
        placeholder="Digite o nome da sua academia"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className="text-dark_grey text-2xl font-light mt-6">Bairro</label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="text"
        name="neighborhood "
        placeholder="Digite o bairro da academia"
        value={neighborhood}
        onChange={(e) => setNeighborhood(e.target.value)}
      />
      <label className="text-dark_grey text-2xl font-light mt-6 w">Rua</label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="text"
        name="street"
        placeholder="Digite a rua da academia"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      <label className="text-dark_grey text-2xl font-light mt-6 w">
        Número
      </label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="number"
        name="number"
        placeholder="Digite o bairro da academia"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <label className="text-dark_grey text-2xl font-light mt-6 w">
        Complemento
      </label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="text"
        name="street"
        placeholder="Digite um complemento da academia"
        value={complement}
        onChange={(e) => setComplement(e.target.value)}
      />
      <label className="text-dark_grey text-2xl font-light mt-6 w">CEP</label>
      <Cep
        value={cep}
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        name="cep"
        placeholder="Digite o cep da academia"
        onChange={(cep) => setCep(cep)}
      />
      <label className="text-dark_grey text-2xl font-light mt-6 w">
        Cidade
      </label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="text"
        name="city"
        placeholder="Digite a cidade da academia"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <label className="text-dark_grey text-2xl font-light mt-6 w">
        Telefone
      </label>
      <PhoneInput
        country="BR"
        value={phone}
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        placeholder="Digite o telefone da academia"
        onChange={setPhone}
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
