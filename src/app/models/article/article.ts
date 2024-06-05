import { Category } from "../category";

export class Article {
    title: String;
    url: string;
    description: string;
    categoryId: number;
    constructor() {
        this.title = "";
        this.url = "";
        this.description = "";
        this.categoryId = 0;
    }
}