import TroopsCard from "../components/TroopsCard";
import NoDataCard from "../components/NoDataCard";
import { Troop } from "../interface/Troop";

export default async function Home() {
    const response: Response = await fetch(`http://localhost:1337/api/troops?populate=*`)
    const troops: Troop[] = (await response.json()).data
    return (
        <div className="h-full w-full flex flex-col justify-center items-center gap-10 px-10 py-10">
            <span className="text-4xl">Liste des Héros de Khorne</span>
            {troops.length > 0 ? <TroopsCard troops={troops} /> : <NoDataCard/>}
        </div>
    );
}
