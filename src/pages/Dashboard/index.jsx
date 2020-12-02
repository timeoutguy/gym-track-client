import React, { useState, useEffect } from 'react';
import Students from '../../components/Students/index';
import { Link } from 'react-router-dom';
import api from '../../services/api';

const Dashboard = () => {
  const [clientsData, setClientsData] = useState([]);
  const token = localStorage.getItem('token');
  api.defaults.headers.Authorization = token;

  useEffect(() => {
    const getClientData = async () => {
      const response = await api.get('/api/clients/gym/1');
      setClientsData(response.data.clients.data);
    };

    getClientData();
  }, [clientsData]);

  return (
    <>
      <div className="flex justify-between md:px-32 md:py-6 pl-8 py-3">
        <Link
          to="/newclient"
          className="bg-primary mt-8 px-4 py-2 rounded-full text-white font-bold "
        >
          Adicionar Alunos
        </Link>
        <Link
          to="/dashboard/instrutores"
          className="mt-12 text-primary font-bold"
        >
          Visualizar instrutores
        </Link>
      </div>
      <div className="flex flex-col justify-center p-4 lg:px-40 ">
        {clientsData.map((student, i) => {
          return (
            <Students
              key={i}
              id={student.id}
              email={student.email}
              name={student.name}
              phone={student.phone}
              weight={student.weight}
              height={student.height}
              street={student.street}
              number={student.number}
              neighborhood={student.neighborhood}
              city={student.city}
              zipcode={student.zipcode}
              sex={student.sex}
            />
          );
        })}
      </div>
    </>
  );
};
export default Dashboard;
