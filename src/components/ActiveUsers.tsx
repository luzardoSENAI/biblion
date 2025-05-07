
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const userData = [
  { name: 'Nora Flávia', value: 35, type: 'Estudante' },
  { name: 'Gustavo Santos', value: 26, type: 'Estudante' },
  { name: 'Gabriel Vieira', value: 22, type: 'Estudante' },
  { name: 'Rayssa', value: 16, type: 'Estudante' },
  { name: 'Gustavo Erick', value: 8, type: 'Estudante' },
];

interface UserRankingProps {
  name: string;
  type: string;
  count: number;
}

const UserRanking = ({ name, type, count }: UserRankingProps) => {
  return (
    <div className="flex justify-between items-center py-2 px-3 mb-2 rounded-md bg-[#3C2329] bg-opacity-40">
      <div className="text-left">
        <p className="font-medium text-sm text-white">{name}</p>
        <p className="text-xs text-gray-300">{type}</p>
      </div>
      <div className="text-white font-semibold bg-library-maroon rounded-md px-3 py-1">
        {count}
      </div>
    </div>
  );
};

const ActiveUsers = () => {
  const [activeTab, setActiveTab] = useState('Todos');
  
  const tabs = ['Todos', 'Estudantes', 'Professores', 'Público Geral'];
  
  return (
    <div className="bg-[#3C1F28] rounded-lg p-6 shadow-md text-white">
      <div className="mb-6">
        <h2 className="text-xl font-bold">Usuários Mais Ativos</h2>
        <p className="text-xs text-gray-300">Usuários com maior número de empréstimos</p>
      </div>
      
      <div className="flex space-x-1 mb-5">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-3 py-1 text-xs rounded ${
              activeTab === tab ? 'bg-library-maroon text-white' : 'text-gray-300'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={userData}
              margin={{
                top: 5,
                right: 30,
                left: 40,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#444" />
              <XAxis type="number" tick={{fill: '#ddd'}} axisLine={{stroke: '#666'}} />
              <YAxis dataKey="name" type="category" tick={{fill: '#ddd'}} axisLine={{stroke: '#666'}} />
              <Bar dataKey="value" fill="#880E2F" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0">
          <h3 className="text-sm font-medium mb-3">TOP 5 USUÁRIOS</h3>
          <div className="space-y-2">
            <UserRanking name="Nora Flávia" type="Estudante" count={35} />
            <UserRanking name="Gustavo Santos" type="Estudante" count={26} />
            <UserRanking name="Gabriel Vieira" type="Estudante" count={22} />
            <UserRanking name="Rayssa" type="Estudante" count={16} />
            <UserRanking name="Gustavo Erick" type="Estudante" count={8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveUsers;
