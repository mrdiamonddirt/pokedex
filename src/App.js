import styled from "styled-components";
import "./App.css";
import { useEffect, useState } from "react";

const Section = styled.div`
  background-color: red;
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PokeIMG = styled.div`
  background-color: azure;
  height: 100px;
  width: 100px;
`;

function App() {
  const [pokemonname, setPokemonname] = useState(null);
  async function getPokemonname(number) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
    const data = await response.json();
    console.log(data.name);
    setPokemonname(data.name);
  }
  const [pokecardurl, setpokecardurl] = useState();
  async function getPokemoncardImg(PokemoncardImgname) {
    const response = await fetch(
      `https://api.pokemontcg.io/v2/cards?q=name:${PokemoncardImgname}`
    );
    const data = await response.json();
    console.log(`image ${data.data[0].images.large}`);
    setpokecardurl(data.data[0].images.large);
    // setPokemoncardImg(data.data[0].images.small);
  }

  // useeffect for pokemon api call here

  const [pokemonnum, setpokemonnum] = useState(0);
  getPokemonname(pokemonnum);
  let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonnum}.png`;

  let pokeurl = `'https://pokeapi.co/api/v2/pokemon/${pokemonnum}'`;
  console.log(`Pokemon URL ${pokeurl}`);

  const [data, setpokemon] = useState();
  useEffect(() => {
    let data = fetch("https://pokeapi.co/api/v2/pokemon/?limit=905")
      // parse json data from api call
      .then((response) => response.json())
      // log data to console
      .then((data) => console.log(data));
    console.log(data);
    setpokemon(data);
    return () => {};
  }, [setpokemon]);

  console.log(`Pokemon Name ${pokemonname}`);

  return (
    <div className="App">
      <Section>
        <h1>Pokemon</h1>
        <PokeIMG>
          <img src={imgUrl} alt="pokeimg"></img>
        </PokeIMG>
        <p></p>
        {/* input type range  with value from 0 to 905*/}
        <input
          type="range"
          min="0"
          max="905"
          value={pokemonnum}
          onChange={(e) => setpokemonnum(e.target.value)}
        ></input>

        <input
          type="number"
          id="pokenum"
          placeholder="Pokenumber"
          value={pokemonnum}
          onChange={(e) => setpokemonnum(e.target.value)}
        ></input>
        <div>
        <Dexbtn onClick={() => setpokemonnum(pokemonnum + 1)}>+</Dexbtn>
        <Dexbtn onClick={() => setpokemonnum(pokemonnum - 1)}>-</Dexbtn>
        <Dexbtn onClick={() => getPokemoncardImg(pokemonname)}>Get Card</Dexbtn>
        </div>
      </Section>
      <Section>
        <h1>Pokemon Info</h1>
        <PokemonCard onClick={() => console.log(pokecardurl)} src={pokecardurl}></PokemonCard>
        <PokemonName>{pokemonname}</PokemonName>
      </Section>
    </div>
  );
}

const Dexbtn = styled.button`
  display: inline;
  background: blue;
  width: 40px;
  height: 40px;
  margin: 5px;
  border: 1px solid black;
padding: 0;
`;

const PokemonName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  background-color: grey;
  width: 200px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  color: blue;
`;

const PokemonCard = styled.img`
  height: 200px;
  border-radius: 5px;
`;

export default App;
