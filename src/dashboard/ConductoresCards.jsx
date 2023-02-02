function ConductoresCards({ data }) {
  return (
    <>
      {data.map((lista,index) => (
        <>
        
          <tr key={lista.idConductor}>
            <td>
              <div className="d-flex justify-content-center">
                <img
                  src={`https://robohash.org/user${index}`}
                  className="rounded-circle"
                  width="90px"
                ></img>
              </div>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {lista.nombreCON}
              </p>
            </td>
            <td className="text-center align-middle text-sm">
              <span className="font-weight-bold text-xs font-weight-bold">
                {lista.nroTelefonoCON}
              </span>
            </td>
            <td className="text-center align-middle text-sm">
              <i className="bi bi-star me-1 fs-5 "></i>
              <i className="bi bi-star me-1 fs-5"></i>
              <i className="bi bi-star me-1 fs-5"></i>
              <i className="bi bi-star me-1 fs-5" style={{ width: "10%" }}></i>
              <i className="bi bi-star me-1 fs-5"></i>
              <i>{lista.calificacionCON }</i>
            </td>
            <td className="text-center align-middle">
              <span className="badge badge-sm bg-primary  ">
                {lista.disponibilidadCON}
              </span>
            </td>
          </tr>
          <tr></tr>
        </>
      ))}
    </>
  );
}

export default ConductoresCards;
