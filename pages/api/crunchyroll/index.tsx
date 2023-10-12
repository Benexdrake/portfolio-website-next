import { GetDB } from "@/lib/mongodb";
import { Anime } from "@/models/anime";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler( req: NextApiRequest, res: NextApiResponse ) 
{
    if(req.method === 'GET')
    {
        const animes = await (await GetDB('Crunchyroll', 'Animes')).find().toArray() as unknown as Anime[];
        if(!req.query.title)
        {   
            res.status(200).json(animes)
        }
        else
        {
            const title = req.query.title as string;
            const a = animes.filter((a:Anime) => a.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()))
            res.status(200).json(a)
        }
    }    
    else
        res.status(200).json({})
}