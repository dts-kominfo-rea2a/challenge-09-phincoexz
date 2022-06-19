// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({ data }) => {
    return (
        <div className='card'>
            <div className='card-body'>
            <div className='row'>
                <div className='col'>
                    <img src={data.photo} alt="profil picture" className='card-img'/>
                </div>
                <div className='col text-center'>
                    <h3>{data.name}</h3>
                    <p>{data.phone}</p>
                    <p>{data.email}</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;