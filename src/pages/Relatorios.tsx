
import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const Relatorios = () => {
  return (
    <div className="min-h-screen bg-wave">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Header />
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-library-darkMaroon mb-4">Relatórios</h2>
          <p className="text-gray-600">Esta página está em desenvolvimento. Aqui serão exibidos os relatórios da biblioteca.</p>
        </div>
      </div>
    </div>
  );
};

export default Relatorios;
