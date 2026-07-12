import { pecas } from "../../data/banco";

import {
  Archive,
  Box,
  ExclamationTriangleFill,
  FileEarmarkCheckFill,
} from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import TablePecas from "../../components/tablePecas";
import "./listaPecas.css";
function ListaPecas() {
  return (
    <div className="container bg-light pb-3">
      <div className="row g-3 mb-4 pt-4">
        <div className="col-md-3" style={{ cursor: "pointer" }}>
          <div className="card px-2 shadow-sm cursor-pointer">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6 className="card-title text-muted">Total de Peças</h6>
                <h4 className="fw-bold">{pecas.length}</h4>
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
                <h6 className="card-title text-muted">Em Estoque</h6>
                <h4 className="fw-bold text-success">
                  {pecas.filter((peca) => peca.status === "Em estoque").length}
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
                <h6 className="card-title text-muted">Baixo Estoque</h6>
                <h4 className="fw-bold text-warning">
                  {
                    pecas.filter((peca) => peca.status === "Baixo estoque")
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
                <h6 className="card-title text-muted">Esgotado</h6>
                <h4 className="fw-bold text-danger">
                  {
                    pecas.filter((peca) => peca.status === "Esgotado")
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
          <h6 className="fw-bold">Lista de Peças</h6>
          <p>Gerencie seus itens de estoque e níveis de inventário</p>
        </div>

        <div>
          <Button variant="primary" className="mb-3">
            + Adicionar OS
          </Button>
        </div>
      </div>

      <TablePecas />
    </div>
  );
}

export default ListaPecas;
