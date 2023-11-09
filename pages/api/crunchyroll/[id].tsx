import { GetDBAnime } from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler( req: NextApiRequest, res: NextApiResponse ) 
{
    if(req.method === 'GET')
    {
        const animes = await (await GetDBAnime('Crunchyroll','Animes')).find().toArray();

        let anime = animes.find(x => x._id.toString() === req.query.id)
        res.status(200).json(anime)
    }    
    else
        res.status(200).json({no:'Nothing to see here'})
}