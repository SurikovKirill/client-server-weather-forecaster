
import WeatherHandler from './WeatherHandler';
const url = 'http://127.0.0.1:8000/';

export function initCities() {
    return async (dispatch) => {
        // let cities = localStorage.getItem('cities');
        // cities = JSON.parse(cities);
        // if (cities === null){
        //     cities = [];
        // }
        let cities = await fetch(`${url}favourites`);
        cities = await cities.json();
        console.log(cities);
        cities.map(async localStorageCity => {
            console.log(localStorageCity.name);
            dispatch(addNewCityLoading(localStorageCity.name, true));
            dispatch(addNewCity({name: localStorageCity.name}));
            const { weather, done } = await WeatherHandler.getWeatherByCityName(localStorageCity.name);
            console.log(done);
            if (done) {
                dispatch(updateCity(weather));
                dispatch(addNewCityLoading(localStorageCity.name, false));
            } else {
                dispatch(loadingError(localStorageCity.name));
            }
            
        });
    };
}

export function addNewCityAsync(newCity) {
    return async (dispatch) => {
        // let tmp = localStorage.getItem('cities');
        // tmp = JSON.parse(tmp);
        // if (tmp === null){
        //     tmp = [];
        // }
        let response = await fetch(`${url}favourites`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ name: newCity.toLowerCase()}),
        });
        if (response.status === 406){
            alert("Такой город уже существует в списке"); 
            return;
        }
        else {
            dispatch(addNewCityLoading(newCity.toLowerCase(), true));
            dispatch(addNewCity({name: newCity.toLowerCase()}))
            const { weather, done } = await WeatherHandler.getWeatherByCityName(newCity.toLowerCase());
            if (done) {
                //dispatch(addNewCity(weather));
                // tmp.push(newCity);
                // localStorage.setItem('cities', JSON.stringify(tmp));
                dispatch(updateCity(weather));
                dispatch(addNewCityLoading(newCity.toLowerCase(), false));  
            } 
            else {
                // tmp.push(newCity);
                // localStorage.setItem('cities', JSON.stringify(tmp));
                dispatch(loadingError(newCity));
                //dispatch(addNewCityLoading(newCity, false)); 
            }
        }

        // if (tmp.includes(newCity)){
        //     alert("Такой город уже существует в списке"); 
        //     return;
        // }
        // else{
            
        //}
    };
}

export function addNewCity(city) {
    return ({
        type: 'ADD_NEW_CITY', 
        payload: {city}
    });
}

export function removeCity(name) {
    // let tmp = localStorage.getItem('cities');
    // tmp = JSON.parse(tmp);
    // tmp.splice(tmp.findIndex(c => c === name), 1);
    // localStorage.setItem('cities', JSON.stringify(tmp));
    // axios({
    //     method: 'delete',
    //     url: `${url}favourites`,
    //     headers: {
    //         'Content-Type': 'application/json;charset=utf-8'
    //     },
    //     data: {
    //         "name": name
    //     }
    // });
    fetch(`${url}favourites`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({"name": name.toLowerCase()}),
    })
    return ({
        type: 'REMOVE_CITY', 
        payload: {name} 
    });
}

export function updateCity(city) {
    return ({
        type: 'UPDATE_CITY', 
        payload: {city} 
    });
}

export function addNewCityLoading(name, isLoading) {
    return ({
        type: 'ADD_NEW_CITY_LOADING',
        payload: {
            name,
            isLoading
        }
    });
}

export function loadingError(name) {
    return ({
        type: 'LOADING_ERROR',
        payload: {name}
    });
}