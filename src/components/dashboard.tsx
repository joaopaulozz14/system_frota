import { Search } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
function Dashboard() {
  return (
    <div
      className="d-flex align-items-center justify-content-between px-4 bg-white border-bottom position-sticky border-top z-1 "
      style={{
        height: "76px",
      }}
    >
      <span className="bg">Dashboard Overview</span>

      <div>
        <Button className="pe-5 d-flex align-items-center justify-content-start bg-white text-gray text-secondary border-secondary gap-2">
          <Search size={15} /> Pesquisar
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;
