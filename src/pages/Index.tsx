
import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import StatCard from '../components/StatCard';
import MostBorrowedBooks from '../components/MostBorrowedBooks';
import ActiveUsers from '../components/ActiveUsers';
import PendingFines from '../components/PendingFines';

const Index = () => {
  return (
    <div className="min-h-screen bg-wave">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard 
            title="Total de Livros" 
            value="1.946" 
            percentage="+6% desde o último mês"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            }
          />
          <StatCard 
            title="Empréstimos Ativos" 
            value="356" 
            percentage="+0.5% desde o último mês"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            }
          />
          <StatCard 
            title="Total de Cadastros" 
            value="875" 
            percentage="+10.5% desde o último mês"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            }
          />
        </div>
        
        {/* Charts */}
        <div className="mb-8">
          <MostBorrowedBooks />
        </div>
        
        <div className="mb-8">
          <ActiveUsers />
        </div>
        
        <div className="mb-8">
          <PendingFines />
        </div>
      </div>
    </div>
  );
};

export default Index;
