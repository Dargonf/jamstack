export interface Troop {
    name: string
    description: [{
        type: string
        children: [{
            type: string
            text: string
        }]
    }],
    design: {
        name: string,
        url: string,
    }
    slug: string
}