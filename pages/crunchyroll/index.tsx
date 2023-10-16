import CrunchyrollCards from "@/components/crunchyroll/crunchyroll_cards";
import { Anime } from "@/models/anime";

import axios from "axios";
import { Fragment, useState } from 'react'

export default function Crunchyroll(props: any) {

  const [animes, setAnimes] = useState(props.animes)

  let animeHandler = async (e: { target: { value: string; }; }) => {
    let a = await getAnimesByTitle(e.target.value);
    setAnimes(a);
  }

  return (
    <Fragment>
      <div className="row">
        <div className="col-xl-2 block">
          <div>
            <p>SEARCHBAR</p>
            <div className="form-outline">
              <input type="search" id="form1" className="form-control" placeholder="Anime Title" aria-label="Search" onChange={animeHandler}/>
            </div>
          </div>
          <div>
            <p>GENRES</p>
            
          </div>
          <div>
            <p>RATING</p>
          </div>
        </div>
        <div className="col-xl-10">
            <CrunchyrollCards animes={animes}/>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        PAGINATOR
      </div>
    </Fragment>
  )
}

export async function getServerSideProps(ctx: any) 
{
  let title = '';

  if(ctx.query.title)
    title = ctx.query.title;
  
  let animes = await axios.get(`${process.env.NEXTAUTH_URL}/api/crunchyroll/`).then(x => { return x.data });
  animes = animes.sort(() => 0.5 - Math.random()) as Anime[];
  return {
    props: {
      animes
    }
  };
}

async function getAnimesByTitle(title:string)
{
  const url = window.location.origin
  let animes = await axios.get(`${url}/api/crunchyroll/?title=${title}`).then(x => { return x.data });
  animes = animes.sort(() => 0.5 - Math.random()) as Anime[];
  return animes;
}