import { useState } from "react";
import AllPokemons from "./components/AllPokemons";
import SearchBar from "./components/SearchBar";

function App() {
    const [allPok, setAllPok] = useState();

    const showPok = (e) => {
        setAllPok(true);
    };

    return (
        <div className="app-container">
            <img
                className="img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Pok%C3%A9mon_GO_logo.svg/2560px-Pok%C3%A9mon_GO_logo.svg.png"
                alt=""
            />
            <SearchBar />

            <div className="Pokemon">
                <div className="btn-group">
                    <div className="btn ball">
                        <button onClick={showPok}>
                            <div className="pokemon-ball"></div>
                            <a>
                                Show All Pokémons{" "}
                                <span data-letters="Let's Go!"></span>
                                <span data-letters="Let's Go!"></span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            {allPok && <AllPokemons />}
        </div>
    );
}

export default App;
