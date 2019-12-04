const initialState = {
    cities: [],
    isLoading: [],
    errors: [],
};

export function favouritesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_NEW_CITY': {
            const cities = [...state.cities, action.payload.city];
            return {
                ...state,
                cities,
            };
        }
        case 'UPDATE_CITY': {
            const {city} = action.payload;
            const cities = [...state.cities];
            cities[cities.findIndex(c => c.name.toLowerCase() === city.name.toLowerCase())] = city;
            return {
                ...state,
                cities,
            };
        }
        case 'ADD_NEW_CITY_LOADING': {
            const { name, isLoading } = action.payload;
            const newIsLoading = [...state.isLoading];
            const isCityLoadingNow = newIsLoading.includes(name);
            if (isCityLoadingNow && !isLoading) {
                newIsLoading.splice(newIsLoading.indexOf(name), 1);
            } else if (isLoading && !isCityLoadingNow) {
                newIsLoading.push(name);
            }
            return {
                ...state,
                isLoading: newIsLoading,
            };
        }
        case 'REMOVE_CITY': {
            const cities = [...state.cities];
            cities.splice(cities.findIndex(c => c.name === action.payload.name), 1);
            return {
                ...state,
                cities,
            };
        }

        case 'LOADING_ERROR': {
            const name = action.payload.name;
            const errors = [...state.errors];
            if (!errors.includes(name)) {
                errors.push(name);
            }
            return {
                ...state,
                errors,
            };
        }
        default: {
            return state;
        }
    }
}