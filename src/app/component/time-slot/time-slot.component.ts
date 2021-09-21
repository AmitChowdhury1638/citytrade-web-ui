import { Component, OnInit } from '@angular/core';
import { AddTimeSlotComponent } from '../add-time-slot/add-time-slot.component';
import * as data from 'src/app/time-slot.json';
import { DialogService } from 'primeng/dynamicdialog';
import * as vendor from 'src/app/vendor.json';
import { Vendor } from 'src/app/vendor';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.css']
})
export class TimeSlotComponent implements OnInit {

  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
  }

  editEnabled = false;
  data: any = (data as any).default;
  vendors: any = (vendor as any).default;
  selectedVendor!: Vendor;

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
        width: '350px'
    });
  }

}
