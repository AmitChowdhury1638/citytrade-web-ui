import { Component, OnInit } from '@angular/core';
import { AddTimeSlotComponent } from '../add-time-slot/add-time-slot.component';
import * as data from 'src/app/time-slot.json';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.css']
})
export class TimeSlotComponent implements OnInit {

  editEnabled = false;
  data: any = (data as any).default;

  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
  }

  onRowEditInit(customer: any, index: number) {
    console.log(index);
    this.editEnabled = true;
    console.log('Row edit initialized');
  }

  onRowEditSave(customer: any, index: number) {
    console.log(index);
    this.editEnabled = false;
    console.log('Row edit saved');
  }

  onRowEditCancel(customer: any, index: number) {
    console.log(index);
    this.editEnabled = false;
    console.log('Row edit cancelled');
  }

  show() {
    const ref = this.dialogService.open(AddTimeSlotComponent, {
        header: 'Add Timeslot',
        width: '21%'
    });
  }

}
