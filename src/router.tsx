import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Onibus from "./pages/onibus";
import OS from "./pages/os/os";
import DefaultLayout from "./layouts/DefaultLayout";
import ListaPecas from "./pages/listaPecas";
/* import { useAuth } from './contexts/auth'; */

const Router = () => {
  /*   const { logged, admin } = useAuth(); */

  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/onibus" element={<Onibus />} />
        <Route path="/os" element={<OS />} />
        <Route path="/pecas" element={<ListaPecas />} />
      </Route>
    </Routes>
  );
};

export default Router;
