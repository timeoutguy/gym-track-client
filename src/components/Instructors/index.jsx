import React, { useState } from 'react';
import { ReactComponent as Delete } from '../../assets/deletar-usuario.svg';
import { ReactComponent as Edit } from '../../assets/editar.svg';
import { ReactComponent as Zap } from '../../assets/zap.svg';
import { ReactComponent as Entrada } from '../../assets/entrada.svg';
import { ReactComponent as Saida } from '../../assets/saida.svg';
import { ReactComponent as Outlook } from '../../assets/outlook.svg';
import Modal from 'react-modal';
import InputMask from 'react-input-mask';
import api from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Instructors = ({ id, name, phone, email, gym_id, arrive, leave }) => {
  const [data, setData] = useState({
    id,
    name,
    phone,
    email,
    gym_id,
    arrive,
    leave,
    password: 'password',
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDelete = async () => {
    await api.delete(`/api/instructors/${id}`);
    notifyDelete();
  };

  const notifyDelete = () =>
    toast.success('😎👍 Instrutor deletado com sucesso.', {
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
      .put(`api/instructors/${id}`, data)
      .then((response) => {
        notifyEdit();
        setModalIsOpen(false);
      })
      .catch((err) => {
        notifyError();
        console.log(err.response);
      });
  };

  const notifyEdit = () =>
    toast.success('😎👍 Edição efetuada com sucesso.', {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
          <label
            for="email"
            className="text-dark_grey text-2xl font-light mt-6 w"
          >
            Nome
          </label>
          <input
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
            type="email"
            name="email"
            value={data.email}
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
          <label className="text-dark_grey text-2xl font-light mt-6 w">
            Chegada
          </label>
          <InputMask
            mask="99:99"
            name="arrive"
            value={data.arrive}
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
            placeholder="Digite o horário de chegada do instrutor"
            onChange={handleChange}
          />
          <label className="text-dark_grey text-2xl font-light mt-6 w">
            Saida
          </label>
          <InputMask
            mask="99:99"
            name="leave"
            value={data.leave}
            className="border-b border-gray-600 placeholder-gray-600 py-1 text-dark_grey outline-none"
            placeholder="Digite o horário de saida do instrutor"
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
        <p className="font-bold text-dark_grey md:w-1/2">{data.name}</p>
        <div className="flex flex-row md:w-2/6">
          <Zap className="h-12 w-12 pb-5" />
          <p className="text-dark_grey md:pl-2">{data.phone}</p>
        </div>
        <div className="flex flex-row md:w-1/2 pl-4">
          <Outlook className="h-12 w-12 pb-5" />
          <p className="text-dark_grey md:pl-1">{data.email} </p>
        </div>
        <div className="flex flex-row md:w-1/6">
          <Entrada className="h-12 w-12 pb-5" />
          <p className="text-dark_grey md:pl-2">{data.arrive}</p>
        </div>
        <div className="flex flex-row md:w-5/6">
          <Saida className="h-12 w-12 pb-5 pl-4" />
          <p className="text-dark_grey md:pl-2">{data.leave}</p>
        </div>
        <div className="flex flex-row md:w-6/6 ">
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

export default Instructors;
