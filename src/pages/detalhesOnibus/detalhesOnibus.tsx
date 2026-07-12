import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { onibus, ordensDeServico, pecas } from "../../data/banco";
import Info from "../../components/Info";
/**
 * MODELO VISUAL – Página de Detalhe do Ônibus
 * Versão usando Bootstrap (Cards, Grid e Tables)
 */

export default function DetalhesOnibus() {
  const navigate = useNavigate();
  const { id } = useParams();
  const bus = onibus.find((b) => b.id === Number(id));
  const busId = Number(id);

  const count = ordensDeServico.filter((b) => b.onibus_id === busId).length;
  const pecasDaOS = ordensDeServico
    .filter((os) => os.onibus_id === busId)
    .flatMap((os) => os.pecas);
  /* console.log(pecasDaOS); */

  const pecasInfo = pecasDaOS.map((item) => ({
    ...item,
    info: pecas.find((p) => p.id === item.peca_id),
  }));

  const uniquePecasInfo = Array.from(
    new Set(pecasInfo.map((p) => p.peca_id)),
  ).map((id) => pecasInfo.find((p) => p.peca_id === id)!);

  const camposInfo = [
    { label: "Placa", value: bus?.placa },
    { label: "Modelo", value: bus?.modelo },
    { label: "Marca", value: bus?.marca },
    { label: "Ano", value: bus?.ano },
    { label: "KM Atual", value: bus?.km_atual },
    { label: "Próxima Revisão", value: bus?.proxima_revisao },
    { label: "Status", value: bus?.status },
    { label: "KM Última Troca de Óleo", value: bus?.km_ultima_troca_oleo },
  ];
  if (!bus) {
    return (
      <div className="container-fluid p-4">
        <p>Ônibus não encontrado</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      {/* Cabeçalho */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 mb-0">Ônibus • Detalhes</h1>
        <Button variant="outline">Voltar</Button>
      </div>

      {/* Informações principais */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="row g-3">
            {camposInfo.map((c, i) => (
              <Info key={i} {...c} />
            ))}
          </div>
        </div>
      </div>

      {/* Métricas */}
      <div className="row g-3 mb-4">
        <Metric title="Total de OS" value={count} />
        <Metric title="Previsão troca de óleo" />
        <Metric title="KM médio / dia" />
        <Metric title="Custo mensal" />
      </div>

      {/* Histórico de OS */}
      <div
        className="card mb-4"
        style={{ maxHeight: "510px", overflowY: "auto" }}
      >
        <div className="card-body">
          <h2 className="h6 mb-3">Histórico de Ordens de Serviço</h2>
          <div className="table-responsive">
            <table className="table table-sm align-middle table-hover">
              <thead className="table-light">
                <tr>
                  <th>OS</th>
                  <th>Descrição</th>
                  <th>Status</th>
                  <th>KM</th>
                  <th>Abertura</th>
                  <th>Fechamento</th>
                </tr>
              </thead>
              <tbody>
                {ordensDeServico
                  .filter((i) => i.onibus_id === busId)
                  .map((i) => (
                    <tr
                      className="table-hover"
                      style={{ maxHeight: "50px", cursor: "pointer" }}
                      key={i.id}
                      onClick={() => navigate(`/os/${i.id}`)}
                    >
                      <td>#{i.id}</td>
                      <td>{i.descricao}</td>
                      <td>{i.status}</td>
                      <td>{i.km_registrado}</td>
                      <td>{i.data_abertura}</td>
                      <td>
                        {i.data_fechamento ? i.data_fechamento : "Em andamento"}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Peças utilizadas */}
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="h6 mb-3">Histórico de Peças Utilizadas</h2>
          <div className="table-responsive">
            <table className="table table-sm table-hover">
              <thead className="table-light">
                <tr>
                  <th>Peça</th>
                  <th>Categoria</th>
                  <th>Código</th>
                </tr>
              </thead>
              <tbody>
                {pecasDaOS.length === 0 ? (
                  <tr style={{ cursor: "pointer" }}>
                    <td colSpan={3} className="text-muted">
                      Nenhuma peça utilizada
                    </td>
                  </tr>
                ) : (
                  uniquePecasInfo.map((i) => (
                    <tr>
                      <td>{i.info?.nome}</td>
                      <td>{i.info?.categoria}</td>
                      <td>{i.info?.codigo}</td>
                    </tr>
                  ))
                )}
                {/* <tr key={i.peca_id}>
                      <td>{i.peca_id}</td>
                      <td>{i.quantidade}</td>
                    </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Manutenção preventiva */}
      <div className="card">
        <div className="card-body">
          <h2 className="h6 mb-2">Manutenção Preventiva</h2>
          <ul className="small">
            <li>Troca de óleo prevista para XX.XXX km</li>
            <li>Revisão geral em 30 dias</li>
            <li>Pastilhas de freio em observação</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Metric({ title, value }: { title: string; value?: string | number }) {
  return (
    <div className="col-12 col-md-3">
      <div className="card h-100">
        <div className="card-body p-4">
          <span className="text-muted small">{title}</span>
          <p className="fs-4 fw-semibold mb-0">{value}</p>
        </div>
      </div>
    </div>
  );
}
