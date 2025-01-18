import { Troop } from "@/app/interface/Troop"
import Image from "next/image"

export default async function View({ params, }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    const response = await fetch(`https://strapi-jamstack.onrender.com/api/troops?filters[slug][$eq]=${slug}&populate=*`)
    const troop: Troop = (await response.json()).data[0]
    return (
        <div className="h-full w-full flex flex-col justify-center items-center gap-4 px-10 py-10">
            <span className="text-4xl">{troop.name}</span>
            <Image
                src={"http://localhost:1337" + troop.design.url}
                alt={troop.design.name}
                width={512}
                height={512}
            />
            {troop.description.map((item, index) => (
                <span key={index}>{item.children[0].text}</span>
            ))}
        </div>
    )
}