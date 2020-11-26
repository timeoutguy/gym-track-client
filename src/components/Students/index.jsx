import React from 'react';
import { ReactComponent as Delete } from '../../assets/deletar-usuario.svg';
import { ReactComponent as Edit } from '../../assets/editar.svg';
import { ReactComponent as Zap } from '../../assets/zap.svg';
import { ReactComponent as Casa } from '../../assets/casa.svg';
import { ReactComponent as Peso } from '../../assets/peso.svg';
import { ReactComponent as Regua } from '../../assets/regua.svg';

const Students = () => {
  return (
    <div className=" flex flex-col md:flex-row border-t p-4">
      <p className="font-bold text-dark_grey md:w-3/6">
        Alexandre Hummel Pereira Junior
      </p>
      <div className="flex flex-row md:w-2/6">
        <Zap className="h-12 w-12 pb-5" />
        <p className="text-dark_grey md:pl-2">(xx)xxxxxxxxx</p>
      </div>
      <div className="flex flex-row md:w-1/6">
        <Regua className="h-12 w-12 pb-5" />
        <p className="text-dark_grey md:pl-2">175 cm</p>
      </div>
      <div className="flex flex-row md:w-1/6">
        <Peso className="h-12 w-12 pb-5" />
        <p className="text-dark_grey md:pl-2">110 kg</p>
      </div>
      <div className="flex flex-row md:w-5/6">
        <Casa className="h-12 w-12 pb-5" />
        <p className="text-dark_grey md:pl-2">
          Rua Barbosa Ferraz, 272, Centro, Cachoeira Paulista - 12630-000
        </p>
      </div>
      <div className="flex flex-row md:w-6/6">
        <Delete className="h-6 w-6 fill-current text-red-600" />
        <Edit className="h-6 w-6 fill-current ml-4 text-primary" />
      </div>
    </div>
  );
};

export default Students;
