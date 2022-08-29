import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Header from "./Header";

function PokemonInfo() {
  const { id } = useParams();

  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const response = await Axios.get(`pokemon/${id}`);
    console.log(response.data);
    setPokeData(response.data);
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <div className="row card-row" style={{ justifyContent: "center", "margin-left": "0", "margin-right": "0" ,"margin-top": "10px" }}>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="col-md-3" key={pokeData.id}>
            <div className="card poke-card" style={{ display: "flex", justifyContent: "center" }}>
              <img
                className="card-img-top card-img"
                src={pokeData.sprites.other["official-artwork"].front_default}
                alt=""
              ></img>
              <div className="card-body">
                <h5
                  className="card-title poke-name"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  {pokeData.name}
                </h5>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {pokeData.types.map((element) => {
                    const colours = {
                      normal: "#A8A77A",
                      fire: "#EE8130",
                      water: "#6390F0",
                      electric: "#F7D02C",
                      grass: "#7AC74C",
                      ice: "#96D9D6",
                      fighting: "#C22E28",
                      poison: "#A33EA1",
                      ground: "#E2BF65",
                      flying: "#A98FF3",
                      psychic: "#F95587",
                      bug: "#A6B91A",
                      rock: "#B6A136",
                      ghost: "#735797",
                      dragon: "#6F35FC",
                      dark: "#705746",
                      steel: "#B7B7CE",
                      fairy: "#D685AD",
                    };
                    const type = element.type.name;
                    return (
                      <button
                        type="button"
                        className="btn btn-primary"
                        style={{
                          margin: "4px",
                          backgroundColor: colours[type],
                          borderColor: colours[type],
                        }}
                        key={pokeData.id + element.type.name}
                      >
                        {element.type.name}
                      </button>
                    );
                  })}
                </div>
                <p>Height : {pokeData.height/10} m</p>
                <p>Weight : {pokeData.weight/10} kg</p>
              </div>
            </div>
            <br />
          </div>
        )}
      </div>
      <a
        className="btn"
        href="/"
        style={{ justifyContent: "center", display: "flex" }}
      >
        <button type="button" className="btn btn-primary" to="/">
          Back to Pokemon list
        </button>
      </a>
    </div>
  );
}

export default PokemonInfo;
