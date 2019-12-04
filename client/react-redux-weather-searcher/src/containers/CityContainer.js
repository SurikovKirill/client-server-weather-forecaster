import React, {Component} from 'react';
import './CityContainer.css'
import WeatherInfo from '../components/WeatherInfo';
import Loader from '../components/Loader';
import CityComponent from '../components/CityComponent'
import Error from '../components/Error';

export default class CityContainer extends Component {
    render() {
        const { weather, isLoading, error } = this.props;
        return (
            <div className="Main">
                { error ?
                    <Error />
                    :
                    (isLoading
                    ? <Loader />
                    : (
                        <>
                            <CityComponent weather={weather} />
                            <WeatherInfo weather={weather} />
                        </>
                    ))
                }
            </div>
        );
    }
}