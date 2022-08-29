import React from "react";

export const CardPokemon = ({pokemon, loading}) => {

    return(
        <>
            <div className="row card-row">
                

                {
                    loading ? <h1>Loading...</h1> :
                    pokemon.map((item) => {
                        return (
                            // <div className="row">
                                
                                <div className="col-md-3">
                                    <div className="card poke-card" key={item.id} >
                                        {/* <p className="card-id">{item.id}</p> */}
                                        <img className="card-img-top card-img" src={item.sprites.front_default} alt="Card image cap"></img>
                                        <div className="card-body">
                                            <h5 className="card-title poke-name">{item.name}</h5>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            // </div>
                            
                        )
                    })
                }
            </div>
        </>
        
    )
}

export default CardPokemon;