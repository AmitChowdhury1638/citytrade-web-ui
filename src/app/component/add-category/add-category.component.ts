import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor() { }

  categoryForm!: FormGroup;

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
    
  }

}
