import { ordensDeServico } from "../../data/banco";
import "./os.css";

import {
  Archive,
  Box,
  ExclamationTriangleFill,
  FileEarmarkCheckFill,
} from "react-bootstrap-icons";
import OSTable from "../../components/tableOS";
import { Button } from "react-bootstrap";
function OS() {
  return (
    
    <div className="os-container container bg-light">
      <div className="row g-3 mb-4 mt-1">
        <div className="col-md-3" style={{ cursor: "pointer" }}>
          <div className="card px-2 shadow-sm cursor-pointer">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6 className="card-title text-muted">Total de OS</h6>
                <h4 className="fw-bold">{ordensDeServico.length}</h4>
              </div>
              <div className="rounded-5 p-3 " style={{ background: "#DBEAFE" }}>
                <Box size={25} className="text-primary" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3" style={{ cursor: "pointer" }}>
          <div className="card px-2 shadow-sm cursor-pointer border-success">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6 className="card-title text-muted">Abertas</h6>
                <h4 className="fw-bold text-success">
                  {
                    ordensDeServico.filter((os) => os.status === "Aberto")
                      .length
                  }
                </h4>
              </div>
              <div className="rounded-5 p-3 " style={{ background: "#DCFCE7" }}>
                <FileEarmarkCheckFill
                  size={25}
                  color="green"
                  className="text-primary"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3" style={{ cursor: "pointer" }}>
          <div className="card px-2 shadow-sm cursor-pointer border-warning">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6 className="card-title text-muted">Em execução</h6>
                <h4 className="fw-bold text-warning">
                  {
                    ordensDeServico.filter((os) => os.status === "Em andamento")
                      .length
                  }
                </h4>
              </div>
              <div className="rounded-5 p-3" style={{ background: "#FFEDD5" }}>
                <ExclamationTriangleFill
                  size={25}
                  color="#FBBC09"
                  className="text-primary"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3" style={{ cursor: "pointer" }}>
          <div className="card px-2 text-center shadow-sm border-danger">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6 className="card-title text-muted">Fechadas</h6>
                <h4 className="fw-bold text-danger">
                  {
                    ordensDeServico.filter((os) => os.status === "Fechado")
                      .length
                  }
                </h4>
              </div>
              <div className="rounded-5 p-3 " style={{ background: "#FCDCDC" }}>
                <Archive size={25} color="red" className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h6 className="fw-bold">Lista de OS</h6>
          <p>Gerencie suas ordens de serviços</p>
        </div>

        <div>
          <Button variant="primary" className="mb-3">
           + Adicionar OS
          </Button>
        </div>
      </div>

      <OSTable />
    </div>
  );
}

export default OS;
