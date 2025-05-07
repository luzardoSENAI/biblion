
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Relatorios from "./pages/Relatorios";
import Biblioteca from "./pages/Biblioteca";
import Historico from "./pages/Historico";

// Novas páginas
import CadastrarLivro from "./pages/CadastrarLivro";
import CadastrarEmprestimo from "./pages/CadastrarEmprestimo";
import Leitores from "./pages/Leitores";
import Pesquisa from "./pages/Pesquisa";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/cadastrar-livro" element={<CadastrarLivro />} />
          <Route path="/cadastrar-emprestimo" element={<CadastrarEmprestimo />} />
          <Route path="/leitores" element={<Leitores />} />
          <Route path="/pesquisa" element={<Pesquisa />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
