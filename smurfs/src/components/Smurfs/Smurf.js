import React from 'react';

const Smurf = (props) => {
    console.log(props)
    return (
        <div>
            <div>{props.smurf.name}</div>
            <div>{props.smurf.age}</div>
            <div>{props.smurf.height}</div>
        </div>
    )
}

export default Smurf