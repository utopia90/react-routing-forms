import React from 'react';
import { Redirect } from 'react-router-dom';




const PrivatePage = () => {


    let logged = false;


    return logged ? 
    
    
    (
        <div>
            <h1>
                CONTENIDO PRIVADO
            </h1>
        </div>
    ):
    (
        <Redirect to='/'></Redirect>
    )
}

export default PrivatePage;
