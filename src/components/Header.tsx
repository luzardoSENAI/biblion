
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Add a function to toggle sidebar visibility
  const toggleSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (sidebar && mainContent) {
      sidebar.classList.toggle('hidden');
      mainContent.classList.toggle('ml-0');
      mainContent.classList.toggle('ml-64');
    }
  };

  return (
    <header className="bg-library-darkMaroon text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <button 
            className="text-white focus:outline-none lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <button
            onClick={toggleSidebar}
            className="ml-2 lg:ml-0 font-bold flex items-center"
          >
            <Menu size={20} className="mr-2" />
            <span>Todos</span>
          </button>
        </div>

        <div className="hidden md:flex space-x-10">
          <div className="relative group">
            <button className="text-white focus:outline-none flex items-center">
              Cadastro
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          <Link to="/biblioteca" className="text-white">Biblioteca</Link>
          <Link to="/pesquisa" className="text-white">Pesquisa</Link>
        </div>

        <div className="flex items-center">
          <div className="text-xs mr-2 hidden md:block">
            <div>Olá, Usuário!</div>
            <div>Bibliotecário(a)</div>
          </div>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-library-darkMaroon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
