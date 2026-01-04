import Dashboard from "../components/dashboard";
import NavBar from "../components/navBar";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <div className="d-flex flex-row ">
        <NavBar />
        <main className="ml-5 ">
          <Dashboard />
          
          <Outlet />
        </main>
      </div>
    </>
  );
}
