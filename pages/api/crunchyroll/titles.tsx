import { GetDBAnime } from "@/lib/mongodb";
import { Anime } from "@/models/anime";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler( req: NextApiRequest, res: NextApiResponse ) 
{
    let animes = (await GetDBAnime("Crunchyroll", "Animes")).find().toArray()  as unknown as Anime[];

    let titles = animes.map(x => { return x.title})

    return res.status(200).json({titles:titles})
}