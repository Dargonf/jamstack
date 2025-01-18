import Link from "next/link";

interface Heroes {
    id: number
    name: string
    design: {
        url: string
    }
    slug: string
}

export default async function Home() {
    const response: Response = await fetch(`http://localhost:1337/api/heroes`)
    const data: Heroes[] = (await response.json()).data
    console.log(data)
    return (
        <div className="h-full w-full flex flex-col justify-center items-center gap-4">
            <span>some text</span>
            {data.map((hero) => (
                <Link className="border-2 rounded-2xl px-4 py-2" key={hero.id} href={"/heroes/" + hero.slug}>{hero.name}</Link>
            ))}
        </div>
    );
}
