import { Pokemon } from '@/models/pokemon/pokemon';
import { getColor, getGender } from '@/lib/helper';
import PokemonStats from '@/components/pokedex/pokemon/pokemon_stats';
import PokemonTypesWeakness from '@/components/pokedex/pokemon_types_weakness';
import PokemonAttributes from '@/components/pokedex/pokemon/pokemon_attributes';
import PokemonSkills from '@/components/pokedex/pokemon/pokemon_skills';
import Image from 'next/image';
import PokemonEvolutions from '@/components/pokedex/pokemon/pokemon_evolutions';

export default function PokemonModal(props:any) {
    const pokemon = props.pokemon;

    console.log(pokemon)

    const nrs = pokemon.evolutionIds.filter((x:number) => x !== pokemon.nr);

    const evoImages = nrs.map((nr:number) => 
    {
      if(nr.toString().length < 2)
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${nr}.png`
      if(nr.toString().length < 3)
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${nr}.png`
      else 
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${nr}.png`
    })


  return (
    <div className='container text-color4' style={{backgroundColor: getColor(pokemon.types[0].toLowerCase()), boxShadow: '0px 0px 60px 30px black', borderRadius: '20px', padding: '20px', marginTop: '150px'}}>
      <div className='row'>
        <div className='col-lg-4'>
          <Image src={pokemon.imageUrl} alt="" width={400} height={400}/>
          <div className='bg-color4' style={{padding: '10px', borderRadius: '10px'}}>
            <PokemonTypesWeakness title="Types" attributes={pokemon.types} id={pokemon._id} />
            <PokemonTypesWeakness title="Weaknesses" attributes={pokemon.weaknesses} id={pokemon._id} />
          </div>
          <br />
        </div>
        <div className='col-lg-8'>
          <div className='bg-color4 text-color1' style={{padding: '10px 0px 1px 10px', borderRadius: '10px'}}>
          <h3>#{pokemon.nr} {pokemon.name}</h3>
          <p>{pokemon.descriptions}</p>
          </div>
          <br />
          <div className='row'>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-3'>
                  <PokemonAttributes pokemons={pokemon} />
                </div>
                <div className='col-lg-2' style={{marginRight: '20px'}}>
                  <h3>Stats:</h3>
                  <PokemonStats pokemon={pokemon}/>
                </div>
            <div className='col-lg-6'>
              <PokemonSkills pokemons={pokemon}/>
              {evoImages.length > 0 && <PokemonEvolutions id = {pokemon._id} images={evoImages}/>}
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   )
 }