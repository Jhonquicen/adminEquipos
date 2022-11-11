import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";


const Lista = () => {

    const [jugadores, setJugadores] = useState([]);
    // const [equipos, setEquipos] = useState([]);


    const history = useHistory();


    useEffect(() => {
        axios.get("http://localhost:8000/api/equipos")

            .then(res => setJugadores(res.data))

            .catch(err => console.log(err));
    }, [])

    const guardarEstado = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/equipos", {


        })
            .then(res => history.push("/"))
            .catch(err => console.log(err.response.data.errors))
    }

    const borrarEquipos = id => {
        axios.delete("http://localhost:8000/api/equipos/" + id)
            .then(res => {
                //Actualizamos lista a través de filter
                let nuevaLista = jugadores.filter(jugador => jugador._id !== id);
                setJugadores(nuevaLista);
            })
    }




    return (
        <div className="container">
            <Link to="/lista" >Lista</Link> | <Link to="/" >Añadir jugador</Link> | <Link to="/estado" >Administrar jugadores</Link>
            <h1>Lista de jugadores - {guardarEstado}</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Nombre del equipo</th>

                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jugadores.map((jugador, index) => (

                            <tr key={index}>
                                <td><Link to="#">{jugador.nombre}</Link></td>
                                <td><p>{jugador.equipos}</p></td>
                                <td>
                                    {/* <Link to="/lista" className="btn btn-outline-danger" onClick={() => borrarEquipos(jugador._id)}>Eliminar</Link> */}
                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#deleteModal${jugador.nombre + index}`}>
                                        Borrar
                                    </button>

                                    <div className="modal fade" id={`deleteModal${jugador.nombre + index}`} tabIndex="-1" aria-labelledby={`deleteModal ${jugador.nombre + index}Label`} aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id={`deleteModal${jugador.nombre + index}Label`}>Confirmar Borrar</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    Está a punto de borrar a {jugador.nombre}
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                                    <button className="btn btn-danger" onClick={(e) => borrarEquipos(jugador._id)} data-bs-dismiss="modal">Borrar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}
export default Lista;