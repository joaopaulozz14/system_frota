export default function NovaOS() {
  return (
    <div className="container-fluid bg-light p-4 h-100 d-flex flex-column align-content-start justify-content-start">
      <h4>Nova ordem de serviço</h4>
      <p>Preencha os dados para abrir uma nova OS.</p>
      <div className="d-flex justify-content-between">
        <form action="">

            <div className="d-flex justify-content-around">
                <div className="d-flex flex-column gap-2">
                    <label>Ônibus</label>
                    <select name="" id="">
                        <option value="">NRZ9013</option>
                        <option value="">NRZ9013</option>
                    </select>
                </div>


                <div className="d-flex flex-column gap-2">
                    <label>KM Registrado</label>
                    <input type="text" />
                </div>

            </div>
        </form>
      </div>
    </div>
  );
}

