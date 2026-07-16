import { useState } from "react";
import { pecas } from "../../data/banco";

export default function NovaOS() {
  const [showPecasSection, setShowPecasSection] = useState(false);
  const [pecasSelecionadas, setPecasSelecionadas] = useState<string[]>([]);

  const handlePecaSelecionada = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setShowPecasSection(!showPecasSection);
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value,
    );
    setPecasSelecionadas([...pecasSelecionadas, ...values]);
  };
  return (
    <div className="container-fluid bg-light p-4 h-100">
      <div className="mb-4">
        <h4 className="mb-2">Nova ordem de serviço</h4>
        <p className="text-muted mb-0">
          Preencha os dados para abrir uma nova OS.
        </p>
      </div>

      <form className="form-container">
        {/* Campos principais */}
        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <label htmlFor="onibus" className="form-label">
              Ônibus
            </label>
            <select id="onibus" name="onibus" className="form-select">
              <option value="">Selecione um ônibus</option>
              <option value="NRZ9013">NRZ9013</option>
              <option value="NRZ9014">NRZ9014</option>
            </select>
          </div>

          <div className="col-md-3">
            <label htmlFor="km" className="form-label">
              KM Registrado
            </label>
            <input
              id="km"
              type="text"
              className="form-control"
              placeholder="0,00"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="descricao" className="form-label">
              Descrição
            </label>
            <input
              id="descricao"
              type="text"
              className="form-control"
              placeholder="Descreva o problema"
            />
          </div>
        </div>
        {/** Peças utilizadas */}

        <div className="pecas-section mb-4">
          <h6>Peças Utilizadas</h6>

          <div className="row g-3 mb-3">
            <button
              type="button"
              onClick={() => setShowPecasSection((prev) => !prev)}
            >
              Selecionar Peças
            </button>

            <div
              className={`col-md-6 pecas-section-select ${showPecasSection ? "d-block" : "d-none"}`}
            >
              <label htmlFor="pecas">Peças</label>
              <select
                multiple
                name="pecas"
                id="pecas"
                className="form-select"
                value={pecasSelecionadas}
                onChange={handlePecaSelecionada}
              >
                {pecas.map((peca) => (
                  <option key={peca.id} value={peca.nome}>
                    {peca.nome}
                  </option>
                ))}
              </select>
            </div>

            <button type="button" className="btn btn-outline-primary">
              Catalogar nova peça
            </button>

            {pecasSelecionadas.length > 0 && (
              <div className="col-md-12">
                <h6>Peças Selecionadas</h6>
                {pecasSelecionadas.map((peca, index) => {
                  return <div key={index}>{peca}</div>
                })}
              </div>
            )}
          </div>
        </div>
        {/* Observações */}
        <div className="observacoes-section">
          <h6 className="mb-3">Observações</h6>

          <div className="row g-3 mb-3">
            <div className="col-md-3">
              <label htmlFor="data" className="form-label small">
                Data
              </label>
              <input id="data" type="date" className="form-control" />
            </div>
            <div className="col-md-3">
              <label htmlFor="autor" className="form-label small">
                Autor
              </label>
              <input
                id="autor"
                type="text"
                className="form-control"
                placeholder="Nome do autor"
              />
            </div>
          </div>

          <div>
            <label htmlFor="texto" className="form-label small">
              Texto
            </label>
            <textarea
              id="texto"
              rows={4}
              className="form-control"
              placeholder="Digite suas observações..."
            ></textarea>
          </div>
        </div>

        {/* Botões */}
        <div className="d-flex gap-2 mt-4">
          <button type="submit" className="btn btn-primary">
            Salvar OS
          </button>
          <button type="reset" className="btn btn-secondary">
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
}
