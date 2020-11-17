import React from 'react';
import { ReactComponent as Delete } from '../../assets/deletar-usuario.svg';
import { ReactComponent as Edit } from '../../assets/editar.svg';
import { ReactComponent as Zap } from '../../assets/zap.svg';
import { ReactComponent as Casa } from '../../assets/casa.svg';
import { ReactComponent as Peso } from '../../assets/peso.svg';
import { ReactComponent as Regua } from '../../assets/regua.svg';

const Students = () => {
  return (
    <div className=" flex flex-col md:flex-row border-t border-b p-4 ">
      <p className="font-bold text-dark_grey mb-4 md:mb-0">Alexandre Hummel</p>
      <div className="flex flex-row ">
        <Zap className="h-12 w-12 md:pl-8 pb-5" />
        <p className="text-dark_grey md:pl-2">(xx)xxxxxxxxx</p>
      </div>
      <div className="flex flex-row">
        <Regua className="h-12 w-12 md:pl-8 pb-5" />
        <p className="text-dark_grey md:pl-2">175 cm</p>
      </div>
      <div className="flex flex-row">
        <Peso className="h-12 w-12 md:pl-8 pb-5" />
        <p className="text-dark_grey md:pl-2">110 kg</p>
      </div>
      <div className="flex flex-row">
        <Casa className="h-12 w-12 md:pl-8 pb-5" />
        <p className="text-dark_grey md:pl-2">
          Rua Barbosa Ferraz, 272, Centro
        </p>
      </div>
      <div className="flex flex-row md:flex-col h-12 w-12 md:pl-8 pb-5">
        <div className="flex flex-row ml-3 mr-2">
          <Delete className="h-6 w-6 mr-2 md:mr-0 md:h-12 md:w-12  " />
          <p className="text-primary mr-2 md:pl-2">Editar</p>
        </div>
        <div className="flex flex-row">
          <Edit className="h-6 w-6 mr-2 md:pl-8" />
          <p className="text-red-700 md:pl-2">Excluir</p>
        </div>
      </div>
    </div>
  );
};

export default Students;
