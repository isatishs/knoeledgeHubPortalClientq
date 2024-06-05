import { Component, OnInit } from '@angular/core';
import { BrowseArticle } from '../../models/article/borwse-article';
import { ArticleService } from '../../services/article.service';
import { CategoryService } from '../../services/category.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-browse-articles',
  standalone: true,
  imports: [FormsModule, JsonPipe, RouterLink],
  templateUrl: './browse-articles.component.html',
  styleUrl: './browse-articles.component.css'
})
export class BrowseArticlesComponent implements OnInit {
  selectedItem: any;
  browseArticleObj = [];
  categoryObj = [];
  cateoryIdSelect: number = 0;
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
    this.articleService.browseArticle(0).subscribe(
      res => {
        console.log(res);
        this.browseArticleObj = res;
      },
      err => {

      }
    );
  }

  onOptionsSelected(event: any) {
    let categoryId = event.target.value;
    this.articleService.browseArticle(categoryId).subscribe(
      {
        next: res => {
          console.log(res);
          this.browseArticleObj = res;
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}
