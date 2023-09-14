import { GetDB } from "@/lib/mongodb";
import { Anime } from "@/models/anime";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler( req: NextApiRequest, res: NextApiResponse ) 
{
    if(req.method === 'GET')
    {

        const id = req.query.id as unknown as ObjectId;
        const anime = await (await GetDB('Crunchyroll','Animes')).findOne<Anime>({_id:id});
        res.status(200).json(anime)
    }    
}