import Axios from "axios";
import React, { useEffect, useState } from "react";
import { CardPokemon } from "./cards/CardPokemon";

export default function Home() {
//   const [pokeList, setPokeList] = useState([]);
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const response = await Axios.get("pokemon?limit=10");
    console.log("hizo primer get")
    console.log(response.data.results);
    // setPokeList(response.data.results);
   response.data.results.forEach(async (element) => {
   //   console.log(element);
     const response2 = await Axios.get(element.url);
     console.log(response2.data.forms[0].name)
     setPokeData((state) => {
       state = [...state, response2.data];
       state.sort((a, b) => (a.id > b.id ? 1 : -1));
       return state;
     });
   });
    setLoading(false)
  };

  return (<div className="container">Home
  <CardPokemon pokemon={pokeData} loading={loading}/>
  </div>
  );
}
