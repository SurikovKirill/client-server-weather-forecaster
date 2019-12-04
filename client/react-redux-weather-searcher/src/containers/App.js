import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initWeather } from '../actions/city';
import { initCities } from '../actions/favourites';
import './App.css';
import CityContainer from './CityContainer';
import FavouritesContainer from './FavouritesContainer';
import Header from '../components/Header';

class App extends Component {
  constructor(props) {
      super(props);
      props.initWeather();
      props.initCities();
  }

  geolocationWeather = () => {
      this.props.initWeather();
  };

  render() {
      const { isLoading, weather, error } = this.props;
      return (
          <div className='App'>
              <Header onUpdate={this.geolocationWeather}/>
              <CityContainer weather={weather} isLoading={isLoading} error={error}/>
              <FavouritesContainer/>
          </div>
      );
  }
}

const mapStateToProps = ({ cityReducer: { isLoading, error, weather } }) => {
  return {
      isLoading,
      error,
      weather,
  };
};
const mapDispatchToProps = {
  initWeather: initWeather,
  initCities: initCities,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);