import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const url = "http://localhost:8000/api/equipos";

const EstadoJugador = () => {

    const {id: numerojugador} = useParams();

    const [jugadores, setJugadores] = useState([]);

    const get_all = () => {
        axios.get(url)
        .then(result => result.data)
        .then(response => {
            console.log("PLAYERS", response);
            setJugadores(response);
        })
            
    }

    

    useEffect(() => {
        get_all();
    }, [])

    const ModificarEstado = (id, value, accion) => {
        console.log("Actualizando: ",id);
        accion[parseInt(numerojugador) - 1] = value;
        axios.put(url + "/" + id, {
            accion
        })
        .then(result => result.data)
        .then(response => {
                    console.log(response);
                    get_all();
                })
    
    
    
    }
    return (
        <div>
            <div>

                <Link to="/lista" >Lista</Link> | <Link to="/" >Añadir jugador</Link>
                <h1>Estado jugador{parseInt(numerojugador)}</h1>
                <Link to="/estado/1" >jugador1</Link> | <Link to="/estado/2" > jugador 2</Link> | <Link to="/estado/3" > jugador 3</Link>
            </div>
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
                        
                            <td>
                                <button className={jugador.accion[parseInt(numerojugador)-1]==="jugando"? "btn btn-primary" : "btn btn-light"} onClick={(e) => ModificarEstado(jugador._id, "jugando", jugador.accion)} >jugando</button>
                            </td>
                            <td>
                                
                                <button className={jugador.accion[parseInt(numerojugador)-1]==="no jugando"? "btn btn-danger" : "btn btn-light"} onClick={(e) => ModificarEstado(jugador._id, "no jugando", jugador.accion)} >No esta jugando</button>
                            </td>
                            <td>
                                
                                <button className={jugador.accion[parseInt(numerojugador)-1]==="indeciso"? "btn btn-warning" : "btn btn-light"} onClick={(e) => ModificarEstado(jugador._id, "indeciso", jugador.accion)} >Indeciso</button>
                            </td>
                        
                                
                    </tr>
                    
                )) 
            }
            </tbody>
            </table>
        </div>
    )

}

export default EstadoJugador;