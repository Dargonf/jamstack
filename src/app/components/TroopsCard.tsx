import { Troop } from "../interface/Troop"
import TroopCard from "./TroopCard"

interface TroopsCardProps {
    troops: Troop[]
}

export default async function HeroesCard({troops}: TroopsCardProps) {
    return (
        <div className="flex flex-row gap-6">
            {troops.map((troop, index) => (
                <TroopCard key={index} troop={troop} />
            ))}
        </div>
    )
}