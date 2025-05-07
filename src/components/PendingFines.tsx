
import React from 'react';

interface FineProps {
  user: string;
  books: number;
  value: string;
  status: string;
  dueDate: string;
}

const finesData: FineProps[] = [
  { user: "Nora Flávia", books: 1, value: "R$ 15,00", status: "Pendente", dueDate: "13/02/2025" },
  { user: "Gustavo Santos", books: 2, value: "R$ 30,00", status: "Pendente", dueDate: "15/02/2025" },
  { user: "Gabriel Vieira", books: 4, value: "R$ 60,00", status: "Pendente", dueDate: "25/02/2025" },
  { user: "Rayssa", books: 2, value: "R$ 30,00", status: "Pendente", dueDate: "29/02/2025" },
  { user: "Gustavo Erick", books: 3, value: "R$ 45,00", status: "Pendente", dueDate: "01/03/2025" },
];

const PendingFines = () => {
  return (
    <div className="bg-[#3C1F28] rounded-lg p-6 shadow-md text-white">
      <div className="mb-6">
        <h2 className="text-xl font-bold">Multas Pendentes</h2>
        <p className="text-xs text-gray-300">Usuários com multas em aberto</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left">
              <th className="px-4 py-2 font-medium">Usuário</th>
              <th className="px-4 py-2 font-medium">Livros</th>
              <th className="px-4 py-2 font-medium">Valor</th>
              <th className="px-4 py-2 font-medium">Status</th>
              <th className="px-4 py-2 font-medium">Vencimento</th>
              <th className="px-4 py-2 font-medium">Ações</th>
            </tr>
          </thead>
          <tbody>
            {finesData.map((fine, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="px-4 py-3">{fine.user}</td>
                <td className="px-4 py-3">{fine.books}</td>
                <td className="px-4 py-3">{fine.value}</td>
                <td className="px-4 py-3">
                  <span className="inline-block px-2 py-1 bg-red-800 text-white text-xs rounded-md">
                    {fine.status}
                  </span>
                </td>
                <td className="px-4 py-3">{fine.dueDate}</td>
                <td className="px-4 py-3 space-x-2">
                  <button className="px-3 py-1 text-xs bg-gray-600 hover:bg-gray-700 rounded">
                    Notificar
                  </button>
                  <button className="px-3 py-1 text-xs bg-library-maroon hover:bg-red-900 rounded">
                    Pago
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center text-sm">
          <span className="rounded-full bg-library-maroon w-4 h-4 flex items-center justify-center text-xs mr-2">
            !
          </span>
          Exibindo 5 de 15 Multas Pendentes
        </div>
        <button className="px-4 py-1 text-sm border border-white hover:bg-white/10 rounded">
          Ver todas
        </button>
      </div>
    </div>
  );
};

export default PendingFines;
