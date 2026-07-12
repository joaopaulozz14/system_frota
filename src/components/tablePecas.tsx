import { useMemo, useState } from "react";
import {  pecas } from "../data/banco";
import { PencilSquare, TrashFill } from "react-bootstrap-icons";
function TablePecas() {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 10;
  const inicio = (paginaAtual - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;
  const pecasPagina = pecas.slice(inicio, fim);

  const totalNumeroPaginacao = Math.ceil(pecas.length / itensPorPagina);
  const numeroPaginacao = useMemo(() => {
    return Array.from({ length: totalNumeroPaginacao }, (_, i) => i + 1);
  }, [totalNumeroPaginacao]);

  return (
    <div className="bg-white p-3 rounded shadow-sm">
      <table className="table table-responsive text-center align-middle table-hover">
        <colgroup>
          <col style={{ width: "20px" }} />
          <col style={{ width: "60px" }} />
          <col style={{ width: "150px" }} />
          <col style={{ width: "20px" }} />
          <col style={{ width: "50px" }} />
          <col style={{ width: "60px" }} />
          <col style={{ width: "60px" }} />
          <col style={{ width: "50px" }} />
        </colgroup>
        <thead>
          <tr>
            <th>Peça</th>
            <th>Código</th>
            <th>Aplicação</th>
            <th>Fabricante</th>
            <th>Categoria</th>
            <th>Valor</th>
            <th>Status</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {pecasPagina.map((peca) => {
            return (
              <tr key={peca.id} className="text-ellipsis">
                <td className="text-ellipsis" title={peca.nome}> {peca.nome}</td>
                <td title={peca.codigo}>{peca.codigo}</td>
                {/* <td  className="text-ellipsis" title={peca.descricao}>
                  {peca.descricao}
                </td> */}
                 <td className="text-center">
                  {peca.aplicacao === undefined ? (
                    <span className="text-muted form-select form-select-sm">
                      Nenhuma peça
                    </span>
                  ) : (
                    <select className="form-select form-select-sm text-ellipsis">
                      {peca.aplicacao.map((p) => (
                        <option key={p.id} value={p.id} style={{textAlign: "center"}}>
                          {p.modelo}
                        </option>
                      ))}
                    </select>
                  )}
                </td>
                <td>{peca.fabricante}</td>
                <td>{peca.categoria}</td>

                <td>R$ {peca.valor}</td>
                <td className="status-cell">
                  <span
                    className={`badge ${
                      peca.status === "Esgotado"
                        ? "bg-danger"
                        : peca.status === "Em estoque"
                        ? "bg-success"
                        : "bg-warning"
                    }`}
                  >
                    {peca.status}
                  </span>
                </td>
                <td>
                  <PencilSquare
                    size={15}
                    color="#828282"
                    className="text-primary"
                    style={{ cursor: "pointer" }}
                  />
                  <TrashFill
                    size={15}
                    color="#828282"
                    className="ms-3 text-primary"
                    style={{ cursor: "pointer" }}
                  />
                </td>
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

export default TablePecas;
