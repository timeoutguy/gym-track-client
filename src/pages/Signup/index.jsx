import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
// import validate from '../../utils/validateInfo';
// import useForm from '../../hooks/useForm';
import api from '../../services/api';

const Signup = () => {
  // const { handleChange, values, handleSubmit } = useForm(validate);

  const [values, setValues] = useState({
    email: '',
    password: '',
    name: '',
    neighborhood: '',
    street: '',
    number: '',
    complement: '',
    cep: '',
    city: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    api.post('/api/gyms', {
      values,
    });
  };

  return (
    <div className="flex flex-col mx-auto justify-center p-4 lg:w-4/12 lg:mt-16">
      <h1 className="font-bold text-4xl text-dark_grey">Faça o seu cadastro</h1>
      <h4 className="text-dark_grey font-light text-lg">
        e tenha acesso a nossa plataforma
      </h4>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="text-dark_grey text-2xl font-light mt-6">
          E-mail <span className="text-red-500">*</span>
        </label>
        <input
          className="border-b py-1 text-dark_grey outline-none border-gray-600 placeholder-gray-600"
          type="text"
          name="email"
          placeholder="Digite seu endereço de e-mail"
          value={values.email}
          onChange={handleChange}
        />
        <label
          for="password"
          className="text-dark_grey text-2xl font-light mt-6"
        >
          Senha <span className="text-red-500">*</span>
        </label>
        <input
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none border-gray-600 placeholder-gray-600"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          value={values.password}
          onChange={handleChange}
        />
        <label className="text-dark_grey text-2xl font-light mt-6">
          Nome da academia <span className="text-red-500">*</span>
        </label>
        <input
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
          type="text"
          name="name"
          placeholder="Digite o nome da sua academia"
          value={values.name}
          onChange={handleChange}
        />
        <label className="text-dark_grey text-2xl font-light mt-6">
          Bairro <span className="text-red-500">*</span>
        </label>
        <input
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
          type="text"
          name="neighborhood"
          placeholder="Digite o bairro da academia"
          value={values.neighborhood}
          onChange={handleChange}
        />
        <label className="text-dark_grey text-2xl font-light mt-6 w">
          Rua <span className="text-red-500">*</span>
        </label>
        <input
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
          type="text"
          name="street"
          placeholder="Digite a rua da academia"
          value={values.street}
          onChange={handleChange}
        />
        <label className="text-dark_grey text-2xl font-light mt-6 w">
          Número <span className="text-red-500">*</span>
        </label>
        <InputMask
          mask="99999"
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
          type="text"
          name="number"
          placeholder="Digite o bairro da academia"
          value={values.number}
          onChange={handleChange}
        />
        <label className="text-dark_grey text-2xl font-light mt-6 w">
          Complemento
        </label>
        <input
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
          type="text"
          name="complement"
          placeholder="Digite um complemento da academia"
          value={values.complement}
          onChange={handleChange}
        />
        <label className="text-dark_grey text-2xl font-light mt-6 w">
          CEP <span className="text-red-500">*</span>
        </label>
        <InputMask
          mask="99999-999"
          value={values.cep}
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none border-gray-600 placeholder-gray-600"
          name="cep"
          placeholder="Digite o cep da academia"
          onChange={handleChange}
        />
        <label className="text-dark_grey text-2xl font-light mt-6 w">
          Cidade <span className="text-red-500">*</span>
        </label>
        <input
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
          type="text"
          name="city"
          placeholder="Digite a cidade da academia"
          value={values.city}
          onChange={handleChange}
        />
        <label className="text-dark_grey text-2xl font-light mt-6 w">
          Telefone <span className="text-red-500">*</span>
        </label>
        <InputMask
          mask="(99) 99999-9999"
          name="phone"
          value={values.phone}
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
          placeholder="Digite o telefone da academia"
          onChange={handleChange}
        />
        <div className="flex flex-col justify-center items-center ">
          <button
            type="submit"
            className="bg-primary mt-8 p-2 rounded-full text-white font-bold w-1/2 hover:opacity-75 focus:outline-none"
          >
            Cadastrar
          </button>
        </div>
      </form>

      <p className="font-light mt-4">
        Já possui uma conta? Faça login{' '}
        <Link to="/cadastro" className="text-primary font-normal">
          clicando aqui
        </Link>
      </p>
    </div>
  );
};

export default Signup;
