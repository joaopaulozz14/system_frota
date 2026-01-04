import photo from "../assets/onibusfoto.jpeg";
import { onibus } from "../data/banco";

function Onibus() {
  return (
    <div
      className="d-flex justify-content-center flex-wrap gap-4 p-5 bg-light z-3 w-100"
      style={{
        width: "calc(100% - 250px)",
        height: "100%",
      }}
    >
      {onibus.map((bus) => (
        <div
          className="card bg-light p-5 my-5 text-dark border bg-white shadow"
          style={{ maxWidth: "400px", maxHeight: "450px" }}
        >
          <h4 className="pb-2">Onibus: {bus.placa}</h4>
          <img src={photo} alt="Onibus" className="card-img-top img-fluid" />
          <p className="pt-4">Marca: {bus.marca}</p>
          <p>Modelo: {bus.modelo}</p>
        </div>
      ))}
    </div>
  );
}

export default Onibus;
