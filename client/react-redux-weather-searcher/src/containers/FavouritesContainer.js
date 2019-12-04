import React, {Component} from 'react';
import Search from '../components/Search';
import FavouritesList from '../components/FavouritesList';
import { connect } from 'react-redux';
import { addNewCityAsync, removeCity } from '../actions/favourites';

class FavouritesContainer extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCity(e.target.cityName.value);
        e.target[0].value = '';
    };

    handleRemove = (name) => {
        this.props.removeCity(name);
    };

    render() {
        return (
            <>
                <Search onSubmit={this.handleSubmit} />
                <FavouritesList cities={this.props.cities} onRemove={this.handleRemove} isLoading={this.props.isLoading} errors={this.props.errors}/>
            </>
        );
    }
}


FavouritesContainer.defaultProps = {
    cities: [],
    isLoading: [],
    errors: [],
    removeCity: f => f,
    addCity: f => f,
};

const mapStateToProps = ({ favouritesReducer: { cities, isLoading, errors } }) => ({
    cities,
    isLoading,
    errors,
});

const mapDispatchToProps = {
    addCity: addNewCityAsync,
    removeCity: removeCity,
};


export default connect(mapStateToProps, mapDispatchToProps)(FavouritesContainer);