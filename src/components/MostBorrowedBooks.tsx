
import React from 'react';
import { Bar } from 'recharts';
import { BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Coraline', value: 25 },
  { name: 'It - A Coisa', value: 75 },
  { name: '1984', value: 60 },
  { name: 'Any Vol 1', value: 90 },
  { name: 'Harry P', value: 40 },
];

interface BookRankingProps {
  title: string;
  author: string;
  count: number;
}

const BookRanking = ({ title, author, count }: BookRankingProps) => {
  return (
    <div className="flex justify-between items-center py-2 px-3 mb-2 rounded-md bg-[#3C2329] bg-opacity-40">
      <div className="text-left">
        <p className="font-medium text-sm text-white">{title}</p>
        <p className="text-xs text-gray-300">{author}</p>
      </div>
      <div className="text-white font-semibold bg-library-maroon rounded-md px-3 py-1">
        {count}
      </div>
    </div>
  );
};

const MostBorrowedBooks = () => {
  return (
    <div className="bg-[#3C1F28] rounded-lg p-6 shadow-md text-white">
      <div className="mb-6">
        <h2 className="text-xl font-bold">Livros mais Emprestados</h2>
        <p className="text-xs text-gray-300">Livros com maior número de empréstimos</p>
      </div>
      
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#444" />
              <XAxis dataKey="name" tick={{fill: '#ddd'}} axisLine={{stroke: '#666'}} />
              <YAxis tick={{fill: '#ddd'}} axisLine={{stroke: '#666'}} />
              <Bar dataKey="value" fill="#880E2F" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0">
          <h3 className="text-sm font-medium mb-3">TOP 5 LIVROS</h3>
          <div className="space-y-2">
            <BookRanking title="ANY Vol 1" author="Raymond, George" count={91} />
            <BookRanking title="It - A Coisa" author="Stephen King" count={76} />
            <BookRanking title="1984" author="George Orwell" count={65} />
            <BookRanking title="Coraline" author="Neil Gaiman" count={49} />
            <BookRanking title="Harry Potter" author="J.K. Rowling" count={39} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostBorrowedBooks;
