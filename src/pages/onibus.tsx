import photo from "../assets/onibusfoto.jpeg";
import { onibus } from "../data/banco";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Onibus() {
  return (
    <div
      className="d-flex justify-content-center flex-wrap gap-4 p-5 bg-light z-3 w-100"
      style={{
        height: "100%",
      }}
    >
      {onibus.map((bus) => (
        <Nav.Link
          as={NavLink}
          to={`/onibus/${bus.id}`}
          className="d-flex align-items-center justify-content-start ms-2 gap-2"
        >
          <div
            className="card bg-light p-5 my-5 text-dark border bg-white shadow"
            style={{ maxWidth: "400px", maxHeight: "450px" }}
          >
            <h4 className="pb-2">Onibus: {bus.placa}</h4>
            <img src={photo} alt="Onibus" className="card-img-top img-fluid" />
            <p className="pt-4">Marca: {bus.marca}</p>
            <p>Modelo: {bus.modelo}</p>
          </div>
        </Nav.Link>
      ))}
    </div>
  );
}

export default Onibus;
