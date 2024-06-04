import { Component } from '@angular/core';
import { ReviewArticle } from '../../models/review-article';

@Component({
  selector: 'app-review-article',
  standalone: true,
  imports: [],
  templateUrl: './review-article.component.html',
  styleUrl: './review-article.component.css'
})
export class ReviewArticleComponent {
  reviewArticleObj = new ReviewArticle();
}
