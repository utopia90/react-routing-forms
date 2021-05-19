import React, {useState} from 'react';

const FormularioTareas = ({ crear }) => {

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    // Submit del formulario
    // Prevenir el comportamiento por defecto del evento
    // Ya que recarga la página por defecto
    const crearTarea = (e) => {
        e.preventDefault()
        if(titulo && descripcion){
            // Ejecutamos la función que viene por PROPS desde el Padre (ListaTareas)
            crear(titulo, descripcion)
        }
        // Reiniciamos los campos de Título y Descripción
        setTitulo('')
        setDescripcion('')
    }

    
    return (
        <form onSubmit={crearTarea}>
            {/* Titulo */}
            <input 
                placeholder='Título tarea'
                value={titulo}
                onChange={
                    (e) => setTitulo(e.target.value)
                }
            />

            {/* Descripción */}
            <input 
                placeholder='Descripción tarea'
                value={descripcion}
                onChange={
                    (e) => setDescripcion(e.target.value)
                }
            />

            {/* Botón para hacer Submit */}
            <button type="submit">
                Crear Nueva Tarea
            </button>

        </form>
    );
}

export default FormularioTareas;
