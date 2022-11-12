import styled from 'styled-components';
import './App.css';
import { useEffect, useState } from 'react';

const  Section = styled.div`
  background-color: red;
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const PokeIMG = styled.div`
background-color: azure;
height: 100px;
width: 100px;
`

function App() {
  // useeffect for pokemon api call here
  useEffect(() => {
    let data = fetch('https://pokeapi.co/api/v2/pokemon/?limit=5000')
    // parse json data from api call
    .then(response => response.json())
    // log data to console
    .then(data => console.log(data))
    console.log(data.length)
    return () => {
      
    }
  }, [])

  const [pokemonnum, setpokemonnum] = useState(0)
  let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonnum}.png`

  
  return (
    <div className="App">
      <Section>
        <h1>Pokemons</h1>
        <PokeIMG><img src={imgUrl} alt='pokeimg' ></img></PokeIMG>
        
        {/* input type range  with calue from 0 to 1154*/}
        <input type='range' min='0' max='905' value={pokemonnum} onChange={(e) => setpokemonnum(e.target.value)}></input>

        <input type='number' id='pokenum' placeholder='Pokenumber' value={pokemonnum}></input>
        <button style={{background: 'blue',width:'40px', height:'40px'}} onClick={() => setpokemonnum(pokemonnum + 1)}>+</button> 
        <button style={{background: 'blue',width:'40px', height:'40px'}} onClick={() => setpokemonnum(pokemonnum - 1)}>-</button>
      </Section>
      
    </div>
  );
}

export default App;
