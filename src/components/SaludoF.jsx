import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/Saludo.css';
import '../styles/Saludo.scss';


// Constantes para aplicar estilos
const loggedStyle = {
    color: 'green',
    fontWeight: 'bold'
}

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}


function SaludoF(props) {

    // Primer y esencial HOOK en Componentes funcionales
    // const [estado, función para actualizar estado] = useState(valor inicial estado)
    const [edad, setEdad] = useState(20);
    // Estado para saber si el usuario está logueado: "logged"
    const [logged, setLogged] = useState(false);

    // Lista de la compra:
    const listaCompra = [
        'carne', 'pescado', 'pasta', 'patatas', 'fruta'
    ]

    // Este método sería el Handler del evento de click
    // en el botón
    const aumentarEdad = () => {
        let nuevaEdad = edad + 1;
        setEdad(nuevaEdad)
    }

    // Método para cambiar Logged de true <=> false
    const cambiarLogged = () => {
        setLogged(!logged);
    }

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            <h1>
                ¡Hola, {props.nombre}!
            </h1>
            <h3>
                Tienes {edad} años
            </h3>

            {/* Iteración en Array/lista de elementos para pintar
                un mismo elemento/componente varias veces con diferentes
                datos
            */}
            <ul>
                { listaCompra.map((valor, index) => {
                    return (
                        <li key = {index}>
                            {valor}
                        </li>
                    )}) 
                }
            </ul>
            
            {/* Ejemplo de Renderizado condicional */}
            { logged ? 
                <div>
                    <p>Mensaje secreto</p>
                </div> 
                : null 
            }

            {/* <button onClick={ () => setEdad(21) }>
                Aumentar la edad
            </button> */}
            <button onClick={ aumentarEdad }>
                Aumentar la edad
            </button>

            {/* Botón que cambie de texto según el valor de logged
                Login <-> Logout
                cada vez que se pulse
            */}
            <button onClick={ cambiarLogged }>
                { logged ? 'Logout' : 'Login' }
            </button>

        </div>
    )
}

SaludoF.propTypes = {
    nombre: PropTypes.string.isRequired
}

export default SaludoF

