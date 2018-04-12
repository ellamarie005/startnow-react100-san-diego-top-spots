import React from 'react';

export default props => (
    <div className='card'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a href={`https://maps.google.com/?q=${props.location}`}>Google Map</a>
    </div>

);