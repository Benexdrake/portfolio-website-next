import { Pokemon } from '@/models/pokemon'
import PokemonCard from '@/components/pokedex/pokemon_card'

export default function Pokedex(props: any) {
  const pokemons = props.pokemons;
  return (

    <div className='container'>
      <div className='row'>

        {pokemons?.slice(0,9).map((x: Pokemon) => {
          return (
            <div key={x._id} className='col-lg-4' style={{ padding: '10px' }}>
              <PokemonCard pokemon={x} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  let pokemons = await fetch('http://localhost:3000/api/pokedex').then(x => { return x.json() })

  pokemons = pokemons.sort(() => 0.5 - Math.random());

  return {
    props: {
      pokemons
    }
  }
}