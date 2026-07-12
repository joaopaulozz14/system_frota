import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

/**
 * MODELO VISUAL – Página de Detalhe do Ônibus
 * Versão usando Bootstrap (Cards, Grid e Tables)
 */
export default function ModeloPaginaOnibus() {
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
            <Info label="Prefixo" />
            <Info label="Placa" />
            <Info label="Modelo" />
            <Info label="Status" />
            <Info label="KM Atual" />
            <Info label="Ano" />
            <Info label="Empresa" />
            <Info label="Última Revisão" />
          </div>
        </div>
      </div>

      {/* Métricas */}
      <div className="row g-3 mb-4">
        <Metric title="Total de OS" />
        <Metric title="Previsão troca de óleo" />
        <Metric title="KM médio / dia" />
        <Metric title="Custo mensal" />
      </div>

      {/* Histórico de OS */}
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="h6 mb-3">Histórico de Ordens de Serviço</h2>
          <div className="table-responsive">
            <table className="table table-sm align-middle">
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
                {[1, 2, 3].map(i => (
                  <tr key={i}>
                    <td>#000{i}</td>
                    <td>Descrição da OS</td>
                    <td>Fechado</td>
                    <td>74.500</td>
                    <td>28/01/2024</td>
                    <td>29/01/2024</td>
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
          <h2 className="h6 mb-3">Peças Utilizadas</h2>
          <div className="table-responsive">
            <table className="table table-sm">
              <thead className="table-light">
                <tr>
                  <th>Peça</th>
                  <th>Categoria</th>
                  <th>Quantidade</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2].map(i => (
                  <tr key={i}>
                    <td>Nome da peça</td>
                    <td>Motor</td>
                    <td>1</td>
                  </tr>
                ))}
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

function Info({ label }: { label: string }) {
  return (
    <div className="col-6 col-md-3">
      <div className="text-muted small">{label}</div>
      <div className="fw-semibold">—</div>
    </div>
  );
}

function Metric({ title }: { title: string }) {
  return (
    <div className="col-12 col-md-3">
      <div className="card h-100">
        <div className="card-body p-4">
          <span className="text-muted small">{title}</span>
          <p className="fs-4 fw-semibold mb-0">—</p>
        </div>
      </div>
    </div>
  );
}

