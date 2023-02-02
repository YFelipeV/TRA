import { useNavigate,Link } from "react-router-dom"
import {useState,useEffect} from 'react';

function Modal() {
    const [data, setData] = useState({});
    const navigate = useNavigate()
    useEffect(() => {
        const handlePatch = async () => {
            const response = await fetch(`/dashboard/admin/rechazarSolicitud/${idConductor}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
        
            const updatedData = await response.json();
            setData(updatedData);

        }
        handlePatch()
        console.log(response)
    },[])
    
        

  return (
      <>
      <div className="modal fade" id="escribir-motivo-rechazo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">Escriba el motivo del rechazo</h1>
                          <button onClick={() => {
                      navigate("/dashboard/solicitudes")
                     
                    }}
                             
          className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
                <textarea className="w-100" name="respuesta-pqrs" id="respuesta-pqrs" rows="10" onChange={(e)=> setData(e.target.value) }></textarea>
        </div>
        <div className="modal-footer">
                          <button type="submit" 
                     className="btn btn-primary">Confirmar Rechazo y enviar motivo</button>
        </div>
      </div>
    </div>
  </div>
      
      
      </>
  )
}

export default Modal