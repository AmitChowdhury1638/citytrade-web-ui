import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-time-slot',
  templateUrl: './add-time-slot.component.html',
  styleUrls: ['./add-time-slot.component.css']
})
export class AddTimeSlotComponent implements OnInit {

  constructor() { }

  form!: FormGroup;
  
  ngOnInit(): void {
    this.form = new FormGroup({
      openTime: new FormControl('', Validators.required),
      closeTime: new FormControl('', Validators.required),
      vendor: new FormControl('')
    })
  }

  get openTime() {
    return this.form.get('openTime');
  }

  get closeTime() {
    return this.form.get('closeTime');
  }

  onSubmit() {

  }

}
