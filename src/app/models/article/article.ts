import { Category } from "../category";

export class Article {
    title: String;
    url: string;
    description: string;
    cateogryId: number;
    constructor() {
        this.title = "";
        this.url = "";
        this.description = "";
        this.cateogryId = 0;
    }
}