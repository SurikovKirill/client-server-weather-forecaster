const initialState = {
    isLoading: true,
    error: false,
    weather: {},
};

export function cityReducer(state = initialState, action) {
    switch (action.type) {
        case 'CITY_LOADING': {
            const { isLoading, error, weather } = action.payload;
            return {
                ...state,
                isLoading,
                error,
                weather,
            };
        }
        case 'CITY_LOADING_SUCCESS': {
            const { isLoading, error, weather } = action.payload;
            return {
                ...state,
                isLoading,
                error,
                weather,
            };
        }
        case 'CITY_LOADING_ERROR': {
            const { isLoading, error, weather } = action.payload;
            return {
                ...state,
                isLoading,
                error,
                weather,
            };
        }
        default: {
            return state;
        }
    }
}