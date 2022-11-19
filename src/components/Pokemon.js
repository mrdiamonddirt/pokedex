import styled from "styled-components";
import React, { useEffect, useState, version } from "react";
import {PokemonCard, Pokestats, StatsName, PokeStatsContainer, StatsValue, PokeInfo, PokeDetail} from "./Styles";
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
        // id: id,
        // name: name,
        // // abilities: abilities,
        // types: Object.keys(types).map((key) => types[key].type.name),
        // abilities: Object.keys(abilities).map((ability) => abilities[ability].ability.name),

        // weight: weight,
        // height: height,
        // sprites: sprites,
        // stats: Object.keys(stats).map((stat) => stats[stat].stat.name),
    //     base_stat: Object.keys(stats).map((stat) => stats[stat].base_stat),
        Sprites2:    Object.keys(sprites.versions).map((key) => sprites.versions[key]),
    });
    //    console.log(forEach(sprites.versions) => (sprites.versions[key] === null) ? null : sprites.versions[key].front_default)
       
    //    console.log(Object.keys(sprites.versions).map((key) => sprites.versions[key].front_default));    
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
                    <PokeDetail>Name: {name}</PokeDetail>
                    <PokeDetail>ID {id}</PokeDetail>
                    <PokeInfo>
                    <PokeDetail>Types: {
                        Object.keys(types).map((key) => types[key].type.name).join(', ')
                    }
                    </PokeDetail>
                    {/* for each stat return the key and the value of the object and put each on a new line*/}
                    <PokeStatsContainer>
                    {Object.keys(stats).map((stat) => (
                        
                        <Pokestats>
                        <StatsName key={stats[stat].stat.name}>{stats[stat].stat.name}</StatsName>
                        <StatsValue key={stats[stat].base_stat}>{stats[stat].base_stat}</StatsValue>
                        </Pokestats>
                        
                    ))}
                    </PokeStatsContainer>   
                    {/* map through abilities and return abilites */}
                    <PokeDetail>Abilities: {
                        abilities.map((ability) => ability.ability.name).join(", ")
                        }</PokeDetail>
                    <PokeDetail>Height {height}</PokeDetail>
                    <PokeDetail>Weight {weight}</PokeDetail>
                    </PokeInfo>
                </div>
            </PokemonCard>
            
        </>
    )
}

export default Pokemon