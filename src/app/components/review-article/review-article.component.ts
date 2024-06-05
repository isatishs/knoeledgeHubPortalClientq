import { Component } from '@angular/core';
import { ReviewArticle } from '../../models/review-article';
import { ArticleService } from '../../services/article.service';
import { CategoryService } from '../../services/category.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-review-article',
  standalone: true,
  imports: [FormsModule, JsonPipe, RouterLink, CommonModule],
  templateUrl: './review-article.component.html',
  styleUrl: './review-article.component.css'
})
export class ReviewArticleComponent {
  selected: any;
  reviewArticleObj = [];
  categoryObj = [];
  cateoryIdSelect: number = 0;
  articleIDs: number[] = [];
  articleApproved: boolean = false;
  articleRejected: boolean = false;

  constructor(private articleService: ArticleService, private categoryService: CategoryService) { }


  ngOnInit(): void {
    this.categoryService.listCategory().subscribe(
      res => {

        this.categoryObj = res;
        console.log("ngOnInit:", res);

      },
      err => {
        console.log("Something went worng:", err);
      }
    );
    this.articleService.reviewArticle(0).subscribe(
      res => {
        console.log(res);
        this.reviewArticleObj = res;
      },
      err => {

      }
    );
  }

  onOptionsSelected(event: any) {

    let categoryId = event.target.value;
    this.articleService.reviewArticle(categoryId).subscribe({
      next: res => {
        console.log(res);
        this.reviewArticleObj = res;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  onApprove() {
    console.log(this.articleIDs);

    this.articleService.approveArticle(this.articleIDs).subscribe({
      next: res => {
        this.articleApproved = true;
        this.articleService.reviewArticle(0).subscribe({
          next: res1 => {
            console.log(res);
            this.reviewArticleObj = res1;
          },
          error: err => {
            console.log(err);
          }
        });
      },
      error: err => {
        console.log(err);
      }
    });


  }

  onReject() {
    console.log(this.articleIDs);

    this.articleService.rejectArticle(this.articleIDs).subscribe({
      next: res => {
        this.articleRejected = true;
        this.articleService.reviewArticle(0).subscribe({
          next: res1 => {
            console.log(res);
            this.reviewArticleObj = res1;
          },
          error: err => {
            console.log(err);
          }
        });
      },
      error: err => {
        console.log(err);
      }
    });


  }
  changed(event: any, articleID: number) {
    if (event.target.checked) {
      this.articleIDs.push(articleID);
    }
    else {
      this.articleIDs = this.articleIDs.filter(id => id !== articleID)
    }
    console.log(this.articleIDs)
  }
}
