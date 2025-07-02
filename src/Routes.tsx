import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {lazy,  } from "react";
import { MainLayout } from "./layout/MainLayout";

// Importação lazy para carregamento sob demanda
const Home = lazy(() => import("./pages/home"));
const Sobre = lazy(() => import("./pages/sobre"));
const Servicos = lazy(() => import("./pages/our-servises"));
const Portfolio = lazy(() => import("./pages/portfolio"));
const Blog = lazy(() => import("./pages/blog"));
const JunteSe = lazy(() => import("./pages/junte-se"));
const Contato = lazy(() => import("./pages/contato"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
     
        <Routes>
          {/* Layout comum para todas as rotas */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/junte-se" element={<JunteSe />} />
            <Route path="/contato" element={<Contato />} />

            {/* Rota fallback para redirecionar rotas inválidas */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
    
    </BrowserRouter>
  );
}
