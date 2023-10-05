
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPeople, selectCharacter, selectFilm } from '../redux/actions/peopleActions';
import './PeopleList.css';

const PeopleList = ({ people, error, fetchPeople, selectCharacter }) => {
    useEffect(() => {
        fetchPeople();
    }, [fetchPeople]);

    const handleCharacterClick = (character) => {
        selectCharacter(character);
    };

    return (
        <div>
            <h2>Star Wars Characters</h2>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <ul>
                    {people.map((person) => (
                        <li
                            key={person.name}
                            onClick={() => handleCharacterClick(person)}
                        >
                            {person.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    people: state.people.people,
    error: state.people.error,
});

export default connect(mapStateToProps, { fetchPeople, selectCharacter })(PeopleList);
