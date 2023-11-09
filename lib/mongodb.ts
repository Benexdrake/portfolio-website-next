import { Anime } from "@/models/anime";
import { Pokemon } from "@/models/pokemon/pokemon";
import { Collection, MongoClient, ObjectId } from "mongodb";

async function GetClient()
{
    return await MongoClient.connect(process.env.Mongo);
}

export async function GetDBAnime(db:string, collection:string)
{
    const client = await GetClient();
    
    const _db = client.db(db);

    const _collection = _db.collection<Anime>(collection);

    return _collection;
}


export async function GetDBPokemon(db:string, collection:string)
{
    const client = await GetClient();
    
    const _db = client.db(db);

    const _collection = _db.collection<Pokemon>(collection);

    return _collection;
}

export async function CreateOrUpdateAnime(db:string, collection:string, anime:Anime)
{
    let ANIMES = await GetDBAnime(db,collection);

    let dbAnime = await ANIMES.find({'_id': anime._id}).toArray();

    if(dbAnime.length > 0)
    {
        // Update
        console.log("Update", anime._id)

        if(anime.url)
            ANIMES.updateOne({"_id": anime._id}, {$set: { url:anime.url }}, {upsert: true})
        if(anime.title)
            ANIMES.updateOne({"_id": anime._id}, {$set: { title:anime.title }}, {upsert: true})
        if(anime.description)
        ANIMES.updateOne({"_id": anime._id}, {$set: { description:anime.description }}, {upsert: true})
        if(anime.episodes > 0)
        ANIMES.updateOne({"_id": anime._id}, {$set: { episodes: anime.episodes }}, {upsert: true})
        if(anime.seasons > 0)
        ANIMES.updateOne({"_id": anime._id}, {$set: { seasons:anime.seasons }}, {upsert: true})
        if(anime.imageUrl_card)
        ANIMES.updateOne({"_id": anime._id}, {$set: { imageUrl_card: anime.imageUrl_card }}, {upsert: true})
        if(anime.imageUrl_banner)
        ANIMES.updateOne({"_id": anime._id}, {$set: { imageUrl_banner: anime.imageUrl_banner }}, {upsert: true})
        if(anime.publisher)
        await ANIMES.updateOne({"_id": anime._id}, {$set: { publisher: anime.publisher }}, {upsert: true})
        if(anime.rating > 0)
        ANIMES.updateOne({"_id": anime._id}, {$set: { rating:anime.rating }}, {upsert: true})
        if(anime.tags?.length > 0 || anime.tags)
        ANIMES.updateOne({"_id": anime._id}, {$set: { tags:anime.tags }}, {upsert: true})
        if(anime.audios?.length > 0 || anime.audios)
        ANIMES.updateOne({"_id": anime._id}, {$set: { audios:anime.audios }}, {upsert: true})
        if(anime.subTitles?.length > 0 || anime.subTitles)
        ANIMES.updateOne({"_id": anime._id}, {$set: { subTitles:anime.subTitles }}, {upsert: true})
    }
    else
    {
        // Create
        console.log("Create", anime._id)
        ANIMES.insertOne(anime);
    }

    
}