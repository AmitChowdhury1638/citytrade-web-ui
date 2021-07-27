import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor() { }

  form!: FormGroup;
  
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      contactNumber: new FormControl('', [Validators.required, 
                                        Validators.maxLength(10), 
                                        Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, 
                                  Validators.email]),
      type: new FormControl('', Validators.required)
    })
  }

  get name() {
    return this.form.get('name');
  }

  get contactNumber() {
    return this.form.get('contactNumber');
  }

  get email() {
    return this.form.get('email');
  }

  get type() {
    return this.form.get('type');
  }

  onSubmit() {

  }

}
