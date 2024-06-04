import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubmitArticle } from '../../models/submit-article';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-submit-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './submit-article.component.html',
  styleUrl: './submit-article.component.css'
})
export class SubmitArticleComponent implements OnInit {
  submitArticleObj = new SubmitArticle();
  categoryObj = [];
  /**
   *
   */
  constructor(private categoryService: CategoryService) { }

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

  }


  onSubmit() {
    console.log(`Tilte:${this.submitArticleObj.title}     categoryId:${this.submitArticleObj.categoryId}`);
  }

}
