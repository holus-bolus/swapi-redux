// src/components/CharacterInfo.js
import React from 'react';
import { connect } from 'react-redux';

const CharacterInfo = ({ selectedCharacter }) => {
    return (
        <div>
            {selectedCharacter && (
                <div>
                    <h2>{selectedCharacter.name}</h2>
                    <p>Height: {selectedCharacter.height}</p>
                    <p>Mass: {selectedCharacter.mass}</p>
                    <p>Hair Color: {selectedCharacter.hair_color}</p>
                    <p>Skin Color: {selectedCharacter.skin_color}</p>
                    {/* Add more information as needed */}
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    selectedCharacter: state.people.selectedCharacter,
});

export default connect(mapStateToProps)(CharacterInfo);
