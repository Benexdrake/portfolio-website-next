import { Pokemon } from '@/models/pokemon/pokemon';
import { getColor } from '@/lib/helper';
import PokemonAttributes from '@/components/pokedex/pokemon/pokemon_attributes';
import PokemonTypesWeakness from '@/components/pokedex/pokemon_types_weakness';

export default function Pokedex(props:any) {
  const pokemons = props.pokemons as Pokemon[]
  const evoImages = props.evoImages;
  console.log(evoImages)
  return (
    <div className='container' style={{backgroundColor: getColor(pokemons[0].types[0].toLowerCase()), boxShadow: '0px 0px 60px 30px black', borderRadius: '20px', padding: '10px'}}>
      <div className='row'>
        <div className='col-md-4'>
          <img src={pokemons[0].imageUrl} alt="" width={400}/>
          <div className='bg-color4'>
            <PokemonTypesWeakness title="Types" attributes={pokemons[0].types} id={pokemons[0]._id} />
            <PokemonTypesWeakness title="Weaknesses" attributes={pokemons[0].weaknesses} id={pokemons[0]._id} />
          </div>
        </div>
        <div className='col-md-8'>
          <h3>#{pokemons[0].nr}</h3>
          <h1>{pokemons[0].name}</h1>
          <p>{pokemons[0].descriptions}</p>
          <div className='row'>
            <div className='col-md-8'>
            <a href={`https://www.pokemon.com/us/pokedex/${pokemons[0].nr}`} target='_blank' className='btn btn-danger'>{pokemons[0].name}</a>
            <br />
            <br />
            <table className='table table-striped'>
              <tbody>
                <tr>
                  <td>Height: </td>
                  <td>
                  {pokemons[0].height}
                  </td>
                </tr>
                <tr>
                  <td>Weight: </td>
                  <td>
                  {pokemons[0].weight}
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
            <p>Evolutions:</p>
            {evoImages.map((x:string) => {
              return <img key={pokemons[0]._id+x} src={x} width={50}/>
            })}
            </div>
            <div className='col-md-4'>
              <h3>Attributes:</h3>
              <PokemonAttributes pokemon={pokemons[0]}/>
            </div>
          </div>
        </div>
      </div>
    </div>
   )
 }
 
 export async function getServerSideProps(ctx:any)
 {
    const nr = ctx.query.nr;
    console.log(nr)
    
    const pokemons = await fetch('http://localhost:3000/api/pokedex/'+nr).then(x => {return x.json()}) as Pokemon[]


 
    if(!pokemons || pokemons.length === 0)
    return {
      redirect: {
        permanent: false,
        destination: "/pokedex",
      }
    }

    const nrs = pokemons[0].evolutionIds;

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