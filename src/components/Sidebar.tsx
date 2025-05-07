
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Book, BookPlus, UserPlus, Users, History, User } from 'lucide-react';

const Sidebar = () => {
  const [userName, setUserName] = useState('Usuário');
  const [userRole, setUserRole] = useState('Bibliotecário(a)');
  
  // Load user data from localStorage on component mount
  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    const savedRole = localStorage.getItem('userRole');
    
    if (savedName) {
      setUserName(savedName);
    }
    
    if (savedRole) {
      setUserRole(savedRole);
    }
  }, []);
  
  return (
    <div className="sidebar w-64 h-screen bg-library-darkMaroon text-white fixed left-0 top-0 overflow-y-auto">
      <Link to="/perfil" className="p-4 border-b border-library-maroon flex items-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
          {localStorage.getItem('userProfileImage') ? (
            <img 
              src={localStorage.getItem('userProfileImage')!} 
              alt="User Avatar" 
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-library-darkMaroon text-2xl font-bold">
              {userName.charAt(0)}
            </span>
          )}
        </div>
        <div className="ml-3">
          <h3 className="font-bold">Olá, {userName}!</h3>
          <p className="text-sm">{userRole}</p>
        </div>
      </Link>
      
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
            <li>
              <Link to="/perfil" className="flex items-center p-2 hover:bg-library-maroon rounded-md">
                <User className="mr-3" size={20} />
                <span>Meu Perfil</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
