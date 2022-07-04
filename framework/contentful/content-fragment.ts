export default class ContentFragment {
    public content: string;

    constructor(public id: string, content: string) {
        this.content = `
            fragment ${id} on ${id} {
                ${content}
            }
        `
    }
}