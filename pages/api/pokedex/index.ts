import { GetDB } from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler( req: NextApiRequest, res: NextApiResponse ) 
{
    if(req.method === 'POST' && req.body.key === process.env.PROTECT_API)
    {
        const pokemons = await (await GetDB('Pokedex','Pokemons')).find().toArray();
        res.status(200).json(pokemons)
    }    
    else
        res.status(200).json({no:'Nothing to see here'})
}