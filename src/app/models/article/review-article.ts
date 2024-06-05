export class reviewArticle {
    categoryName: string;
    title: string;
    url: string;
    description: string;
    postedBy: string;
    categoryId: number;
    articleID: number;
    approve: boolean;

    constructor() {
        this.categoryName = "";
        this.title = "";
        this.url = "";
        this.description = "";
        this.postedBy = "";
        this.categoryId = 0;
        this.articleID = 0;
    }
}