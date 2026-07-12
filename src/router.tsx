import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Onibus from "./pages/onibus";
import OS from "./pages/os/os";
import DefaultLayout from "./layouts/DefaultLayout";
import ListaPecas from "./pages/listaPecas/listaPecas";
import DetalhesOnibus from "./pages/detalhesOnibus/detalhesOnibus";
import DetalhesOS from "./pages/detalhesOS/detalhesOS";
import NovaOS from "./pages/novaOS/novaOS";
/* import { useAuth } from './contexts/auth'; */

const Router = () => {
  /*   const { logged, admin } = useAuth(); */

  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/onibus" element={<Onibus />} />
        <Route path="/onibus/:id" element={<DetalhesOnibus />} />
        <Route path="/os" element={<OS />} />
        <Route path="/os/:id" element={<DetalhesOS />} />
        <Route path="/novaOS" element={<NovaOS />} />
        <Route path="/pecas" element={<ListaPecas />} />
      </Route>
    </Routes>
  );
};

export default Router;
