import { Hero } from "@/app/interface/Hero"
import Image from "next/image"

export default async function View({ params, }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    const response = await fetch(`http://localhost:1337/api/heroes?filters[slug][$eq]=${slug}&populate=*`)
    const hero: Hero = (await response.json()).data[0]
    return (
        <div className="h-full w-full flex flex-col justify-center items-center gap-4 px-10 py-10">
            <span className="text-4xl">{hero.name}</span>
            <Image
                src={"http://localhost:1337" + hero.design.url}
                alt={hero.design.name}
                width={512}
                height={512}
            />
            {hero.description.map((item, index) => (
                <span key={index}>{item.children[0].text}</span>
            ))}
        </div>
    )
}