interface Heroes {
    id: number
    name: string
    design: {
        url: string
    }
}

export default async function View({ params, }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    const response = await fetch(`http://localhost:1337/api/heroes?filters[slug][$eq]=${slug}`)
    const data: Heroes = (await response.json()).data[0]
    console.log(data)
    return (
        <div>
            <span>{data.name}</span>
        </div>
    )
}