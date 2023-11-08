import { CreateOrUpdateAnime } from "@/lib/mongodb";
import { Anime } from "@/models/anime";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler( req: NextApiRequest, res: NextApiResponse ) 
{
    
    if(req.method === 'POST')
    {
        let anime = req.body.anime;
        let pw = req.body.pw;

        if(pw === 123456)
        {
            let a = new Anime();

            a._id = anime.id;
            a.url = anime.url
            a.title = anime.title
            a.description = anime.description;
            a.episodes = anime.episodes;
            a.seasons = anime.seasons;
            a.imageUrl_card = anime.imageUrl_Card;
            a.imageUrl_banner = anime.imageUrl_Banner;
            a.publisher = anime.publisher;
            a.rating = anime.rating;
            a.tags = anime.genres;
            a.audios = anime.audios;
            a.subTitles = anime.subTitles

            await CreateOrUpdateAnime("Crunchyroll","Animes", a)
        }
    }    
    
        res.status(200).json({})
}