import React, { useEffect, useState } from 'react'
import './PokemonScreen.css';

export const PokemonScreen = () => {
    const [pokemons, setPokemons] = useState([])
    const [urlImage, setUrlImage] = useState('')
    useEffect(() => {
        const getPokemon = async () => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1118')
            const data = await res.json()
            const dataDesordenada = data.results.map(p=>p.name)
            
            setPokemons(dataDesordenada.sort())        
            
        }
        getPokemon();
    }, [])

    const handleSelect = (e) => {
        const option = e.target.value;
        cambiarSprite(option);
    }

    const cambiarSprite = async (option) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${option}`)
        const data = await res.json()
        setUrlImage( data.sprites.front_default );
    }
    
    return (
        <div className="container-pokemon">
            <select name="pokemons" className="select-pokemon" onClick={handleSelect}>
                {pokemons.map( pokemon => (
                    <option key={pokemon} value={pokemon}>{pokemon}</option>
                ))}
            </select>
            <img src={urlImage} alt=""/>
        </div>
    )
}
