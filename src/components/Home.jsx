import Axios from "axios";
import React, { useEffect, useState } from "react";
import { CardPokemon } from "./CardPokemon";

export default function Home() {
  //   const [pokeList, setPokeList] = useState([]);
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const response = await Axios.get("pokemon?limit=150");
    console.log(response.data.results);
    // setPokeList(response.data.results);
    response.data.results.forEach(async (element) => {
      //   console.log(element);
      const response2 = await Axios.get(element.url);
      //  console.log(response2.data.forms[0].name)
      setPokeData((state) => {
        state = [...state, response2.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
    setLoading(false);
  };

  return (
    <div className="container">
      <CardPokemon pokemon={pokeData} loading={loading} />
    </div>
  );
}
