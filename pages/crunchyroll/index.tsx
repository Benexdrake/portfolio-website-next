import { Anime } from "@/models/anime";
import axios from "axios";

export default function Crunchyroll(props: any) {
  const animes = props.animes.slice(0,10) as Anime[];
  return (
    <div>{animes.map((x:Anime) => {return (<div key={x._id}>{x._id} - {x.title}</div>)})}</div>
  )
}

export async function getServerSideProps(ctx:any) 
{
  const animes = await axios.get('http://localhost:3000/api/crunchyroll/').then(x => {return x.data});
  return {
    props: {
      animes
    }
  };
}
