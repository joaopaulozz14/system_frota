import { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import {
  House,
  Gear,
  People,
  Truck,
  Paperclip,
  Tools,
} from "react-bootstrap-icons"; // Opcional: para ícones
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar
        className="vh-100 position-sticky bg-white border-end"
        style={{ width: "250px", left: 0, top: 0 }}
      >
        <Container className="flex-column  vh-100  justify-content-start align-items-start">
          <Navbar.Brand
            href="#home"
            className=" w-100 text-center text-secondary d-flex align-items-center justify-content-center fw-bold "
            style={{ height: "76px" }}
          >
            Prefeitura de Corumbá
          </Navbar.Brand>

          <div className="w-100 border-top border-black mb-3"></div>

          <Nav className="flex-column">
            <div
              className="mb-3 text-secondary fw-bold"
              style={{ fontSize: "14px" }}
            >
              Menu principal
            </div>
            <Nav.Link
              href="/home"
              className="d-flex align-items-center justify-content-start ms-2 gap-2"
            >
              <House /> Dashboard
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/onibus"
              className="d-flex align-items-center justify-content-start ms-2 gap-2"
            >
              <Truck /> Veículos
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/os"
              className="d-flex align-items-center justify-content-start ms-2 gap-2"
            >
              <Paperclip /> OS
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/pecas"
              className="d-flex align-items-center justify-content-start ms-2 gap-2"
            >
              <Tools /> Lista de Peças
            </Nav.Link>
          </Nav>

          <Nav className="flex-column">
            <div
              className="mb-3 mt-4 text-secondary fw-bold"
              style={{ fontSize: "14px" }}
            >
              Configurações
            </div>
            <Nav.Link
              href="/home"
              className="d-flex align-items-center justify-content-start ms-2 gap-2"
            >
              <Gear /> Sistema
            </Nav.Link>
            <Nav.Link
              href="/vehicles"
              className="d-flex align-items-center justify-content-start ms-2 gap-2"
            >
              <People /> Usuários{" "}
            </Nav.Link>
          </Nav>

          <div className="w-100 mt-auto mb-3 d-flex align-items-center flex-row border-top pt-3 border-black">
            <img
              src=""
              alt="profile image"
              className="rounded-circle bg-black"
              width={40}
              height={40}
            />

            <div className="d-flex flex-column ms-2 text-secondary">
              <span className="fw-bold">Juliana Albuquerque</span>
              <p className="mb-0" style={{ fontSize: "12px" }}>
                Admin
              </p>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
