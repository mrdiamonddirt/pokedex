import styled from "styled-components";
import React, { useEffect, useState, version } from "react";
import {PokemonCard, Pokestats, StatsName, PokeStatsContainer, StatsValue} from "./Styles";
import Modal from "./Modal";
import ImageContainer from "./PokemonImageSlider";
import { hidemodal } from "./Modal";

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
    const {id, height, types,abilities ,stats, weight, sprites} = pokemonData;
    console.table({
        id: id,
        name: name,
        // abilities: abilities,
        types: Object.keys(types).map((key) => types[key].type.name),
        abilities: Object.keys(abilities).map((ability) => abilities[ability].ability.name),

        weight: weight,
        height: height,
        // sprites: sprites,

    });
    console.table({
        stats: Object.keys(stats).map((stat) => stats[stat].stat.name),
        base_stat: Object.keys(stats).map((stat) => stats[stat].base_stat),
        });
       
    
    // console.log(sprites.versions)
    // console.log(sprites.other["official-artwork"].front_default);
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
                hidemodal()
            }}>
                <p>Name: {name}</p>
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>
            </Modal>
            <PokemonCard onClick={(id) => {
                setPokemonSelected(false)
                setPokemonSelected(id)
            }}>
                <div>
                <ImageContainer imgs={sprites} />
                    <p>Name: {name}</p>
                    <p>Types: {
                        Object.keys(types).map((key) => types[key].type.name).join(', ')
                    }
                    </p>
                    {/* for each stat return the key and the value of the object and put each on a new line*/}
                    <PokeStatsContainer>
                    {Object.keys(stats).map((stat) => (
                        
                        <Pokestats>
                        <StatsName>{stats[stat].stat.name}</StatsName>
                        <StatsValue>{stats[stat].base_stat}</StatsValue>
                        </Pokestats>
                        
                    ))}
                    </PokeStatsContainer>   
                    {/* map through abilities and return abilites */}
                    <p>Abilities: {
                        abilities.map((ability) => ability.ability.name).join(", ")
                        }</p>
                    
                    <p>ID {id}</p>
                    <p>Height {height}</p>
                    <p>Weight {weight}</p>
                </div>
            </PokemonCard>
            
        </>
    )
}

export default Pokemon