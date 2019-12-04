import React from 'react';
import '../containers/FavouriteContainer.css'

const Search = ({ onSubmit = f => f }) => (
    <div className='search'>
        <h1>
            Избранное
        </h1>
        <form onSubmit={onSubmit}>
            <input className='searchInput' placeholder='Добавить новый город' name='cityName' required='required'/>
            <button className='searchButton' type='submit'></button>
        </form>
    </div>
);

export default Search;