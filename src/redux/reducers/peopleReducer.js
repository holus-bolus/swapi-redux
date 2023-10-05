

const initialState = {
    people: [],
    error: null,
    selectedCharacter: null,
    selectedFilm: null,
};

export const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PEOPLE':
            return { ...state, people: action.payload, error: null };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        case 'SELECT_CHARACTER':
            return { ...state, selectedCharacter: action.payload, selectedFilm: null };
        case 'SELECT_FILM':
            return { ...state, selectedFilm: action.payload };
        default:
            return state;
    }
};


