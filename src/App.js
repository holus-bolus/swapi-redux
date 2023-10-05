import './App.css';
import PeopleList from './components/PeopleList';
import CharacterInfo from './components/CharacterInfo';
import FilmInfo from './components/FilmInfo';
import FilmsList from './components/FilmList';

function App() {
    return (
        <div className="App">
            <div className="left-panel">
                <PeopleList></PeopleList>
                <CharacterInfo/>
            </div>
            <div className="right-panel">
                <FilmsList/>
                <FilmInfo/>
            </div>
        </div>
    );
}

export default App;
