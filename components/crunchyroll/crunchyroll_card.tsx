import { getStars } from "@/lib/helper";
import { Anime } from "@/models/anime";
import Image from 'next/image';
import Link from 'next/link'

export default function CrunchyrollCard(props: any) {
    const anime = props.anime as Anime;
    return (
        <div className="cardcomp col-xl-4 col-md-6 col-xs-12" key={anime._id} style={{ marginBottom: '20px' }}>
            <div className="card bg-dark text-white test">
                <Link href={anime.url} target="_blank">

                    <Image src={anime.imageUrl} className="card-img" alt="..." width={200} height={600} loading='lazy' />

                    <div className="card-img-overlay hidden" style={{ padding: '0px' }}>
                        <div className="d-flex justify-content-center overlay-card-top-color1">
                            <div>
                                <h5 className="card-title text-color4">{anime.title}</h5>
                            </div>
                        </div>

                        <div className="card-img-overlay h-100 d-flex flex-column justify-content-end hidden" style={{ padding: '0px' }}>
                            <div className="overlay-card-bottom-color1">

                                <div className="d-flex justify-content-between">
                                    <div>
                                        <p className="card-text text-color4">{anime.publisher}</p>
                                    </div>
                                    <div>
                                        <p className="card-text stars" style={{ fontSize: '1rem' }}>{getStars(anime.rating)}</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <p className="card-text text-color4">Seasons: {anime.seasons}</p>
                                    </div>
                                    <div>
                                        <p className="card-text text-color4">Episodes: {anime.episodes}</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start">
                                    {anime.tags.slice(0, 3).map(tag => { return <div key={anime._id + tag} className="tag-button">{tag}</div> })}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>

    )
}