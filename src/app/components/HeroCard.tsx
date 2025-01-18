import Image from "next/image";
import { Hero } from "../interface/Hero";
import Link from "next/link";

interface HeroCardProps {
    hero: Hero
}

export default async function HeroCard({ hero }: HeroCardProps) {
    return (
        <Link href={"/heroes/" + hero.slug} className="flex flex-col justify-center items-center border-2 border-black rounded-2xl px-4 py-2">
            <span>{hero.name}</span>
            <Image
                src={"http://localhost:1337" + hero.design.url}
                alt={hero.design.name}
                width={256}
                height={256}
            />
        </Link>
    )
}