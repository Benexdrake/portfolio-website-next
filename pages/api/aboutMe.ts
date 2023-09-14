import { NextApiRequest, NextApiResponse } from "next";
import aboutMe from '@/aboutMe.json'
export default async function handler( req: NextApiRequest, res: NextApiResponse ) 
{
    if(req.method === 'GET')
    {
        res.status(200).json(aboutMe);
    }    
}