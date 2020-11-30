import React, { useState } from 'react';
import Students from '../../components/Students/index';
import { Link } from 'react-router-dom';
import api from '../../services/api';

const Dashboard = () => {
  const token = localStorage.getItem('token');
  api.defaults.headers.Authorization = token;

  const getGymData = async () => {
    const response = await api.post('/api/auth/me');
    console.log(response);
  };

  getGymData();

  const getClientData = async () => {
    const response = await api.get('/api/clients');
    setClientsData(response.data.clients.data);
  };

  getClientData();

  const [clientsData, setClientsData] = useState([]);

  return (
    <>
      <div className="flex md:px-32 md:py-6 pl-8 py-3">
        <Link
          to="/newclient"
          className="bg-primary mt-8 px-4 py-2 rounded-full text-white font-bold "
        >
          Adicionar Alunos
        </Link>
      </div>
      <div className="flex flex-col justify-center p-4 lg:px-40 ">
        {clientsData.map((student, i) => {
          return (
            <Students
              key={i}
              id={student.id}
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
