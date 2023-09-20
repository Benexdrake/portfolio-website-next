import ProjectCard from "@/components/projectCard/projectCard";
import Link from "next/link";

export default function Projects() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-6">
                    <Link href="/github" style={{ textDecoration: 'none' }}><ProjectCard image="github.png" title="Github" description="Github repositories" /></Link>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <Link href="/crunchyroll" style={{ textDecoration: 'none' }}><ProjectCard image="crunchyroll.png" title="Crunchyroll" description="Scraped Animes from Crunchyroll" /></Link>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <Link href="/pokedex" style={{ textDecoration: 'none' }}><ProjectCard image="pokemon.jpg" title="Pokemon" description="Scraped Pokemon from Pokemon.com" /></Link>
                </div>
            </div>
        </div>
    );
}