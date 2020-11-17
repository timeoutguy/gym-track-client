import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cep from 'react-simple-cep-mask';
import PhoneInput from 'react-phone-number-input/input';

const NewClient = () => {
  const initialState = {
    name: '',
    sex: 'masculino',
    neighborhood: '',
    street: '',
    number: 0,
    complement: '',
    zipcode: '',
    city: '',
    phone: '',
    height: '',
    wight: '',
  };

  const [name, setName] = useState(initialState.name);
  const [sex, setSex] = useState(initialState.sex);
  const [neighborhood, setNeighborhood] = useState(initialState.neighborhood);
  const [street, setStreet] = useState(initialState.street);
  const [number, setNumber] = useState(initialState.number);
  const [complement, setComplement] = useState(initialState.complement);
  const [zipcode, setZipcode] = useState(initialState.zipcode);
  const [city, setCity] = useState(initialState.city);
  const [phone, setPhone] = useState(initialState.phphoneone);
  const [height, setHeight] = useState(initialState.height);
  const [weight, setWeight] = useState(initialState.weight);

  return (
    <div className="flex flex-col mx-auto justify-center p-4 lg:w-4/12 lg:mt-16">
      <h1 className="font-bold text-4xl text-dark_grey">Adicionar aluno</h1>
      <label for="name" className="text-dark_grey text-2xl font-light mt-6">
        Nome
      </label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="text"
        name="name"
        placeholder="Digite o nome do aluno"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label for="sex" className="text-dark_grey text-2xl font-light mt-6">
        Sexo
      </label>
      <select
        name="sex"
        id="sex"
        className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        value={sex}
        onChange={(e) => setSex(e.target.value)}
      >
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
        <option value="aluno">Aluno</option>
      </select>
      <label
        for="neighborhood"
        className="text-dark_grey text-2xl font-light mt-6"
      >
        Bairro
      </label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="text"
        name="neighborhood"
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
        value={zipcode}
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        name="cep"
        placeholder="Digite o cep da academia"
        onChange={(cep) => setZipcode(cep)}
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
      <label for="height" className="text-dark_grey text-2xl font-light mt-6 w">
        Altura
      </label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="text"
        name="height"
        placeholder="Digite a altura do aluno. Ex: 169"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <label for="weight" className="text-dark_grey text-2xl font-light mt-6 w">
        Peso
      </label>
      <input
        className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
        type="text"
        name="weight"
        placeholder="Digite o peso do aluno. Ex: 169"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <div className="flex flex-col justify-center items-center ">
        <button
          type="submit"
          className="bg-primary mt-8 p-2 rounded-full text-white font-bold w-1/2 hover:opacity-75 focus:outline-none"
        >
          Cadastrar
        </button>
        <Link
          to="/dashboard"
          className="bg-gray-400 mt-4 p-2 rounded-full text-dark_grey text-center font-bold w-1/2 hover:opacity-75 focus:outline-none"
        >
          Cancelar
        </Link>
      </div>
    </div>
  );
};

export default NewClient;
