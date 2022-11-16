import styled from "styled-components";
import React, { useEffect, useState } from "react";
import {PokemonCard} from "./Styles";
import Modal from "./Modal";
import ImageContainer from "./PokemonImageSlider";

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

    return (
        <>
            <Modal onClose={() => {
                console.log('close')
            }}>
                hello
            </Modal>
            <PokemonCard onClick={(id) => {
                setPokemonSelected(false)
                setPokemonSelected(id)
            }}>
                <div>
                <ImageContainer imgs={sprites} />
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