import { Category } from "./category";

export class SubmitArticle {
    title: string;
    url: string;
    description: string;
    categoryId: number;

    /**
     *
     */
    constructor() {
        this.title = '';
        this.categoryId = 0;
        this.description = '';
        this.url = '';
    }
}