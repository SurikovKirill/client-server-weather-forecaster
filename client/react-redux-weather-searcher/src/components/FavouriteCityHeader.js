import React from 'react';
import '../containers/FavouriteContainer.css'

const FavouriteCityHeader = ({ onRemove, city }) => (
    <div className='favCityHeader'>
        <h1>{city.name}</h1>
        {!!city.img && <img src={city.img} alt='Иконка погоды' />}
        {!!city.temperature && <h1>{city.temperature}</h1>}
        <button className='deleteButton' onClick={() => onRemove(city.name)}>X</button>
    </div>
);


export default FavouriteCityHeader;