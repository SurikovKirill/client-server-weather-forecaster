import { combineReducers } from 'redux'; 
import { cityReducer } from './city';
import {favouritesReducer} from './favourites'

export default combineReducers({
    cityReducer,
    favouritesReducer
})