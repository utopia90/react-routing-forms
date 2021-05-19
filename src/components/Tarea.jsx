import React from 'react'
import PropTypes from 'prop-types';


const Tarea = ({tarea,cambiar,eliminar, index}) => {
    return (
        <div>
            <h1 style= {{color: tarea.completada? 'green' : 'tomato'}}>{tarea.titulo}</h1>
            <button onClick={() => eliminar(index)}>Borrar</button>
            <button onClick={() => cambiar(index)}>Actualizar</button>
        </div>
    );
};


Tarea.propTypes = {
    index:PropTypes.number.isRequired,
    eliminar:PropTypes.func.isRequired,
    cambiar:PropTypes.func.isRequired,
    tarea:PropTypes.object.isRequired

};


export default Tarea;
