import HeroesCard from "../components/HeroesCard";
import NoDataCard from "../components/NoDataCard";
import { Hero } from "../interface/Hero";

export default async function Home() {
    const response: Response = await fetch(`http://localhost:1337/api/heroes?populate=*`)
    const heroes: Hero[] = (await response.json()).data
    console.log(heroes)
    return (
        <div className="h-full w-full flex flex-col justify-center items-center gap-10 px-10 py-10">
            <span className="text-4xl">Liste des Héros de Khorne</span>
            {heroes.length > 0 ? <HeroesCard heroes={heroes} /> : <NoDataCard/>}
        </div>
    );
}
