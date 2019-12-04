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
            console.log(city);
            const cities = [...state.cities];
            console.log("Hui");
            console.log(cities);
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
            //const cities = [...state.cities];
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
            //const errors = [...state.errors];
            cities.splice(cities.findIndex(c => c.name === action.payload.name), 1);
            //errors.splice(errors.findIndex(c => c === action.payload.name), 1);
            return {
                ...state,
                cities,
                //errors,
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