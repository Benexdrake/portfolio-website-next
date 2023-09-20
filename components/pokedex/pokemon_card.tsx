import { getColor } from "@/lib/helper";
import PokemonTypesWeakness from "./pokemon_types_weakness";
import Link from "next/link";

export default function PokemonCard(props:any)
{
    const pokemon = props.pokemon;

    return (
        <Link href={`/pokedex/${pokemon.nr}`}>
        <div className="card bg-dark text-white" style={{padding: '100px 0'}}>
    <div style={{backgroundImage: `url(../../../../assets/pokemon_elements/${pokemon.types[0].toLowerCase()}.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <img src={pokemon.imageUrl} className="card-img" alt="pokemon {{pokemon.name}}"/>
        <div className="card-img-overlay">
            <div style={{padding: '10px'}} className="d-flex justify-content-between bg-color4">
                <div>
                    <h5 className="card-title text-color1">Nr: {pokemon.nr} {pokemon.name}</h5>
                </div>
                <div>
                    <h5 className="card-title text-color1">{pokemon.genders.join(' / ')}</h5>
                </div>
            </div>
            <div></div>
            <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                <div className="bg-color4" style={{border: '10px solid', borderColor: getColor(pokemon.types[0].toLowerCase()), padding: '10px'}}>
                    <p className="card-text text-color1">{pokemon.descriptions[0]}</p>

                    <PokemonTypesWeakness title="Types" attributes={pokemon.types} id={pokemon._id}/>
                    <PokemonTypesWeakness title="Weakness" attributes={pokemon.weaknesses}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Link>
    )
}