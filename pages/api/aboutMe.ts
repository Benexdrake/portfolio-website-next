import { NextApiRequest, NextApiResponse } from "next";
import aboutMe from '@/aboutMe.json'
export default async function handler( req: NextApiRequest, res: NextApiResponse ) 
{
    console.log(process.env.PROTECT_API)
    if(req.method === 'POST' && req.body.key === process.env.PROTECT_API)
    {
        res.status(200).json(aboutMe);
    }    
    else
        res.status(200).json({no:'Nothing to see here'})
}