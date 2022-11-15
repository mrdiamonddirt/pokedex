import styled from "styled-components";

export const PokemonCard = styled.div`
    border: .25rem solid lightgrey;
    border-radius: 1rem;
    margin: .25rem auto;
    width: auto;
    text-align: center;
    text-transform: capitalize;
`;


export const Modal = styled.div`
    background: green;
    width: 50%;
    height: 500px;
    position: fixed;
    
`

// export const TopDisplay = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   background-color: rgba(0, 0, 0, 1);
//   border: 1px solid black;
//   border-radius: 5px;
//   margin-left: 25px;
//   margin-right: 25px;
//   margin-bottom: 5px;
//   padding-bottom: 5px;
//   height: 20vh;
// `

// export const Info = styled.div`
//   display: flex;
//   max-height: 80px;
//   justify-content: center;
//   background-color: black;
//   width: 120px;
//   height: 100px;
//   overflow: auto;
// `

// export const Lights = styled.div`
//   height: 10px;
//   width: 10px;
//   margin: 2px;
//   border-radius: 50%;
//   border: 2px solid black;
// `

// export const Pokenum = styled.input`
//   background-color: green;
//   height: 40px;
//   width: 15vw;
//   margin-top: 15px;
//   transform: translate(-15px);
//   text-align: center;
//   border-radius: 5px;
// `

// export const Screen = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: #f5f5f5;
//   border-radius: 5px 5px 5px 25px;
//   padding-bottom: 15px;
//   width: 30vw;
//   height: 30vh;
// `

// export const CardSection = styled.div`
//   display: none;
//   justify-content: center;
//   align-items: center;
// `

// export const Indicator = styled.div`
//   background: radial-gradient(rgba(36, 17, 187, 1), rgba(97, 87, 233, 1));
//   height: 50px;
//   width: 50px;
//   border-radius: 50%;
//   position: absolute;
//   border: 5px solid white;
//   margin-top: 2%;
//   margin-left: 2%;
//   top: 60px;
//   left: 10%;
// `
// export const Section = styled.div`
//   background-color: red;
//   margin-top: 0;
//   height: 80vh;
//   width: 50vw;
//   display: flex;
//   justify-content: space-around;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid black;
//   border-radius: 5px;
// `;

// export const PokeIMG = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding-top: 5px;
//   background-color: black;
//   margin: 20px;
//   height: 25vh;
//   width: 25vw;
// `;

// export const Dexbtn = styled.button`
//   display: inline;
//   background: blue;
//   width: 40px;
//   height: 40px;
//   border: 1px solid black;
//   padding: 0;
//   &:hover {
//     background: lightblue;
//   }
// `;

// export const PokemonName = styled.p`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 25px;
//   background-color: rgba(39, 39, 39, 1);
//   width: 40vw;
//   height: 50px;
//   border: 1px solid black;
//   border-radius: 10px;
//   margin: 2px;
//   color: white;
//   text-transform: uppercase;
// `;

// export const Card = styled.img`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   top: 0;
//   left: 20vw;
//   height: 500px;
//   position: absolute;
//   z-index: 1;
//   transform: translate3d(0.1px, 0.1px, 0.1px ); 
//   &:hover {
//     animation-name: 'holoCard';
//     border-radius: 5px;
//     box-shadow: 
//       -20px -20px 30px -25px var(--color1), 
//       20px 20px 30px -25px var(--color2), 
//       -7px -7px 10px -5px var(--color1), 
//       7px 7px 10px -5px var(--color2), 
//       0 0 13px 4px rgba(255,255,255,0.3),
//       0 55px 35px -20px rgba(0, 0, 0, 0.5);
//   }

//   @keyframes holoCard {
//     0%, 100% {
//       transform: rotateZ(0deg) rotateX(0deg) rotateY(0deg);
//     }
//     5%, 8% {
//       transform: rotateZ(0deg) rotateX(6deg) rotateY(-20deg);
//     }
//     13%, 16% {
//       transform: rotateZ(0deg) rotateX(-9deg) rotateY(32deg);
//     }
//     35%, 38% {
//       transform: rotateZ(3deg) rotateX(12deg) rotateY(20deg);
//     }
//     55% {
//       transform: rotateZ(-3deg) rotateX(-12deg) rotateY(-27deg);
//     }
//   }
// `