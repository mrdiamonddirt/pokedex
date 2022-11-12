import styled from "styled-components";
import "./App.css";
import { useEffect, useState } from "react";

// main function
function App() {

  // state for pokemon name
  const [pokemonname, setPokemonname] = useState(null);

  // state for pokemon number as selected by user
  async function getPokemonname(number) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
    const data = await response.json();
    console.log(data.name);
    setPokemonname(data.name);
  }

  // state for pokemon imageurl
  const [pokecardurl, setpokecardurl] = useState();

  // function to get pokemon imageurl from name fetched from api number selected by user
  async function getPokemoncardImg(PokemoncardImgname) {
    const response = await fetch(
      `https://api.pokemontcg.io/v2/cards?q=name:${PokemoncardImgname}`
    );
    const data = await response.json();
    console.log(`image ${data.data[0].images.large}`);
    setpokecardurl(data.data[0].images.large);
    // setPokemoncardImg(data.data[0].images.small);
  }

  // state for pokemon number as selected by user
  const [pokemonnum, setpokemonnum] = useState(0);
  // setting the state for pokemon number as selected by user
  getPokemonname(pokemonnum);

  // variable to store the pokemon image from number
  let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonnum}.png`;

  //variable for data from api
  let pokeurl = `'https://pokeapi.co/api/v2/pokemon/${pokemonnum}'`;
  // console log the url
  console.log(`Pokemon URL ${pokeurl}`);
  const [data, setpokemon] = useState();

  // useEffect to fetch data from api
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

  // console log of the pokemon name
  console.log(`Pokemon Name ${pokemonname}`);

  // fuction to show the card in a seperate div when click and add css to it
  function showcard() {
    console.log(pokecardurl);
    // change the css of the div to show the card by changing the properties of the display value
    document.getElementById("card").style.display = "flex";
    
  }

  return (
    <>
    <div className="App">
      <Section>
        <h1>Pokemon</h1>
        <PokeIMG>
          <img src={imgUrl} alt="pokeimg"></img>
        </PokeIMG>
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
        <div className="divbtnclass">
        <Dexbtn onClick={() => setpokemonnum(pokemonnum + 1)}>+</Dexbtn>
        <Dexbtn onClick={() => setpokemonnum(pokemonnum - 1)}>-</Dexbtn>
        <Dexbtn onClick={() => getPokemoncardImg(pokemonname)}>Get Card</Dexbtn>
        <Dexbtn></Dexbtn>
        <Dexbtn></Dexbtn>
        <Dexbtn></Dexbtn>
        </div>
      </Section>
      <Section>
        <h1>Pokemon Info</h1>
        <PokemonCard onClick={() => showcard()} src={pokecardurl}></PokemonCard>
        <PokemonName>{pokemonname}</PokemonName>
      </Section>
    </div>
    <CardSection id="card">
        <Card className="card" src={pokecardurl} alt="pokemon card"></Card>
    </CardSection>
    </>
  );
}


const CardSection = styled.div`
display: none;
justify-content: center;
align-items: center;
`

const Card = styled.img`
top: 0;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
height: 50vh;
`
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
