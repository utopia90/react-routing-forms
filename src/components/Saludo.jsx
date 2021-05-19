import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Saludo extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            email: 'martin@imaginagroup.com',
            edad: 20,
            fecha: new Date()
        }
    }

    // ComponentDidMount se ejecuta cuando el componente está listo
    // Es aquí dónde haríamos peticiones asíncronas etc.
    componentDidMount = () => {
        // Actualizamos el State cada Segundo a través de Tick()
        this.timerID = setInterval(() => 
            this.tick(), 
            1000
        )
    }

    // Cuando vaya a desaparecer el componente, quitamos el intervalo
    componentWillUnmount = () => {
        clearInterval(this.timerID)
    }

    // Cambiar la fecha cada segundo
    tick = () => {
        this.setState((prevState) => {
            // Aumentamos edad
            let edad = prevState.edad + 1
            // Devolvemos un *estado nuevo*
            return {
                ...prevState, // pasando todo el estado anterior
                edad, // edad: edad -> Actualizada
                fecha: new Date() // -> Actualizada
            }
        })
    }

    // aumenterValor = () => {
    //     this.setState(
    //         {
    //             edad: 21
    //         }
    //     )
    // }

    render() {
        return (
            <div>
                <h1>
                    ¡Hola, {this.props.nombre}!
                </h1>
                <h2>
                    Hora Actual:
                    {this.state.fecha.toLocaleTimeString()}
                </h2>
                <h3>
                    Tienes {this.state.edad} años
                </h3>
                {/* Botón para aumentar el valor */}
                {/* <button onClick={this.aumenterValor}>
                    Aumentar Valor
                </button> */}
            </div>
        )
    }
}

Saludo.propTypes = {
    nombre: PropTypes.string.isRequired
}

export default Saludo