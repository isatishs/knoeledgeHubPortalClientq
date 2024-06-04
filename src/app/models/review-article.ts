import { Category } from "./category";

export class ReviewArticle {
    title: string;
    url: string;
    description: string;
    category: any;

    /**
     *
     */
    constructor() {
        this.title = '';
        this.category = [
            {
                id: 1,
                name: 'Mobiles'
            },
            {
                id: 2,
                name: 'TV'
            }
        ];
        this.description = '';
        this.url = '';
    }
}