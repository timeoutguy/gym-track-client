import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext({ signed: true, user: {} });

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse}`;
    }
  }, []);

  async function signIn(email, password, type) {
    const response = await api.post('api/auth/login', {
      email,
      password,
      type,
    });

    localStorage.setItem(
      'token',
      JSON.stringify(`Bearer ${response.data.access_token}`)
    );
    api.defaults.headers.Authorization = `Bearer ${response.data.access_token}`;
  }

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
