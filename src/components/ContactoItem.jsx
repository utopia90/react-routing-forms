import React from 'react';
import PropTypes from 'prop-types';
import Contacto from '../models/Contacto';

const ContactoItem = ({contacto}) => {
    return (
        <div>
            <h5>{contacto.nombre}</h5>
            <h6>{contacto.email}</h6> 
        </div>
    );
};


ContactoItem.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoItem;
