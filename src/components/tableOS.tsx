import { useMemo, useState } from "react";
import { onibus, ordensDeServico, pecas } from "../data/banco";

function OSTable() {
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
    <div className="bg-white p-3 rounded shadow-sm mb-4">
      <table className="table table-responsive text-center align-middle table-hover">
        <colgroup>
          <col style={{ width: "20px" }} />
          <col style={{ width: "60px" }} />
          <col style={{ width: "250px" }} />
          <col style={{ width: "140px" }} />
          <col style={{ width: "50px" }} />
          <col style={{ width: "60px" }} />
          <col style={{ width: "60px" }} />
          <col style={{ width: "50px" }} />
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

      <nav className="d-flex justify-content-center align-items-center">
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

export default OSTable;
