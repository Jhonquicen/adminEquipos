import React, { useState} from "react";
import axios from "axios";
import {Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


const TodosEquipos = () => {
    const [equipos, setEquipos] = useState("");
    const [nombre, setNombre] = useState("");

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const guardarEquipo = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/equipos", {
            nombre,
            equipos,
            "accion":"indeciso"
        })
            .then(res => history.push("/lista"))
            .catch(err =>{
                setErrors(err.response.data.errors)
                console.log(err.response.data.errors)
            } )
    }


    
    return (
        <div>
            <div className="border border-dark border border-5 rounded-3 p-3 mb-2">
                <Link to="/estado" >Administrar jugadores</Link> | <Link to="/estado" >Administrar el estado del jugador</Link>
                <div className="border border-dark border border-5 rounded-3 p-3 mb-2">
                    
                    <Link to="/lista" >Lista</Link> | <Link to="/" >Añadir jugador</Link>
                    
                    <form onSubmit={guardarEquipo}>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre del jugador:</label>
                            <input type="text" id="nombre" name="nombre" value={nombre} onChange={e => setNombre(e.target.value)} className="form-control" />
                            {errors.nombre ? <span className="text-danger">{errors.nombre.message}</span>: null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="equipos">posición del jugador:</label>
                            <input type="text" id="equipos" name="equipos" value={equipos} onChange={e => setEquipos(e.target.value)} className="form-control" />
                            {errors.equipos ? <span className="text-danger">{errors.equipos.message}</span>: null}
                        </div>
                        <input type="submit" className="btn btn-success" value="Agregar" />
                    </form>
                </div> 
            </div>

        </div>
    )

}


export default TodosEquipos;