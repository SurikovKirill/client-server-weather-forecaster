import React from 'react';
import '../containers/CityContainer.css';

const CityComponent = ({ weather }) => (
    !!weather ?
        <div className="currentCity">
            <h1>
                {weather.name}
            </h1>
            <div className="additionalInfo">
                <img className="weatherImage" src={weather.img} alt='Иконка погоды'></img>
                <h1>
                    {weather.temperature}
                </h1>
            </div>
        </div>
        :
        null
);

export default CityComponent;