import { Anime } from "@/models/anime";
import axios from "axios";

export default function AnimeByID(props:any) {
  const anime = props.anime;

  return (
   <div>{anime.title}</div>
  )
}

export async function getStaticProps(ctx:any)
{
  const id = ctx.params.id;
  const anime = await axios.get('http://localhost:3000/api/crunchyroll/'+id).then(x => {return x.data});

  if(!anime)
  return {
    redirect: {
      permanent: false,
      destination: "/crunchyroll",
    }
  }

  return {props: {
    anime
  }}
}

export async function getStaticPaths()
{
 const animes = await fetch('http://localhost:3000/api/crunchyroll/').then(x => {return x.json()})
 const paths = animes.map((x:Anime) => ({
   params: {id: x._id.toString()}
 }));

 return {
   paths, fallback:false
 }
}