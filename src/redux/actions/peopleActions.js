import axios from 'axios';

export const setPeople = (people) => ({
    type: 'SET_PEOPLE',
    payload: people
});

export const setError = (error) => ({
    type: 'SET_ERROR',
    payload: error
});

export const fetchPeople = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://swapi.dev/api/people/');
            dispatch(setPeople(response.data.results));
        } catch (error) {
            console.error(error);
            dispatch(setError('Error fetching people'));
        }
    };
};


export const selectCharacter = (character) => ({
    type: 'SELECT_CHARACTER',
    payload: character,
});

export const selectFilm = (filmUrl) => ({
    type: 'SELECT_FILM',
    payload: filmUrl,
});
