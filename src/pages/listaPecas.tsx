import { pecas } from "../data/banco";
import { onibus } from "../data/banco";

export default function ListaPecas() {
  return (
    <div
      className="container py-5 bg-light"
       style={{
      }}
    >
      <h2 className="text-center mb-4">Lista de Peças</h2>

      <div className="row g-4">
        {pecas.map((peca) => {
          const bus = onibus.find((o) => o.id === peca.onibus_id);

          return (
            <div key={peca.id} className="col-12 col-md-6 col-lg-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{peca.nome}</h5>
                  <p className="text-muted mb-1">Código: {peca.codigo}</p>
                  <p className="text-muted mb-1">Marca: {peca.fabricante}</p>
                  <p className="small mb-2">{peca.descricao}</p>

                  <span className="badge bg-primary me-2">
                    Unidade: {peca.unidade}
                  </span>

                  {bus ? (
                    <span className="badge bg-success">
                      Ônibus: {bus.placa} - {bus.modelo}
                    </span>
                  ) : (
                    <span className="badge bg-secondary">Peça Genérica</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
