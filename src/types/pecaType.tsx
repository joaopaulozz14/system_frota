export type PecaType = {
  id: number;
  nome: string;
  codigo: string;
  fabricante: string;
  descricao: string;
  unidade: string;
  onibus_id?: number;
  status: "Em estoque" | "Baixo estoque" | "Esgotado";
  categoria: string;
  valor: number;
};
