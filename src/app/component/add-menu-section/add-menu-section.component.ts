import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-menu-section',
  templateUrl: './add-menu-section.component.html',
  styleUrls: ['./add-menu-section.component.css']
})
export class AddMenuSectionComponent implements OnInit {

  constructor() { }

  form!: FormGroup;
  
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
    })
  }

  get name() {
    return this.form.get('name');
  }

  onSubmit() {

  }

}
