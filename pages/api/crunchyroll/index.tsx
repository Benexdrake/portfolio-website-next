import { GetDB } from "@/lib/mongodb";
import { Anime } from "@/models/anime";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler( req: NextApiRequest, res: NextApiResponse ) 
{
    if(req.method === 'GET')
    {

        let title = '';
        let rating = 5;
        let tag = ''

        const animes = await (await GetDB('Crunchyroll', 'Animes')).find().toArray() as unknown as Anime[];
        if(!req.query.title)
        {   
            res.status(200).json(animes)
        }
        else
        {   
            title = req.query.title as string;
            if(tag !== '')
            {
                const a = animes.filter((a:Anime) => a.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()) && a.rating <= rating && a.tags.includes(tag))
                res.status(200).json(a)
            }
            else
            {
                const a = animes.filter((a:Anime) => a.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()) && a.rating <= rating )
                res.status(200).json(a)
            }
        }
    }    
    else
        res.status(200).json({})
}