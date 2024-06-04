import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { ListCategory } from '../../models/list-category';
import { CategoryService } from '../../services/category.service';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-category',
  standalone: true,
  imports: [FormsModule, JsonPipe, RouterLink],
  templateUrl: './list-category.component.html',
  styleUrl: './list-category.component.css'
})
export class ListCategoryComponent implements OnInit {
  categoryDeleted: boolean = false;
  constructor(private categoryService: CategoryService, private router: Router) { }
  listCategoryObj = new ListCategory();
  categoryCreated = true;


  ngOnInit() {
    //debugger;
    //list the category to api
    this.categoryService.listCategory().subscribe(
      res => {

        this.listCategoryObj.listCategories = Object(res);
        this.categoryCreated = true;
        console.log("ngOnInit:", res);

      },
      err => {
        console.log("Something went worng:", err);
      }
    );
  }


  DeleteCategory(categoryId: number) {
    console.log("DeleteCategory:", categoryId);
    this.categoryService.deleteCategoyById(categoryId).subscribe(
      res => {
        this.categoryDeleted = true;
        this.categoryService.listCategory().subscribe(
          res => {

            this.listCategoryObj.listCategories = Object(res);
            this.categoryCreated = true;
            console.log("ngOnInit:", res);

          });
      }
    );
  }
}
