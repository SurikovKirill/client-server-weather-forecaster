import WeatherHandler from './WeatherHandler';

export function initWeather() {
    return async (dispatch) => {
        dispatch(loadingStart());
        const { weather, done } = await WeatherHandler.geolocationWeather();
        if (done) {
            dispatch(loadingSuccess(weather));
        } else {
            dispatch(loadingError());
        }
    };
}

export function loadingStart() {
    return ({
        type: 'CITY_LOADING' ,
        payload: { 
            isLoading: true,
            error: false,
            weather: {}
        }
    });
}

export function loadingSuccess(weather) {
    return ({
        type: 'CITY_LOADING_SUCCESS', 
        payload: {
            isLoading: false,
            error: false, 
            weather: weather
        }
    });
}
export function loadingError() {
    return ({
        type: 'CITY_LOADING_ERROR',
        payload: { 
            isLoading: false, 
            error: true, 
            weather: {} 
        }
    });
}