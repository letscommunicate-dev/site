import Service from "./service"

export default interface Page {
    title: string,
    slug: string,
    description: string,
    keywords: string,
    image: {
        title: string,
        description: string,
        contentType: string,
        fileName: string,
        size: number,
        url: string,
        width: number,
        height: number
    },
    contentsCollection: {
        items: [{
            id: string,
            __typename: string,
            items: [],
            json: Object
        }]
    }
}