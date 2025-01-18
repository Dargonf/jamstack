export interface Army {
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
}