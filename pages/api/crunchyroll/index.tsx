import { GetDB } from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler( req: NextApiRequest, res: NextApiResponse ) 
{
    if(req.method === 'GET')
    {
        const animes = await (await GetDB('Crunchyroll','Animes')).find().toArray();
        res.status(200).json(animes)
    }    
}