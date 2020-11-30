import React from 'react';
import { ReactComponent as Delete } from '../../assets/deletar-usuario.svg';
import { ReactComponent as Edit } from '../../assets/editar.svg';
import { ReactComponent as Zap } from '../../assets/zap.svg';
import { ReactComponent as Entrada } from '../../assets/entrada.svg';
import { ReactComponent as Saida } from '../../assets/saida.svg';
import { ReactComponent as Outlook } from '../../assets/outlook.svg';

const Instructors = () => {
  return (
    <div className=" flex flex-col md:flex-row border-t p-4">
      <p className="font-bold text-dark_grey md:w-1/2">
        Xandasso Hummel Pereira
      </p>
      <div className="flex flex-row md:w-2/6">
        <Zap className="h-12 w-12 pb-5" />
        <p className="text-dark_grey md:pl-2">(xx)xxxxxxxxx</p>
      </div>
      <div className="flex flex-row md:w-1/2 pl-4">
        <Outlook className="h-12 w-12 pb-5" />
        <p className="text-dark_grey md:pl-1">xandao@test.com </p>
      </div>
      <div className="flex flex-row md:w-1/6">
        <Entrada className="h-12 w-12 pb-5" />
        <p className="text-dark_grey md:pl-2">10:00</p>
      </div>
      <div className="flex flex-row md:w-5/6">
        <Saida className="h-12 w-12 pb-5 pl-4" />
        <p className="text-dark_grey md:pl-2">20:00</p>
      </div>
      <div className="flex flex-row md:w-6/6 ">
        <Delete className="h-6 w-6 fill-current text-red-600" />
        <Edit className="h-6 w-6 fill-current ml-4 text-primary" />
      </div>
    </div>
  );
};

export default Instructors;
