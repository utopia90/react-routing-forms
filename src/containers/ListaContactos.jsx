import React from 'react';
import PropTypes from 'prop-types';

import ContactoItem from '../components/ContactoItem';

const ListaContactos = ({contactos}) => {
    return (
        <div>
            <h2>Lista de Contactos</h2>
            {contactos ? 
                contactos.map((contacto, index) => {
                    return (
                        <ContactoItem key={index} contacto={contacto} />
                    )
                })
                :
                <p>No tienes contactos</p> 
            }
        </div>
    );
};

ListaContactos.propTypes = {
    contactos: PropTypes.arrayOf(
        PropTypes.shape(
            {
                nombre: PropTypes.string.isRequired,
                email: PropTypes.string.isRequired
            }
        )
    )
};


export default ListaContactos;
