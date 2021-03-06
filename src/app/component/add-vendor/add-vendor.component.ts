import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {

  constructor() { }

  form!: FormGroup;
  
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required, 
                                        Validators.maxLength(10), 
                                        Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, 
                                  Validators.email])
    })
  }

  get name() {
    return this.form.get('name');
  }

  get phoneNumber() {
    return this.form.get('phoneNumber');
  }

  get email() {
    return this.form.get('email');
  }

  onSubmit() {

  }

}
