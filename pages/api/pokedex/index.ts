import { GetDBPokemon } from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler( req: NextApiRequest, res: NextApiResponse ) 
{
        const pokemons = await (await GetDBPokemon('Pokedex','Pokemons')).find().toArray();
        res.status(200).json(pokemons)
}
