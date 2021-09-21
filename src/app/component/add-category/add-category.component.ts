import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private service: CategoryService) { }

  categoryForm!: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      name: new FormControl('', Validators.required),
      filterHeading: new FormControl('')
    })
  }

  get name() {
    return this.categoryForm.get('name');
  }

  get filterHeading() {
    return this.categoryForm.get('filterHeading');
  }

  onSubmit() {
    console.log(this.categoryForm.value);
    this.submitted = true;
    if (this.categoryForm.invalid) {
      return;
    }
    this.service.createCategory(this.categoryForm.value).subscribe(data=>{
      console.log(data);
    });
  }

}
