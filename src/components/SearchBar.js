import React, { useEffect, useState } from "react";
import Stats from "./Stats";
import { searchPokemon } from "./api";
import PokemonThumnails from "./PokemonThumnails";
import Moves from "./Moves";

function SearchBar() {
    const [search, setSearch] = useState("pikachu");
    const [pokemon, setPokemon] = useState();

    const onChange = (e) => {
        // console.log(e.target.value.toLowerCase());
        setSearch(e.target.value.toLowerCase());
    };

    const onClick = async (e) => {
        const data = await searchPokemon(search);
        setPokemon(data);
    };

    return (
        <div className="search-bar">
            <div>
                <div>
                    <form className="form">
                        <input onChange={onChange} />
                        <label htmlFor="" className="lbl-nombre">
                            <span className="text-nomb">Pokémon</span>
                        </label>
                    </form>
                </div>
                <div>
                    {/* <button onClick={onClick} onEnter={onClick} >Buscar</button> */}
                    <div className="Pokemon">
                        <div className="btn-group">
                            <div className="btn ball">
                                <button onClick={onClick}>
                                    <div className="pokemon-ball"></div>
                                    <a>
                                        Search <span data-letters="Go!"></span>
                                        <span data-letters="Go!"></span>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cont-pok-ind">
                {pokemon && (
                    <div className="sb">
                        <PokemonThumnails
                            id={pokemon?.id}
                            name={pokemon?.name}
                            image={
                                pokemon?.sprites?.other?.dream_world
                                    ?.front_default
                            }
                            type={pokemon?.types[0]?.type?.name}
                            // key={index}
                            />
                    </div>
                )}
                {pokemon && (
                    <div className="sb-stats">
                        <Stats
                            data={pokemon}
                            type={pokemon?.types[0]?.type?.name}
                        />
                    </div>
                )}
                {pokemon && (
                    <div className="sb-stats sb-stats1">
                        <Moves
                            data={pokemon}
                            type={pokemon?.types[0]?.type?.name}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchBar;
