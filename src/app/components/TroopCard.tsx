import Image from "next/image";
import { Troop } from "../interface/Troop";
import Link from "next/link";

interface TroopCardProps {
    troop: Troop
}

export default async function HeroCard({ troop }: TroopCardProps) {
    return (
        <Link href={"/troops/" + troop.slug} className="flex flex-col justify-center items-center border-2 border-black rounded-2xl px-4 py-2">
            <span>{troop.name}</span>
            <Image
                src={"https://strapi-jamstack.onrender.com" + troop.design.url}
                alt={troop.design.name}
                width={256}
                height={256}
            />
        </Link>
    )
}