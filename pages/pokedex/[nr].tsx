import { Pokemon } from '@/models/pokemon/pokemon';
import { getColor } from '@/lib/helper';
import PokemonAttributes from '@/components/pokedex/pokemon/pokemon_attributes';

export default function Pokedex(props:any) {
  const pokemons = props.pokemons
  return (
    <div className='container' style={{backgroundColor: getColor(pokemons[0].types[0].toLowerCase()), boxShadow: '0px 0px 60px 30px black'}}>
      {pokemons?.map((x:Pokemon) => {return (
      
      <div key={x.nr + '-'+ x.name}>
        {x.nr + ' ' + x.name}
        <PokemonAttributes pokemon={x}/>
      </div>
    
      )})}
    </div>
   )
 }
 
 export async function getServerSideProps(ctx:any)
 {
    const nr = ctx.query.nr;
    console.log(nr)
    
    const pokemons = await fetch('http://localhost:3000/api/pokedex/'+nr).then(x => {return x.json()})
 
    if(!pokemons || pokemons.length === 0)
    return {
      redirect: {
        permanent: false,
        destination: "/pokedex",
      }
    }

    return {
      props: {
        pokemons
      }
   }
 }