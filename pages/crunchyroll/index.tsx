import CrunchyrollCard from "@/components/crunchyroll/crunchyroll_card";
import { Anime } from "@/models/anime";
import axios from "axios";

export default function Crunchyroll(props: any) {
  const animes = props.animes;
  return (
    <div className="container" style={{marginTop: '100px'}}>
      <div className="row">
        {animes.map((x:Anime) => {
          return (
            <CrunchyrollCard anime={x}/>
            )})}
        </div>
    </div>
  )
}

export async function getServerSideProps(ctx:any) 
{
  let animes = await axios.get('http://localhost:3000/api/crunchyroll/').then(x => {return x.data});
  animes = animes.sort(() => 0.5 - Math.random()) as Anime[];
  return {
    props: {
      animes
    }
  };
}