import { Hero } from "../interface/Hero"
import HeroCard from "./HeroCard"

interface HeroesCardProps {
    heroes: Hero[]
}

export default async function HeroesCard({heroes}: HeroesCardProps) {
    return (
        <div className="flex flex-row gap-6">
            {heroes.map((hero, index) => (
                <HeroCard key={index} hero={hero} />
            ))}
        </div>
    )
}