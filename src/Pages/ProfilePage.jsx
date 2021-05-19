import React from 'react';
import {useLocation, useHistory} from 'react-router-dom'
 
const ProfilePage = () => {

    const location = useLocation();
    const history = useHistory();
    console.log('estamos en la ruta', location.pathname )

    const navegar = (ruta) => {
           history.push('/')
    }

    const volver = (ruta) => {
        history.goBack()
 }
    return (
        <div>
            <h1>PROFILE PAGE</h1>
            <button onClick={() => navegar('/')}>Navegar a Home</button>
            <button onClick={() => volver()}>Volver</button>
        </div>


    );
}

export default ProfilePage;
