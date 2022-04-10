import './Card.css';
import React from 'react';

const Card = ({Description, Image_URL}) =>
{
    return (<div className='Card'><img className='Thumbnail' alt={Description} src={Image_URL} /></div>);
}

export default Card;