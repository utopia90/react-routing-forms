import React from 'react';
import {useParams} from 'react-router-dom'

const TareaDetail = (props) => {

    const {id} = useParams()
    return (
        <div>
            {/* <h1>
            Tarea: {tarea.id} - {id}
            </h1>
            <h2>
                Titulo: {tarea.titulo}
            </h2>
            <h6>
                Descripción: {tarea.descripcion}
            </h6> */}

            <h1>ID : {id}</h1>
        </div>
    ); 
}

export default TareaDetail;
