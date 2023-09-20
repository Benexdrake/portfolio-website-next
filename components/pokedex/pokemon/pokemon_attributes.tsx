import { Pokemon } from "@/models/pokemon/pokemon";
import PokemonAttribut from "./pokemon_attribute";

export default function PokemonAttributes(props:any)
{
    const pokemon = props.pokemon as Pokemon;

    return (
        <table className="table table-striped text-color1" style={{width: '150px'}}>
            <tbody>
                <PokemonAttribut text="HP" value={pokemon.hp}/>
                <PokemonAttribut text="ATK" value={pokemon.attack}/>
                <PokemonAttribut text="DEF" value={pokemon.defense}/>
                <PokemonAttribut text="SPD" value={pokemon.speed}/>
                <PokemonAttribut text="SP ATK" value={pokemon.specialAttack}/>
                <PokemonAttribut text="SP DEF" value={pokemon.specialDefense}/>
            </tbody>
        </table>
    );
}