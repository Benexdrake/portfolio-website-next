import { getStars } from "@/lib/helper";
import { Anime } from "@/models/anime";
import Link from 'next/link'

export default function CrunchyrollCard(props: any) {
    const anime = props.anime as Anime;
    return (
        <Link href={anime.url} target="_blank">
            <div className="card-crunchyroll">
                <div className="card-crunchyroll-inner">
                    <div className="card-crunchyroll-front" style={{ backgroundImage: `url("${anime.imageUrl_card.replace('480x720', '240x360')}")`, backgroundSize: 'cover' }}>
                        
                    </div>
                    <div className="card-crunchyroll-back text-color4" style={{backgroundImage: '../../../../assets/crunchyroll_back.png'}}> 
                        <div className="card-crunchyroll-header">
                            {anime.title}
                            </div>
                        {anime.tags && (
                            <div className="card-crunchyroll-bottom card-crunchyroll-bottom-buttons">
                            {anime.tags.map(x => {return (<div className="card-crunchyroll-tag-button">{x}</div>)})}
                        </div>
                        ) }
                            <div className="card-crunchyroll-bottom card-crunchyroll-bottom-rating" >{getStars(anime.rating)}</div>
                            <div className="card-crunchyroll-bottom card-crunchyroll-bottom-desc" >{anime.description.slice(0,100)+' ...'}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}