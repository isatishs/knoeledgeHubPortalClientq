import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-edit-category',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent implements OnInit {
  constructor(private categoryService: CategoryService, private router: Router, private activatedRoute: ActivatedRoute) { }
  editCategoryObj = new Category();
  categoryEdited = false;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      // console.log("params>>>>>>>>>>>>", params)
      let categoryId = params.get('[id]');
      // console.log("id>>>>>>>>>>>>", params.get('[id]'))
      this.categoryService.getCategoyById(Number(categoryId)).subscribe(
        res => {
          // console.log(res);
          this.editCategoryObj = res;
          alert(res.name);
        }
      );
    });

  }

  onUpdate() {
    this.categoryService.editCategoy(this.editCategoryObj).subscribe(
      res => {
        this.categoryEdited = true;
        this.editCategoryObj.description = "";
        this.editCategoryObj.name = "";
        this.router.navigateByUrl("category/list");
      }
    );
  }


}
