import React, {useState, useEffect} from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon, searchTerm }) {

  const [filterPokeList, setFilterPokeList] = useState([])

  useEffect(() => {
    setFilterPokeList(pokemon.filter((poke) => poke.name.includes(searchTerm)))
  }, [searchTerm])

  const cards = (filterPokeList.length ? filterPokeList : pokemon).map((poke) => (
    <PokemonCard pokemon={poke} />
  ))

  return (
    <Card.Group itemsPerRow={6}>{cards}</Card.Group>
  );
}

export default PokemonCollection;
