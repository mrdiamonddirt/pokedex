import styled from "styled-components";
import React, { useEffect, useState } from "react";
import {PokemonCard, Modal} from "./Styles";

const Pokemon = ({name, url}) => {
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonSelected, setPokemonSelected] = useState(null);

    // Get data for specific pokemon
    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setPokemonData(data)
          });
    
        return () => [];
      }, [url]);

    if (pokemonData.length === 0) {
        return null
    }

    // Log keys of pokemonData
    // console.log(Object.keys(pokemonData));

    const {id, height, weight, sprites} = pokemonData;

    const getImage = (sprites) => {
        // TODO: How do we handle multiple images here?
        if (sprites['front_default'] === 'null') {
            return <small>No Image Found</small>
        }

        return <img src={sprites['front_default']} alt={name} />
    }

    const renderModalWhenPokemonSelected = () => {
        console.log(`Selected Pokemon with id ${id}`)
        if (!pokemonSelected) return null;

        return (
            <Modal>
                {getImage(sprites)}
                <li>Name: {name}</li>
                <li>ID: {id}</li>
                <li>Height: {height}</li>
                <li>Weight: {weight}</li>
            </Modal>
        )
    }

    return (
        <>
            {renderModalWhenPokemonSelected()}
            <PokemonCard onClick={(id) => {
                setPokemonSelected(false)
                setPokemonSelected(id)
            }}>
                <div>
                    {getImage(sprites)}
                    <p>Name{name}</p>
                    <p>ID {id}</p>
                    <p>Height {height}</p>
                    <p>Weight {weight}</p>
                </div>
            </PokemonCard>
        </>
    )
}

export default Pokemon