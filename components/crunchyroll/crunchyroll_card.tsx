import { getStars } from "@/lib/helper";
import { Anime } from "@/models/anime";
import Image from 'next/image';
import Link from 'next/link'

export default function CrunchyrollCard(props: any) {
    const anime = props.anime as Anime;
    return (
        <Link href={anime.url} target="_blank">
        <div className="card-crunchyroll" style={{backgroundImage:`url("${anime.imageUrl.replace('480x720','120x180')}")`, backgroundSize:'cover'}}>
            
        </div>
        </Link>
    )
}