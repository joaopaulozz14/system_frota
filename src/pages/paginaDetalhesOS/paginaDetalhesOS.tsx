import { useLocation, useParams } from "react-router-dom";
import photo from "../../assets/onibusfoto.jpeg";
import type { PecaType } from "../../types/pecaType";
import type { OrdemServicoType } from "../../types/ordemServicoType";
import { historicoOS } from "../../data/banco";
import { FaCheck, FaPencilAlt, FaArrowRight } from "react-icons/fa";
import getOSCompleta from "../../utils/osUtils";

export default function PaginaDetalhesOS() {
  const { id } = useParams<{ id: string }>();
  const osCompleta = getOSCompleta(Number(id));

  /* type PecaDaOSType = {
    peca_id: number;
    quantidade: number;
    info?: PecaType;
  }; */
  /* const location = useLocation();
  const os: OrdemServicoType = location.state?.os;
  const bus = location.state?.bus;
  const pecasDaOS: PecaDaOSType[] = location.state?.pecasDaOS || []; */

  /*   console.log(pecasDaOS); */

  if (!osCompleta) {
    return <div>OS não encontrada</div>;
  }

  return (
    <div className="container-fluid bg-light p-4 h-100 d-flex flex-column align-content-start justify-content-start">
      <div className="d-flex justify-content-between">
        <h4>
          OS #{osCompleta.os.id} - {osCompleta.os.descricao}
        </h4>

        <div className="d-flex gap-1">
          <button
            type="button"
            className="btn btn-success d-flex align-items-center justify-content-start gap-2"
          >
            <FaCheck /> Finalizar OS
          </button>
          <button
            type="button"
            className="btn btn-primary d-flex align-items-center justify-content-start gap-2"
          >
            <FaPencilAlt /> Editar
          </button>
          <button
            type="button"
            className="btn btn-secondary d-flex align-items-center justify-content-start gap-2"
          >
            <FaArrowRight /> Voltar
          </button>
        </div>
      </div>
      <span>{osCompleta.os.status}</span>

      <div className="row mt-4">
        <div className="col-md-8">
          <div className="container-sm bg-white ms-0 mt-4 pt-2 pe-4 pb-2 ps-4 border rounded shadow-sm">
            <p className="border-1 border-bottom pb-2">
              <strong>Informações da OS</strong>
            </p>
            <div className="row">
              <div className="col">
                <p>
                  <strong>Onibus:</strong>
                </p>
                <p> {osCompleta.bus?.placa ?? "-"}</p>
              </div>
              <div className="col">
                <p>
                  <strong>KM na abertura:</strong>{" "}
                </p>
                <p>{osCompleta.os.km_registrado}</p>
              </div>
            </div>
            <div
              className="row border-1 border-bottom 
            "
            >
              <div className="col">
                <p>
                  <strong>Data de abertura:</strong>
                </p>
                <p>{osCompleta.os.data_abertura}</p>
              </div>
              <div className="col">
                <p>
                  <strong>Data de fechamento:</strong>
                </p>
                <p> {osCompleta.os.data_fechamento || "-"}</p>
              </div>
            </div>
            <p className="mt-2">{osCompleta.os.descricao}</p>
          </div>

          <div className="container-sm pt-3 ms-0 mt-4 border rounded shadow-sm bg-white table-responsive-sm">
            <p className="">
              <strong>Peças Utilizadas</strong>
            </p>
            <table className="table border">
              <thead className="table-light">
                <tr>
                  <th>Peça</th>
                  <th>Código</th>
                  <th>Categoria</th>
                  <th>Quantidade</th>
                </tr>
              </thead>
              <tbody>
                {osCompleta.pecasDaOS.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-muted text-center">
                      Nenhuma peça utilizada
                    </td>
                  </tr>
                ) : (
                  /*    pecasDaOS.map((p) => (
                    <tr key={p.peca_id}>
                      <td>{p.info?.nome || "-"}</td>
                      <td>{p.info?.codigo || "-"}</td>
                      <td>{p.info?.aplicacao || "-"}</td>
                      <td>{p.quantidade}</td>
                    </tr>
                  )) */
                  osCompleta.pecasDaOS.map((p) => (
                    <tr key={p.peca_id}>
                      <td>{p.info?.nome}</td>
                      <td>{p.info?.codigo}</td>
                      <td>{p.info?.categoria}</td>
                      <td>{p.quantidade}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="container-sm ms-0 pt-3 mt-4 border rounded shadow-sm bg-white">
            <p>
              <strong>Observações</strong>
            </p>
            <div>
              {osCompleta.os.observacoes.map((obs, index) => (
                <div key={index} className="mb-3 border-bottom pb-2">
                  <small className="text-muted">
                    {obs.data} - {obs.autor}
                  </small>
                  <p className="mb-0">{obs.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-4">
          <div className="container-sm d-flex flex-column align-items-center bg-white justify-content-around p-4 border rounded shadow-sm">
            <p>Onibus</p>
            <img
              src={photo}
              alt="Imagem do Ônibus"
              className="w-100"
            />
            <p>{osCompleta.bus?.placa || "-"}</p>
          </div>
          <div className="container-sm d-flex flex-column bg-white justify-content-around border rounded shadow-sm mt-4 pt-3 ps-3">
            <p>Histórico da OS</p>
            <ul>
              {historicoOS[osCompleta.os.id]?.map((h, index) => (
                <li key={index}>
                  {h.data} - {h.acao}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
