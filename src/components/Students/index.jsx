import React, { useState } from 'react';
import { ReactComponent as Delete } from '../../assets/deletar-usuario.svg';
import { ReactComponent as Edit } from '../../assets/editar.svg';
import { ReactComponent as Zap } from '../../assets/zap.svg';
import { ReactComponent as Casa } from '../../assets/casa.svg';
import { ReactComponent as Peso } from '../../assets/peso.svg';
import { ReactComponent as Regua } from '../../assets/regua.svg';
import Modal from 'react-modal';
import InputMask from 'react-input-mask';
import api from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Students = ({
  id,
  email,
  name,
  phone,
  height,
  weight,
  street,
  number,
  neighborhood,
  city,
  zipcode,
  sex,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [data, setData] = useState({
    id,
    email,
    name,
    phone,
    height,
    weight,
    street,
    number,
    neighborhood,
    city,
    zipcode,
    sex,
    gym_id: 1,
    birthday: '2002-04-26',
    password: 'password',
    medical_conditions: {},
    emergency_contacts: {},
  });

  const handleDelete = async () => {
    await api.delete(`/api/clients/${id}`);
    notifyDeleteSucces();
  };

  const notifyDeleteSucces = () =>
    toast.success('😎👍 O aluno foi deletado com sucesso.', {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleEdit = () => {
    api
      .put(`/api/clients/${id}`, data)
      .then(() => {
        notifyEditSucces();
        setModalIsOpen(false);
      })
      .catch(() => notifyEditError());
  };

  const notifyEditSucces = () =>
    toast.success('😎👍 Edição efetuada com sucesso.', {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyEditError = () =>
    toast.error(
      '💀 Um erro ocorreu. Verifique se todos os campos estão preenchidos',
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

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
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
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <div className="flex flex-row justify-between">
          <h1 className="text-xl">
            Editar dados de <span className="font-bold"> {data.name} </span>
          </h1>
          <button
            onClick={closeModal}
            className="text-white font-bold p-2 bg-red-500 rounded-full"
          >
            Fechar
          </button>
        </div>

        <div className="flex flex-col mx-auto justify-center p-4 md:w-4/12">
          <label
            for="name"
            className="text-dark_grey text-2xl font-light mt-6 w"
          >
            Nome
          </label>
          <input
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <label for="sex" className="text-dark_grey text-2xl font-light mt-6">
            Sexo
          </label>
          <select
            name="sex"
            id="sex"
            className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={data.sex}
            onChange={handleChange}
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
            value={data.neighborhood}
            onChange={handleChange}
          />
          <label className="text-dark_grey text-2xl font-light mt-6 w">
            Rua
          </label>
          <input
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
            type="text"
            name="street"
            placeholder="Digite a rua da academia"
            value={data.street}
            onChange={handleChange}
          />
          <label className="text-dark_grey text-2xl font-light mt-6 w">
            Número
          </label>
          <input
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
            type="number"
            name="number"
            placeholder="Digite o bairro da academia"
            value={data.number}
            onChange={handleChange}
          />
          <label className="text-dark_grey text-2xl font-light mt-6 w">
            CEP
          </label>
          <InputMask
            mask="99999-999"
            value={data.zipcode}
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none border-gray-600 placeholder-gray-600"
            name="zipcode"
            placeholder="Digite o cep da academia"
            onChange={handleChange}
          />
          <label className="text-dark_grey text-2xl font-light mt-6 w">
            Telefone
          </label>
          <InputMask
            mask="99 99999-9999"
            name="phone"
            value={data.phone}
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
            placeholder="Digite o telefone da academia"
            onChange={handleChange}
          />
          <label
            for="height"
            className="text-dark_grey text-2xl font-light mt-6 w"
          >
            Altura
          </label>
          <input
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
            type="text"
            name="height"
            placeholder="Digite a altura do aluno. Ex: 169"
            value={data.height}
            onChange={handleChange}
          />
          <label
            for="weight"
            className="text-dark_grey text-2xl font-light mt-6 w"
          >
            Peso
          </label>
          <input
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
            type="text"
            name="weight"
            placeholder="Digite o peso do aluno. Ex: 169"
            value={data.weight}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={handleEdit}
            className="bg-primary mt-8 p-2 rounded-full text-white font-bold w-1/2 hover:opacity-75 focus:outline-none mx-auto"
          >
            Salvar
          </button>
        </div>
      </Modal>
      <div className=" flex flex-col md:flex-row border-t p-4">
        <p className="font-bold text-dark_grey md:w-2/6">{data.name}</p>
        <div className="flex flex-row md:w-2/6">
          <Zap className="h-12 w-12 pb-5" />
          <p className="text-dark_grey md:pl-2">{data.phone}</p>
        </div>
        <div className="flex flex-row md:w-1/6">
          <Regua className="h-12 w-12 pb-5" />
          <p className="text-dark_grey md:pl-2">{data.height} cm</p>
        </div>
        <div className="flex flex-row md:w-1/6">
          <Peso className="h-12 w-12 pb-5" />
          <p className="text-dark_grey md:pl-2">{data.weight} kg</p>
        </div>
        <div className="flex flex-row md:w-11/12">
          <Casa className="h-12 w-12 pb-5" />
          <p className="text-dark_grey md:pl-2">
            {data.street}, {data.number}, {data.neighborhood}, {data.city} -{' '}
            {data.zipcode}
          </p>
        </div>
        <div className="flex flex-row md:w-6/6">
          <Delete
            onClick={handleDelete}
            className="h-6 w-6 fill-current text-red-600"
          />
          <Edit
            onClick={openModal}
            className="h-6 w-6 fill-current ml-4 text-primary"
          />
        </div>
      </div>
    </>
  );
};

export default Students;
