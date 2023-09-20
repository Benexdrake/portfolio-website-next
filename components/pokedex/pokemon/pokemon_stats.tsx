import { Pokemon } from "@/models/pokemon/pokemon";
import PokemonStat from "./pokemon_stat";

export default function PokemonStats(props:any)
{
    const pokemon = props.pokemon as Pokemon;

    return (
        <table className="table table-striped text-color1" style={{width: '150px'}}>
            <tbody>
                <PokemonStat text="HP" value={pokemon.hp}/>
                <PokemonStat text="ATK" value={pokemon.attack}/>
                <PokemonStat text="DEF" value={pokemon.defense}/>
                <PokemonStat text="SPD" value={pokemon.speed}/>
                <PokemonStat text="SP ATK" value={pokemon.specialAttack}/>
                <PokemonStat text="SP DEF" value={pokemon.specialDefense}/>
            </tbody>
        </table>
    );
}