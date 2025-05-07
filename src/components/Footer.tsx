
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-library-darkMaroon text-white p-4 mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
              <span className="text-library-darkMaroon font-bold">L</span>
            </div>
            <span className="font-bold">Library</span>
          </div>
          
          <div className="text-sm">
            <p>&copy; {new Date().getFullYear()} Sistema de Gerenciamento de Biblioteca. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
