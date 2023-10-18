import ProjectCard from "@/components/projectCard/projectCard";
import Link from "next/link";

export default function Projects() {
    return (
        <div className="container" style={{marginTop:'80px'}}>
            <div className="row">
                <div className="col-xl-4 col-lg-6">
                    <ProjectCard route="/github" image="github.png" title="Github" description="Github repositories" />
                </div>
                <div className="col-xl-4 col-lg-6">
                    <ProjectCard route="/crunchyroll" image="crunchyroll.png" title="Crunchyroll" description="Scraped Animes from Crunchyroll" />
                </div>
                <div className="col-xl-4 col-lg-6">
                    <ProjectCard route="/pokedex" image="pokemon.jpg" title="Pokemon" description="Scraped Pokemon from Pokemon.com" />
                </div>
            </div>
        </div>
    );
}