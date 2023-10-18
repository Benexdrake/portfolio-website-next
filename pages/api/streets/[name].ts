import { NextApiRequest, NextApiResponse } from "next";
import streets from '@/streets.json'

export default async function handler( req: NextApiRequest, res: NextApiResponse ) 
{
    if(req.method === 'GET')
    {
        let streetName = req.query.streetName as string;

        let s = streets.filter(x => x.street.toLocaleLowerCase().includes(streetName.toLocaleLowerCase()));

        res.status(200).json(s)
    }
}