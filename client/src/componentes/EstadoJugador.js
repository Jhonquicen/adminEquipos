import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const EstadoJugador = () => {

    const [jugadores, setJugadores] = useState([]);



    useEffect(() => {
        axios.get("http://localhost:8000/api/equipos")
            
            .then(res => setJugadores(res.data))
            
            .catch(err => console.log(err));
    }, [])

    const ModificarEstado = (id, valor) => {
        console.log(id, valor);
        axios.put("http://localhost:8000/api/equipos/"+ id,{
            "accion": valor
        })
        .then(res => {
            console.log(res)
            axios.get("http://localhost:8000/api/equipos")
            
            .then(res => setJugadores(res.data))
            
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err))
    }

    


    return (
        <div>
            <Link to="/lista" >Lista</Link> | <Link to="/" >Añadir jugador</Link>
            <h1>Estado jugador </h1>
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
                                <button className={jugador.accion==="jugando"? "btn btn-primary" : "btn btn-light"} onClick={(e) => ModificarEstado(jugador._id, "jugando")} >jugando</button>
                            </td>
                            <td>
                                {/* <button onClick={(e) => ModificarEstado(jugador._id, "no jugando")}>No jugando</button> */}
                                <button className={jugador.accion==="no jugando"? "btn btn-danger" : "btn btn-light"} onClick={(e) => ModificarEstado(jugador._id, "no jugando")} >No esta jugando</button>
                            </td>
                            <td>
                                {/* <button onClick={(e) => ModificarEstado(jugador._id, "indeciso")} className>Indeciso</button> */}
                                <button className={jugador.accion==="indeciso"? "btn btn-warning" : "btn btn-light"} onClick={(e) => ModificarEstado(jugador._id, "indeciso")} >Indeciso</button>
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