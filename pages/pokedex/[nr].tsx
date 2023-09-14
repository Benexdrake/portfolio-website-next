import { Pokemon } from '@/models/pokemon';

export default function Pokedex(props:any) {
  return (
    <div>{props?.pokemons?.map((x:Pokemon) => {return (<div>{x.name}</div>)})}</div>
   )
 }
 
 export async function getStaticProps(ctx:any)
 {
    const nr = ctx.params.nr;
    
    const pokemons = await fetch('http://localhost:3000/api/pokedex/'+nr).then(x => {return x.json()})
 
    return {
      props: {
        pokemons
      },
      revalidate: 600
   }
 }

 export async function getStaticPaths()
 {
    const pokemons = await fetch('http://localhost:3000/api/pokedex/').then(x => {return x.json()})
    const paths = pokemons.map((x:Pokemon) => ({
      params: {nr: x.nr.toString()}
    }));

    return {
      paths, fallback:false
    }
 }