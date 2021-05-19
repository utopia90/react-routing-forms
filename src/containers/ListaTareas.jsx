import React, {useState, useEffect} from 'react';
import FormularioTareas from '../components/FormularioTareas';
import Tarea from '../components/Tarea';

const ListaTareas = () => {

    // Lista de tareas iniciales
    const [tareas, setTareas] = useState(
        [
            {
                titulo: 'Tarea 1',
                descripcion: 'Mi primera tarea',
                completada: false
            },
            {
                titulo: 'Tarea 2',
                descripcion: 'Mi segunda tarea',
                completada: false
            }
        ]
    );
    
    // Contador de Tareas Incompletas
    const [tareasIncompletas, setTareasIncompletas] = useState(0);


    // Nada más empezar, tenemos que ver cuántas tareas incompletas hay
    // para actualizar el valor del estado 'tareasIncompletas'
    useEffect(() => {
        setTareasIncompletas(
            tareas.filter((tarea) => !tarea.completada).length)
    });


    // Crear Tareas
    const crearTarea = (titulo, descripcion) => {
        // Obtenemos la nueva lista, añadiendo la nueva tarea
        const nuevaLista = [...tareas, {
            titulo,
            descripcion,
            completada: false
        }]
        // La setamos como nuevo estado
        setTareas(nuevaLista)
    }

    // Cambiar el estado de una tarea
    const cambiarEstado = (index) => {
        const nuevaLista = [...tareas]
        nuevaLista[index].completada = !nuevaLista[index].completada
        setTareas(nuevaLista)
    }

    // Eliminar una tarea de la lista
    const eliminarTarea = (index) => {
        const nuevaLista = [...tareas]
        nuevaLista.splice(index, 1)
        setTareas(nuevaLista)
    }


    return (
        <div>
            {/* Lista de tareas */}
            <div>
                {tareas.map((tarea, index) => (
                <Tarea key={index} index={index} tarea={tarea}
                cambiar={cambiarEstado} eliminar={eliminarTarea}/>
                ))}
                         
           {tareasIncompletas == 0 ?

           <h3>Tienes {tareasIncompletas} tareas por completar</h3>
            : 
            <h3>No tienes tareas por completar</h3>
           }
            </div>

            {/* Formulario para crear tareas */}
            <div>
                <FormularioTareas crear={crearTarea} />
            </div>
            </div>
    );
}

export default ListaTareas;
