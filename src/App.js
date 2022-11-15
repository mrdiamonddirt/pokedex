import React, { useEffect, useState } from "react";
import Pokemon from "./components/Pokemon";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import Header from "./components/Header";

const itemsPerPage = 10;

function App() {
  const [pokemonCollectApiResponse, setPokemonCollectionApiResponse] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const getOffsetForPage = (pageNumber) => {
    return pageNumber * itemsPerPage
  }

  // Grab Pokemon Collection data from API
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${itemsPerPage}&offset=${getOffsetForPage(currentPage)}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonCollectionApiResponse(data.results)
      });

    return () => [];
  }, [currentPage]);

  return (
    <>
      <Header />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {
        // Map over the pokemon collection and render a Pokemon component for each item
          Object.values(pokemonCollectApiResponse).map((pokemon) =>
            <Pokemon
              name={pokemon.name}
              url={pokemon.url}
            />
          )
      }
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />

    </>
  )
}

export default App;
