import { onibus, ordensDeServico, pecas } from "../data/banco";

function getOSCompleta(id: number) {
  const os = ordensDeServico.find((i) => i.id === id);
  if (!os) return null;
  const bus = onibus.find((o) => o.id === os.onibus_id);
  const pecasDaOS = os.pecas.map((item) => ({
    ...item,
    info: pecas.find((p) => p.id === item.peca_id),
  }));
  return { os, bus, pecasDaOS };
}

export default getOSCompleta;
