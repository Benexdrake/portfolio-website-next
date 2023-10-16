import { NextApiRequest, NextApiResponse } from "next";
import streets from '@/streets.json'

export default async function handler( req: NextApiRequest, res: NextApiResponse ) 
{
    if(req.method === 'GET')
    {
        res.status(200).json(streets)
    }
}