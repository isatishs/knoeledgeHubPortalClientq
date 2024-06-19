import { Component } from '@angular/core';
import { ReviewArticle } from '../../models/review-article';
import { ArticleService } from '../../services/article.service';
import { CategoryService } from '../../services/category.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Article } from '../../models/article/article';
import { reviewArticle } from '../../models/article/review-article';

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
  multiSelect: boolean = false;

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
        res.forEach(row => {
          row.approve = false
        })
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
    const arr = this.articleIDs.filter(i => i > 0)
    console.log("arr:", arr);
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


  changed(event: any, article: reviewArticle, i: number) {
    if (event.target.checked) {
      this.articleIDs[i] = article.articleID;
      console.log("this.articleIDs.length:", this.articleIDs.length);
      const arr = this.articleIDs.filter(i => i > 0)
      if (arr.length == this.reviewArticleObj.length)
        this.multiSelect = true;
    }
    else {
      this.articleIDs = this.articleIDs.filter(id => id !== article.articleID)
      const arr = this.articleIDs.filter(i => i > 0)
      console.log("this.articleIDs.length:", arr.length);
      if (arr.length < this.reviewArticleObj.length)
        this.multiSelect = false;
    }
    console.log(this.articleIDs)
  }


  selectAll(event: any) {
    console.log("selectAll:", event.target.checked)
    if (event.target.checked) {
      this.reviewArticleObj.forEach(x => {
        if (!this.articleIDs.includes(x.articleID)) {
          this.articleIDs.push(x.articleID);
        }
      })
    } else {
      this.articleIDs = [];
    }
    console.log("this.reviewArticleObj", this.reviewArticleObj)
    console.log("this.articleIDs", this.articleIDs)
  }
}
