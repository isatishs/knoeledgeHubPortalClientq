import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubmitArticle } from '../../models/submit-article';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article/article';

@Component({
  selector: 'app-submit-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './submit-article.component.html',
  styleUrl: './submit-article.component.css'
})
export class SubmitArticleComponent implements OnInit {
  submitArticleObj = new Article();
  articleSubmitted: boolean = false;
  categoryObj = [];
  /**
   *
   */
  constructor(private categoryService: CategoryService, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.categoryService.listCategory().subscribe({
      next: res => {

        this.categoryObj = res;
        console.log("ngOnInit:", res);

      },
      error: err => {
        console.log("Something went worng:", err);
      }
    });

  }


  onSubmit() {

    this.articleService.submitArticle(this.submitArticleObj).subscribe(
      res => {
        console.log(">>>>>>>>>>>", res);
        this.submitArticleObj.categoryId = null;
        this.submitArticleObj.description = "";
        this.submitArticleObj.title = "";
        this.submitArticleObj.title = "";
        this.articleSubmitted = true;
      }
    )
    console.log(`Tilte:${this.submitArticleObj.title}     categoryId:${this.submitArticleObj.categoryId}`);
  }

}
