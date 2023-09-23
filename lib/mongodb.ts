import { MongoClient } from "mongodb";

async function GetClient()
{
    return await MongoClient.connect(process.env.Mongo);
}

export async function GetDB(db:string, collection:string)
{
    const client = await GetClient();
    
    const _db = client.db(db);

    const _collection = _db.collection(collection);

    return _collection;
}