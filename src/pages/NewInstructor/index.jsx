import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api';

const NewInstructor = () => {
  const initialState = {
    name: '',
    email: '',
    password: 'password',
    arrive: '',
    leave: '',
    phone: '',
    gym_id: 1,
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  let history = useHistory();

  const notify = () =>
    toast.success(
      '😎👍 Instrutor adicionado. Você sera redirecionado para o dashboard',
      {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  const notifyError = () =>
    toast.error(
      '💀 Um erro ocorreu. Verifique se os campos obrigatorios estão preenchidos',
      {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );

  const handleSubmit = () => {
    api
      .post('/api/instructors', values)
      .then((response) => {
        if (response.status === 201) {
          notify();
          setTimeout(() => {
            history.push('/dashboard/instrutores');
          }, 4000);
        }
      })
      .catch(() => {
        notifyError();
      });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex flex-col mx-auto justify-center p-4 lg:w-4/12 lg:mt-16">
        <h1 className="font-bold text-4xl text-dark_grey">
          Adicionar Instrutor
        </h1>
        <label for="name" className="text-dark_grey text-2xl font-light mt-6">
          Nome
        </label>
        <input
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
          type="text"
          name="name"
          placeholder="Digite o nome do instrutor"
          value={values.name}
          onChange={handleChange}
        />
        <label for="email" className="text-dark_grey text-2xl font-light mt-6">
          Email
        </label>
        <input
          name="email"
          id="email"
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
          placeholder="Digite o email do instrutor"
          value={values.email}
          onChange={handleChange}
        ></input>
        <label className="text-dark_grey text-2xl font-light mt-6 w">
          Chegada
        </label>
        <InputMask
          mask="99:99"
          value={values.arrive}
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none border-gray-600 placeholder-gray-600"
          name="arrive"
          placeholder="Digite o horário de chegada do instrutor"
          onChange={handleChange}
        />
        <label className="text-dark_grey text-2xl font-light mt-6 w">
          Saida
        </label>
        <InputMask
          mask="99:99"
          value={values.leave}
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none border-gray-600 placeholder-gray-600"
          name="leave"
          placeholder="Digite o horário de chegada do instrutor"
          onChange={handleChange}
        />
        <label className="text-dark_grey text-2xl font-light mt-6 w">
          Telefone
        </label>
        <InputMask
          mask="99 99999-9999"
          name="phone"
          value={values.phone}
          className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
          placeholder="Digite o telefone do instrutor"
          onChange={handleChange}
        />
        <div className="flex flex-col justify-center items-center ">
          <button
            type="submit"
            className="bg-primary mt-8 p-2 rounded-full text-white font-bold w-1/2 hover:opacity-75 focus:outline-none"
            onClick={handleSubmit}
          >
            Cadastrar
          </button>
          <Link
            to="/dashboard/instrutores"
            className="bg-gray-400 mt-4 p-2 rounded-full text-dark_grey text-center font-bold w-1/2 hover:opacity-75 focus:outline-none"
          >
            Cancelar
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewInstructor;
