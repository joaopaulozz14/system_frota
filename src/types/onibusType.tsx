export type OnibusType = {
  id: number;
  placa: string;
  modelo: string;
  marca: string;
  ano: number;
  km_atual: number;
  proxima_revisao: string;
  status: string;
  km_ultima_troca_oleo?: number;
};
