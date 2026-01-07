import { useMemo, useState } from "react";
import { ordensDeServico, onibus, pecas } from "../../data/banco";
import "./os.css";
import { House } from "react-bootstrap-icons";
function OS() {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 10;

  const inicio = (paginaAtual - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;
  const osPagina = ordensDeServico.slice(inicio, fim);

  const totalNumeroPaginacao = Math.ceil(
    ordensDeServico.length / itensPorPagina
  );

  const numeroPaginacao = useMemo(() => {
    return Array.from({ length: totalNumeroPaginacao }, (_, i) => i + 1);
  }, [totalNumeroPaginacao]);

  return (
    <div className="os-container container">
      <div className="row g-3 mb-4 mt-1">
        <div className="col-md-3">
          <div className="card px-2 shadow-sm cursor-pointer">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6 className="card-title text-muted">Total de OS</h6>
                <h4 className="fw-bold">{ordensDeServico.length}</h4>
              </div>
              <House size={25} className="text-primary" />
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm cursor-pointer border-success">
            <div className="card-body">
              <h6 className="card-title text-muted">Abertas</h6>
              <h3 className="fw-bold text-success">
                {ordensDeServico.filter((os) => os.status === "Aberto").length}
              </h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow-sm cursor-pointer border-warning">
            <div className="card-body">
              <h6 className="card-title text-muted">Em andamento</h6>
              <h3 className="fw-bold text-warning">
                {
                  ordensDeServico.filter((os) => os.status === "Em andamento")
                    .length
                }
              </h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow-sm cursor-pointer border-danger">
            <div className="card-body">
              <h6 className="card-title text-muted">Fechadas</h6>
              <h3 className="fw-bold text-danger">
                {ordensDeServico.filter((os) => os.status === "Fechado").length}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <table className="table table-striped table-hover table-bordered text-center os-table">
        <colgroup>
          <col style={{ width: "40px" }} />
          <col style={{ width: "100px" }} />
          <col style={{ width: "250px" }} />
          <col style={{ width: "180px" }} />
          <col style={{ width: "90px" }} />
          <col style={{ width: "80px" }} />
          <col style={{ width: "120px" }} />
          <col style={{ width: "120px" }} />
        </colgroup>

        <thead>
          <tr>
            <th>ID</th>
            <th>Ônibus</th>
            <th>Descrição</th>
            <th>Peças</th>
            <th>Status</th>
            <th>KM</th>
            <th>Abertura</th>
            <th>Fechamento</th>
          </tr>
        </thead>

        <tbody>
          {osPagina.map((os) => {
            const bus = onibus.find((o) => o.id === os.onibus_id);

            const pecasDaOS = os.pecas.map((item) => ({
              ...item,
              info: pecas.find((p) => p.id === item.peca_id),
            }));

            return (
              <tr key={os.id}>
                <td>{os.id}</td>
                <td>{bus?.placa ?? "-"}</td>

                <td className="text-ellipsis" title={os.descricao}>
                  {os.descricao}
                </td>

                <td>
                  {pecasDaOS.length === 0 ? (
                    <span className="text-muted form-select form-select-sm">
                      Nenhuma peça
                    </span>
                  ) : (
                    <select className="form-select form-select-sm">
                      {pecasDaOS.map((p) => (
                        <option key={p.peca_id} value={p.peca_id}>
                          {p.info?.nome} ({p.quantidade})
                        </option>
                      ))}
                    </select>
                  )}
                </td>

                <td className="status-cell">
                  <span
                    className={`badge ${
                      os.status === "Fechado"
                        ? "bg-danger"
                        : os.status === "Aberto"
                        ? "bg-success"
                        : "bg-warning"
                    }`}
                  >
                    {os.status}
                  </span>
                </td>

                <td>{os.km_registrado}</td>
                <td>{os.data_abertura}</td>
                <td>{os.data_fechamento || "-"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <nav className="pagination-container">
        {numeroPaginacao.map((num) => (
          <button
            key={num}
            onClick={() => setPaginaAtual(num)}
            className={`btn btn-sm me-2 ${
              paginaAtual === num ? "btn-primary" : "btn-outline-primary"
            }`}
          >
            {num}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default OS;
