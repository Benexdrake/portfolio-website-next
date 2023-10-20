import { Pokemon } from '@/models/pokemon/pokemon';
import { getColor, getGender } from '@/lib/helper';
import PokemonStats from '@/components/pokedex/pokemon/pokemon_stats';
import PokemonTypesWeakness from '@/components/pokedex/pokemon_types_weakness';
import PokemonAttributes from '@/components/pokedex/pokemon/pokemon_attributes';
import PokemonSkills from '@/components/pokedex/pokemon/pokemon_skills';
import Link from 'next/link'
import Image from 'next/image';
import PokemonEvolutions from '@/components/pokedex/pokemon/pokemon_evolutions';
import axios from 'axios';

export default function Pokedex(props:any) {

  const pokemons = props.pokemons
  const evoImages = props.evoImages;
  console.log(pokemons)
  return (
    <Link href='/pokedex' style={{textDecoration:'none'}}>
    <div className='container text-color4' style={{backgroundColor: getColor(pokemons[0].types[0].toLowerCase()), boxShadow: '0px 0px 60px 30px black', borderRadius: '20px', padding: '20px', marginTop: '150px'}}>
      <div className='row'>
        <div className='col-lg-4'>
          <Image src={pokemons[0].imageUrl} alt="" width={400} height={400} className='pokemon-shadow'/>
          <div className='bg-color4' style={{padding: '10px', borderRadius: '10px'}}>
            <PokemonTypesWeakness title="Types" attributes={pokemons[0].types} id={pokemons[0]._id} />
            <PokemonTypesWeakness title="Weaknesses" attributes={pokemons[0].weaknesses} id={pokemons[0]._id} />
          </div>
          <br />
        </div>
        <div className='col-lg-8'>
          <div className='bg-color4 text-color1' style={{padding: '10px 0px 1px 10px', borderRadius: '10px'}}>
          <h3>#{pokemons[0].nr}</h3>
          <h1>{pokemons[0].name}</h1>
          <p>{pokemons[0].descriptions}</p>
          </div>
          <br />
          <div className='row'>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-3'>
                  <PokemonAttributes pokemon={pokemons[0]} />
                </div>
                <div className='col-lg-2' style={{marginRight: '20px'}}>
                  <h3>Stats:</h3>
                  <PokemonStats pokemon={pokemons[0]}/>
                </div>
            <div className='col-lg-6'>
              <PokemonSkills pokemon={pokemons[0]}/>
              <PokemonEvolutions id = {pokemons[0]._id} images={evoImages}/>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
   )
 }
 
 export async function getServerSideProps(ctx:any)
 {
    const nr = ctx.params.nr;
    const pokemons = await axios.post('http://localhost:3000/api/pokedex/'+nr, {key:process.env.PROTECT_API}).then(x => {return x.data});
    if(!pokemons || pokemons.length === 0)
    return {
      redirect: {
        permanent: false,
        destination: "/pokedex",
      }
    }

    const nrs = pokemons[0].evolutionIds.filter((x:number) => x !== pokemons[0].nr);

    const evoImages = nrs.map(nr => 
    {
      if(nr.toString().length < 2)
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${nr}.png`
      if(nr.toString().length < 3)
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${nr}.png`
      else 
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${nr}.png`
    })

    return {
      props: {
        pokemons, evoImages
      }
   }
 }