import { MongoClient } from "mongodb";
import config from '@/config.json'

async function GetClient()
{
    return await MongoClient.connect(config.mongo);
}

export async function GetDB(db:string, collection:string)
{
    const client = await GetClient();
    
    const _db = client.db(db);

    const _collection = _db.collection(collection);

    return _collection;
}