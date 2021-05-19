import React from 'react';
import {useLocation} from 'react-router-dom'

const HomePage = () => {
    
    const location = useLocation();
    console.log('estamos en la ruta', location.pathname )
    return (
        <div>
            <h1>HOMEPAGE</h1>
        </div>
    );
}

export default HomePage;
