import React, {useState} from 'react';

const MouseColor = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const [stop, setStop] = useState(false);

    // Definifición de estilo inicial para el DIV
    const divStyle = {
        width: 1000,
        height: 400,
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
    }

    const colorRandom = (e) => {
        if(!stop){
            let newRedColor = Math.floor(Math.random()*255)
            let newGreenColor = Math.floor(Math.random()*255)
            let newBlueColor = Math.floor(Math.random()*255)
            setRed(newRedColor)
            setGreen(newGreenColor)
            setBlue(newBlueColor)
        }
    }


    const capturarRaton = (e) => {

        // RGB -> 0 <--> 255 
        // 0 ausencia de color => 0,0,0 es negro
        // 255 es la totalidad de color => 255, 255, 255 es blanco

        // e.clientX => Posición del ratón en X
        // e.clientY => Posición del ratón en Y
        // e.target.clientWidth => La anchura del DIV
        // e.target.clientHeight => La altura del DIV
        // e.target.offsetTop => Offset por encima del DIV

        if(!stop){
            // Generamos colores a partir de la posición X e Y
            // Cambiaremos el Rojo y el Verde, dejando el Azul igual
            // El rojo Cambia con el cambio en las X
            // El verde cambia con el cambio en las Y
            let newRed = Math.trunc(e.clientX*255 / e.target.clientWidth)
            let newGreen = Math.trunc(
                (e.clientY - e.target.offsetTop)*255 / e.target.clientHeight)
            setRed(newRed)
            setGreen(newGreen)
        }
    }

    const pararColor = () => {
        setStop(!stop)
    }


    return (
        <div 
            style={divStyle}
            onMouseEnter={colorRandom}
            onMouseMove={capturarRaton}
            onDoubleClick={pararColor}
        >
            
        </div>
    );
}

export default MouseColor;
