import { Anime } from "@/models/anime";
import CrunchyrollCard from "./crunchyroll_card";

export default function CrunchyrollCards(props:any)
{   
    const animes = props.animes.slice(0,27);
    return (
        <div className="card-crunchyroll-flex" style={{marginTop: '10px'}} key='crunchyrollAnimeCards'>
              {animes.map((x: Anime) => {
                return (
                  <CrunchyrollCard key={x._id} anime={x} />
                )
              })}
          </div>
    )
}