import Image from "next/image";
import { Army } from "./interface/Army";
import Link from "next/link";

export default async function Home() {
    const response: Response = await fetch(`http://localhost:1337/api/army?populate=*`)
    const army: Army = (await response.json()).data
    console.log(army)
    return (
        <div className="h-full w-full flex flex-col justify-center items-center gap-10 px-10 py-10">
            <span className="text-4xl">Armée de {army.name}</span>
            <Image
                src={"http://localhost:1337" + army.design.url}
                alt={army.design.name}
                width={1024}
                height={1024}
            />
            {army.description.map((item, index) => (
                <span key={index}>{item.children[0].text}</span>
            ))}
            <div className="flex flex-row w-full justify-evenly">
                <Link href="/heroes"><span className="border-2 rounded-2xl px-4 py-2 border-black">Liste des Héros</span></Link>
                <Link href="/troops"><span className="border-2 rounded-2xl px-4 py-2 border-black">Liste des Troupes</span></Link>
            </div>
        </div>
    );
}
