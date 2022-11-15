import styled from "styled-components";
import "./App.css";
import { useEffect, useState } from "react";

// main function
function App() {
  
  // state for pokemon name
  const [pokemonname, setPokemonname] = useState(null);
  const [pokemongames, setPokemongames] = useState(null);
  const [pokedata, setPokedata] = useState(null);
  // state for pokemon number as selected by user
  async function getPokemonname(number) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
    const data = await response.json();
    console.log(`Data.name = ${data.name}`);
    console.log(`Data.game_indices = ${data.game_indices}`);
    console.log(data.name)
   
    // get games the pokemon is in and loop through loggoing each
    if (data.game_indices) {
      data.game_indices.forEach((game) => {
        console.log(`Game: ${game.version.name}`);
      });
    }
    let gamestring = data.game_indices.map((game) => {
      return game.version.name
    })
    console.log(gamestring)
    console.log(`pokedata = ${pokedata}`);
    let gamestring2 = gamestring.join(", ")
    //  setPokedata(data);
    setPokemongames(gamestring2)
    
    // let games = data.game_indices.map((game) => game.version.name);
    // setPokemongames(games);
    console.log(`Pokemon games: ${pokemongames}`);
    setPokemonname(data.name);
  }



  // get sprite drome this url
  // `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/${pokenum}.gif`
  async function getPokemonSprite(number) {
    const response = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${number}.gif`);
    const data = await response.json();
    console.log(data.sprites.front_default);
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
    document.getElementById("redlight").style.animation = "search1 1s ";
    document.getElementById("yellowlight").style.animation = "search2 1s ";
    document.getElementById("greenlight").style.animation = "search3 1s ";
    document.getElementById("indicator").style.animation = "thinking 2s";
    setTimeout(() => {
      document.getElementById("redlight").style.animation = "none";
    document.getElementById("yellowlight").style.animation = "none";
    document.getElementById("greenlight").style.animation = "none";
    document.getElementById("indicator").style.animation = "none";

    }, 2000);// setPokemoncardImg(data.data[0].images.small);
  }

  // state for pokemon number as selected by user
  const [pokemonnum, setpokemonnum] = useState(1);
  // setting the state for pokemon number as selected by user
  getPokemonname(pokemonnum);
  //setting the sprite
  getPokemonSprite(pokemonnum);
  // variable to store the pokemon image from number
  let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonnum}.png`;
  let spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${pokemonnum}.gif`;
  let latestgamesprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${pokemonnum}.png`;
  let officialartwork = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonnum}.png`;
  let sprite1 =  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonnum}.png`
  let frontanimsprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonnum}.gif`
  //variable for data from api
  let pokeurl = `https://pokeapi.co/api/v2/pokemon/${pokemonnum}`;
  // console log the url
  console.log(`Pokemon URL ${pokeurl}`);
  console.log(`Pokemon URL ${spriteUrl}`);
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
  }, []);

  // console log of the pokemon name
  console.log(`Pokemon Name ${pokemonname}`);

  // fuction to show the card in a seperate div when click and add css to it
  function showcard() {
    console.log(pokecardurl);
    // change the css of the div to show the card by changing the properties of the display value
    document.getElementById("card").style.display = "flex";
    
  }

  function hidecard() {
    console.log('hide card');
    document.getElementById("card").style.display = "none";
  }

  return (
    <>
    <div className="App">
      <Section id="section1" className="panels">
        {/* <h1>Pokemon</h1> */}
        <Indicator id='indicator'></Indicator>
        <div className="toplights">
        <Lights id="redlight" style={{backgroundColor: 'red'}}></Lights>
        <Lights id="yellowlight" style={{backgroundColor: 'yellow'}}></Lights>
        <Lights id="greenlight" style={{backgroundColor: 'green'}}></Lights>
        </div>
        <Screen className="screen"> 
        <PokeIMG>
          <img src={imgUrl} alt="pokeimg"></img>
        </PokeIMG>
        {/* input type range  with value from 0 to 905*/}
        <input style={{width: '15vw'}} type="range" min="0" max="905" value={pokemonnum} onChange={(e) => setpokemonnum(e.target.value)}></input>
        </Screen>
        <Pokenum type="number" id="pokenum"  placeholder="Pokenumber" value={pokemonnum} onChange={(e) => setpokemonnum(e.target.value)}></Pokenum>
        <Info style={{}}><p style={{color: 'white'}}>
          {pokemongames}
          </p></Info>
      </Section>
      <Section id="section2" className="panels">
        <TopDisplay id="topdisplay2">
        <PokemonName className="name">{pokemonname}</PokemonName>
        <div id='sprites'>
        <img style={{height:'40px'}} src={spriteUrl}></img><img style={{height:'40px'}} src={latestgamesprite}></img><img style={{height:'40px'}} src={sprite1}></img>
        </div>
        </TopDisplay>
        <div className="divbtnclass">
        <Dexbtn className="dexbtn" onClick={() => setpokemonnum(pokemonnum + 100)} >+100</Dexbtn>
        <Dexbtn onClick={() => setpokemonnum(pokemonnum + 10)} >+10</Dexbtn>
        <Dexbtn onClick={() => setpokemonnum(pokemonnum + 1)}>+1</Dexbtn>
        <Dexbtn onClick={() => setpokemonnum(pokemonnum - 1)}>-1</Dexbtn>
        <Dexbtn onClick={() => setpokemonnum(pokemonnum - 10)} >-10</Dexbtn>
        <Dexbtn onClick={() => setpokemonnum(pokemonnum - 100)} >-100</Dexbtn>
        </div>
        <div className="divbtnclass2">
        <Dexbtn></Dexbtn>
        <Dexbtn></Dexbtn>
        <Dexbtn onClick={() => setpokemonnum(Math.floor(Math.random() * 905))}>Rdmn Poké</Dexbtn>
        <Dexbtn onClick={() => getPokemoncardImg(pokemonname)}>Get Card</Dexbtn>
        <Dexbtn onClick={() => getPokemonname(pokemonnum)} style={{fontSize: '10px'}}>Games</Dexbtn>
        <Dexbtn></Dexbtn>
        </div>
        <div className="extrabtns">
        <Dexbtn style={{backgroundColor: 'white', height: '10vh'}}><PokemonCard onClick={() => showcard()} src={pokecardurl}></PokemonCard></Dexbtn>
        <Dexbtn style={{backgroundColor: 'white', height: '10vh'}}></Dexbtn>
        <label>
          <select name="pokemongames" id="pokemongames">
            <option value="games">Games</option>
            {/* map through pokemongames usestate and create options in dropdown for each */}
          </select>
        </label>
        </div>
        <div id='infodisplays'>
        <Info style={{height:'80px'}}><img src={frontanimsprite}></img></Info><Info><img src={officialartwork} alt="pokeimg"></img></Info>
        </div>
      </Section>
    </div>
    <CardSection id="card" onClick={() => hidecard()}>
        <Card className="card" src={pokecardurl} alt="pokemon card"></Card>
    </CardSection>
    </>
  );
}


const TopDisplay = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
background-color: rgba(0, 0, 0, 1);
border: 1px solid black;
border-radius: 5px;
margin-left: 25px;
margin-right: 25px;
margin-bottom: 5px;
padding-bottom: 5px;
height: 20vh;
`

const Info = styled.div`
display: flex;
max-height: 80px;
justify-content: center;
background-color: black;
width: 120px;
height: 100px;
overflow: auto;
`

const Lights = styled.div`
height: 10px;
width: 10px;
margin: 2px;
border-radius: 50%;
border: 2px solid black;
`;

const Pokenum = styled.input`
background-color: green;
height: 40px;
width: 15vw;
margin-top: 15px;
transform: translate(-15px);
text-align: center;
border-radius: 5px;
`

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  border-radius: 5px 5px 5px 25px;
  padding-bottom: 15px;
  width: 30vw;
  height: 30vh;
`

const CardSection = styled.div`
display: none;
justify-content: center;
align-items: center;
`

const Indicator = styled.div`
background: radial-gradient(rgba(36, 17, 187, 1), rgba(97, 87, 233, 1));
height: 50px;
width: 50px;
border-radius: 50%;
position: absolute;
border: 5px solid white;
margin-top: 2%;
margin-left: 2%;
top 60px;
left: 10%;
`
const Section = styled.div`
  background-color: red;
  margin-top: 0;
  height: 80vh;
  width: 50vw;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 5px;
`;

const PokeIMG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  background-color: black;
  margin: 20px;
  height: 25vh;
  width: 25vw;
`;

const Dexbtn = styled.button`
  display: inline;
  background: blue;
  width: 40px;
  height: 40px;
  border: 1px solid black;
padding: 0;
&:hover {
  background: lightblue;
}
`;

const PokemonName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  background-color: rgba(39, 39, 39, 1);
  width: 40vw;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 2px;
  color: white;
  text-transform: uppercase;
`;

const PokemonCard = styled.img`
margin-top: 0px;
  height: 48px;
  border-radius: 5px;
`;

const Card = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 20vw;
  height: 500px;
  position: absolute;
  z-index: 1;
  transform: translate3d(0.1px, 0.1px, 0.1px ); 
&:hover {
  animation-name: 'holoCard';
  border-radius: 5px;
  box-shadow: 
    -20px -20px 30px -25px var(--color1), 
    20px 20px 30px -25px var(--color2), 
    -7px -7px 10px -5px var(--color1), 
    7px 7px 10px -5px var(--color2), 
    0 0 13px 4px rgba(255,255,255,0.3),
    0 55px 35px -20px rgba(0, 0, 0, 0.5);
}

@keyframes holoCard {
  0%, 100% {
    transform: rotateZ(0deg) rotateX(0deg) rotateY(0deg);
  }
  5%, 8% {
    transform: rotateZ(0deg) rotateX(6deg) rotateY(-20deg);
  }
  13%, 16% {
    transform: rotateZ(0deg) rotateX(-9deg) rotateY(32deg);
  }
  35%, 38% {
    transform: rotateZ(3deg) rotateX(12deg) rotateY(20deg);
  }
  55% {
    transform: rotateZ(-3deg) rotateX(-12deg) rotateY(-27deg);
  }
}
`

export default App;
