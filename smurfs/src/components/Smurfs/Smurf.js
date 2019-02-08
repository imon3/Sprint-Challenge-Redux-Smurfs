import React from 'react';
import './Smurf.css';

const Smurf = (props) => {

    return (
        <div className='smurf'>
            <div className='name-bold'>{props.smurf.name}</div>
            <div>{props.smurf.age}</div>
            <div>{props.smurf.height}</div>
        </div>
    )
}

export default Smurf;