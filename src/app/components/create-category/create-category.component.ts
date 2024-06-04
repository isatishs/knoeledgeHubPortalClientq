import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent {
  constructor(private categoryService: CategoryService, private router: Router) { }
  categoryObj = new Category();
  categoryCreated: boolean = false;
  onSubmit() {
    //debugger;
    //submit the category to api
    this.categoryService.createCategory(this.categoryObj).subscribe(
      res => {
        this.categoryCreated = true;
        console.log("onSubmit:", res);

        this.categoryObj.name = "";
        this.categoryObj.description = "";

        this.router.navigateByUrl("category/list");

      },
      err => {
        console.log("Something went worng:", err);
      }
    );
  }
}
