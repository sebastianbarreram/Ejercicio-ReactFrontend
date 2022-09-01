import React, { useState } from "react";

export const CardPokemon = ({pokemon, loading}) => {
    const [search, setSearch] = useState("");
    const [lowerLimit, setLowerLimit] = useState(0);
    const [upperLimit, setUpperLimit] = useState(1155);

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

    const generation = {
        I:{
            lowerLimit:0,
            upperLimit:152
        } ,
        II:{
            lowerLimit:151,
            upperLimit:252
        } ,
        III:{
            lowerLimit:251,
            upperLimit:387,
        },
        IV:{
            lowerLimit:386,
            upperLimit:494
        } ,
        V:{
            lowerLimit:493,
            upperLimit:650
        } ,
        VI:{
            lowerLimit:649,
            upperLimit:722,
        },
        VII:{
            lowerLimit:721,
            upperLimit:810
        } ,
        VIII:{
            lowerLimit:809,
            upperLimit:906
        } ,
        Other:{
            lowerLimit:10000,
            upperLimit:10250,
        },
        All:{
            lowerLimit:0,
            upperLimit:10250
        }
    };

    const pokeInfo = async(res) => {
        console.log(res)
        window.location.href = `/pokeInfo/${res.id}`;
    }

    const handleClick=(event)=>{
        setLowerLimit(generation[event.target.name].lowerLimit)
        setUpperLimit(generation[event.target.name].upperLimit)
    }

    return(
        <>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Generation...
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button className="dropdown-item" name="I" onClick={handleClick}>Generation I</button>
            <button className="dropdown-item" name="II" onClick={handleClick}>Generation II</button>
            <button className="dropdown-item" name="III" onClick={handleClick}>Generation III</button>
            <button className="dropdown-item" name="IV" onClick={handleClick}>Generation IV</button>
            <button className="dropdown-item" name="V" onClick={handleClick}>Generation V</button>
            <button className="dropdown-item" name="VI" onClick={handleClick}>Generation VI</button>
            <button className="dropdown-item" name="VII" onClick={handleClick}>Generation VII</button>
            <button className="dropdown-item" name="VIII" onClick={handleClick}>Generation VIII</button>
            <button className="dropdown-item" name="Other" onClick={handleClick}>Other</button>
            <button className="dropdown-item" name="All" onClick={handleClick}>All</button>
            </div>
        </div>
        <form className=" form-group">
            <input className="form-control " type="search" placeholder="Search" onChange={(e)=>setSearch(e.target.value)}/>
         </form>
            <div className="row card-row">
                {
                    loading ? <h1>Loading...</h1> :
                    pokemon.filter((item)=>{
                        if ((search === "" || item.name.toLowerCase().includes(search.toLowerCase())) && item.id>lowerLimit && item.id<upperLimit) {
                            return item
                        }
                        return null;
                    })                    
                    .map((item) => {
                        return (
                                <div className="col-md-3" key={item.id}>
                                    <div className="card poke-card" onClick={()=> pokeInfo(item)} style={{"cursor":"pointer"}}>
                                        {/* <img className="card-img-top card-img" src={item.sprites.front_shiny} alt=""></img> */}
                                        <img className="card-img-top card-img" src={item.sprites.front_default} alt=""></img>
                                        <div className="card-body">
                                            <h5 className="card-title poke-name" style={{"display": "flex","justifyContent": "center"}}>{item.name}</h5>
                                            <div style={{"display": "flex","justifyContent": "center"}}>
                                                {
                                                    item.types.map(
                                                        element=>{
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