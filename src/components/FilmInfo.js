// src/components/FilmInfo.js
import React from 'react';
import { connect } from 'react-redux';

const FilmInfo = ({ selectedFilm }) => {
    return (
        <div>
            {selectedFilm && (
                <div>
                    <h2>Film Details</h2>
                    <p>Title: {selectedFilm.title}</p>
                    <p>Director: {selectedFilm.director}</p>
                    <p>Release Date: {selectedFilm.release_date}</p>
                    {/* Add more film information as needed */}
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    selectedFilm: state.people.selectedFilm,
});

export default connect(mapStateToProps)(FilmInfo);
