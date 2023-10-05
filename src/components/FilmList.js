// src/components/FilmsList.js
import React from 'react';
import { connect } from 'react-redux';
import { selectFilm } from '../redux/actions/peopleActions';

const FilmsList = ({ films, selectFilm }) => {
    return (
        <div>
            <h2>Films</h2>
            <ul>
                {films.map((filmUrl) => (
                    <li
                        key={filmUrl}
                        onClick={() => selectFilm(filmUrl)}
                    >
                        {filmUrl} {/* Display film URL for now */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    films: state.people.selectedCharacter?.films || [],
});

export default connect(mapStateToProps, { selectFilm })(FilmsList);
