type ObservacaoOS = {
  data: string;
  autor: string;
  texto: string;
};

export type OrdemServicoType = {
  id: number;
  onibus_id: number;
  descricao: string;
  status: "Aberto" | "Em andamento" | "Fechado";
  km_registrado: number;

  data_abertura: string;
  autor_abertura: string;

  data_fechamento: string | null;

  pecas: {
    peca_id: number;
    quantidade: number;
  }[];

  observacoes: ObservacaoOS[];
};
