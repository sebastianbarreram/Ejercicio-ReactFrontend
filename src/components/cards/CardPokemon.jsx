import React from "react";

export const CardPokemon = ({pokemon, loading}) => {

    return(
        <>
            <div className="row card-row">
                {
                    loading ? <h1>Loading...</h1> :
                    pokemon.map((item) => {
                        return (
                                <div className="col-md-3" key={item.id}>
                                    <div className="card poke-card" >
                                        {/* <img className="card-img-top card-img" src={item.sprites.front_shiny} alt=""></img> */}
                                        <img className="card-img-top card-img" src={item.sprites.front_default} alt=""></img>
                                        <div className="card-body">
                                            <h5 className="card-title poke-name" style={{"display": "flex","justifyContent": "center"}}>{item.name}</h5>
                                            <div style={{"display": "flex","justifyContent": "center"}}>
                                                {
                                                    item.types.map(
                                                        element=>{
                                                            const colours = {
                                                                normal: '#A8A77A',
                                                                fire: '#EE8130',
                                                                water: '#6390F0',
                                                                electric: '#F7D02C',
                                                                grass: '#7AC74C',
                                                                ice: '#96D9D6',
                                                                fighting: '#C22E28',
                                                                poison: '#A33EA1',
                                                                ground: '#E2BF65',
                                                                flying: '#A98FF3',
                                                                psychic: '#F95587',
                                                                bug: '#A6B91A',
                                                                rock: '#B6A136',
                                                                ghost: '#735797',
                                                                dragon: '#6F35FC',
                                                                dark: '#705746',
                                                                steel: '#B7B7CE',
                                                                fairy: '#D685AD',
                                                            };
                                                            const type=element.type.name;
                                                            return (
                                                                    <button type="button" className="btn btn-primary" 
                                                                    style={{"margin":"4px","backgroundColor":colours[type],"borderColor":colours[type]}} 
                                                                    key={item.id +element.type.name}>
                                                                        {element.type.name}</button>
                                                            )
                                                        }
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                        )
                    })
                }
            </div>
        </>
        
    )
}

export default CardPokemon;