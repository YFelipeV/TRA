import {useNavigate} from "react-router-dom";

function SolicitudesCards({ data }) {
  const navigate= useNavigate()
  return (
    <>
      
      {data.map((lista, index) => (
        <>
          <tr key={lista.id}>
            <td >
              <div className="d-flex justify-content-center">
                <img src={`https://robohash.org/user${index}`} alt="" className="rounded-circle" width="50%"></img>
              </div>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Nombre</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {lista.nombreCON}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>N° Telefono</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {lista.nroTelefonoCON}
              </p>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Cedula</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {lista.nroDocumentoCON}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Correo</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {lista.correoElectronicoCON}
              </p>
            </td>
            <td className="text-center align-middle">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Direccion de residencia</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {lista.DireccionResidenciaCON}
              </p>
            </td>
            <td>
              <div className="text-center" style={{ marginTop: "10%" }}>
                <a
                  href=""
                  className="m-0 p-0 text-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#mas-datos"
                >
                  Mostrar mas datos
                </a>
                <div className="mt-2">
                  <button className="btn btn-primary mb-2 mx-2">Aceptar</button>
                  <button
                    className="btn btn-secondary mb-2"
                    data-bs-toggle="modal"
                    data-bs-target="#escribir-motivo-rechazo"
                    onClick={() => {
                      navigate(`/admin/rechazarSolicitud/${lista.idConductor}`)
                     console.log(lista.idConductor); 
                    }}
                  >
                    Rechazar
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr></tr>
        </>
      ))}
    </>
  );
}

export default SolicitudesCards;
