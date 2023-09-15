import { Pokemon } from '@/models/pokemon';

export default function Pokedex(props:any) {
  return (
    <div>{props?.pokemons?.map((x:Pokemon) => {return (<div key={x.nr + '-'+ x.name}>{x.name}</div>)})}</div>
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