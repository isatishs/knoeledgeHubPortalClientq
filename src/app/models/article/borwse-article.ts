
export class BrowseArticle {
    title: String;
    url: string;
    description: string;
    postedBy: string;
    categoryId: number;
    constructor() {
        this.title = "";
        this.url = "";
        this.description = "";
        this.postedBy = "";
        this.categoryId = 0;
    }
}