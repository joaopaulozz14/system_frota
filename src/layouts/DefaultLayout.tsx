import Dashboard from "../components/dashboard";
import NavBar from "../components/navBar";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <div className="d-flex flex-row">
        <NavBar />
        <main
          style={{
            marginLeft: "250px",
            minHeight: "100vh",
            width: "calc(100% - 250px)",
          }}
        >
          <Dashboard />

          <Outlet />
        </main>
      </div>
    </>
  );
}
