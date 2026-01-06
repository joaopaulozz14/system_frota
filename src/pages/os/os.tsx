import { useMemo, useState } from "react";
import { ordensDeServico } from "../../data/banco";
import { onibus } from "../../data/banco";
import { pecas } from "../../data/banco";
import "./os.css";

function OS() {
  const [paginaAtual, setPaginaAtual] = useState<number>(1);
  const itensPorPagina = 10;
  const inicio = (paginaAtual - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;
  const osPagina = ordensDeServico.slice(inicio, fim);
  const totalNumeroPaginacao = Math.ceil(
    ordensDeServico.length / itensPorPagina
  );

  const numeroPaginacao = useMemo(() => {
    if (totalNumeroPaginacao <= 1) return [];
    return Array.from({ length: totalNumeroPaginacao }, (_, i) => i + 1);
  }, [totalNumeroPaginacao]);

  return (
    <div className="bg-black p-4 text-white">
      <table
        className="table table-striped table-hover text-center table-bordered mt-5"
      >
        <colgroup>
          <col style={{ width: "40px" }} />
          <col style={{ width: "100px" }} />
          <col style={{ width: "250px" }} />
          <col style={{ width: "180px" }} />
          <col style={{ width: "60px" }} />
          <col style={{ width: "90px" }} />
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
                <td>{bus?.placa}</td>
                <td className="text-ellipsis">{os.descricao}</td>

                <td style={{ cursor: "pointer" }}>
                  {pecasDaOS.length === 0 ? (
                    <span className="text-muted">Nenhuma peça</span>
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

                <td>
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
                <td>{os.data_fechamento}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <ul>
          {numeroPaginacao.map((num) => (
            <button
              key={num}
              onClick={() => setPaginaAtual(num)}
              className={`btn me-2 mb-3 ${
                paginaAtual === num ? "btn-primary" : "btn-outline-primary"
              }`}
            >
              {num}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OS;
