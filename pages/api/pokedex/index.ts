import { GetDB } from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler( req: NextApiRequest, res: NextApiResponse ) 
{
    if(req.method === 'GET')
    {
        const pokemons = await (await GetDB('Pokedex','Pokemon')).find().toArray();
        res.status(200).json(pokemons)
    }    
}