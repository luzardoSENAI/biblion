
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Book, BookPlus, UserPlus, Users, History } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-library-darkMaroon text-white fixed left-0 top-0 overflow-y-auto">
      <div className="p-4 border-b border-library-maroon flex items-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <span className="text-library-darkMaroon text-2xl font-bold">U</span>
        </div>
        <div className="ml-3">
          <h3 className="font-bold">Olá, Usuário!</h3>
          <p className="text-sm">Bibliotecário(a)</p>
        </div>
      </div>
      
      <div className="p-4">
        <h2 className="text-xl mb-4">Menu</h2>
        <nav>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="flex items-center p-2 hover:bg-library-maroon rounded-md">
                <Home className="mr-3" size={20} />
                <span>Início</span>
              </Link>
            </li>
            <li>
              <Link to="/biblioteca" className="flex items-center p-2 hover:bg-library-maroon rounded-md">
                <Book className="mr-3" size={20} />
                <span>Biblioteca</span>
              </Link>
            </li>
            <li>
              <Link to="/cadastrar-livro" className="flex items-center p-2 hover:bg-library-maroon rounded-md">
                <BookPlus className="mr-3" size={20} />
                <span>Cadastrar Livro</span>
              </Link>
            </li>
            <li>
              <Link to="/cadastrar-emprestimo" className="flex items-center p-2 hover:bg-library-maroon rounded-md">
                <UserPlus className="mr-3" size={20} />
                <span>Cadastrar Empréstimo</span>
              </Link>
            </li>
            <li>
              <Link to="/leitores" className="flex items-center p-2 hover:bg-library-maroon rounded-md">
                <Users className="mr-3" size={20} />
                <span>Leitores</span>
              </Link>
            </li>
            <li>
              <Link to="/historico" className="flex items-center p-2 hover:bg-library-maroon rounded-md">
                <History className="mr-3" size={20} />
                <span>Histórico</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
