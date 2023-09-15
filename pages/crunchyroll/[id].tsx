import { Anime } from "@/models/anime";
import axios from "axios";

export default function AnimeByID(props:any) {
  const anime = props.anime;

  return (
   <div>{anime.title}</div>
  )
}

export async function getServerSideProps(ctx:any)
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