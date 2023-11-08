import { GetDBAnime } from "@/lib/mongodb";
import { Anime } from "@/models/anime";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler( req: NextApiRequest, res: NextApiResponse ) 
{
    if(req.method === 'GET')
    {


        const animes = await (await GetDBAnime('Crunchyroll', 'Animes')).find().toArray() as unknown as Anime[];

        let urls = animes.map(x => {
            return x.url
        })

        res.status(200).json(urls)
    }    
    else
        res.status(200).json({})
}