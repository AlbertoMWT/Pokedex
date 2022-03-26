import React from 'react'

export const searchPokemon = async(pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        const data = response.json()
        return data
    }catch(err){
        console.log(err);
    }
}
