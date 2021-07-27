import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import * as data from 'src/app/vendor.json';
import * as category from 'src/app/category.json';
import { AddVendorComponent } from '../add-vendor/add-vendor.component';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  constructor(public dialogService: DialogService) { }

  editEnabled = false;
  data: any = (data as any).default;
  categories: any = (category as any).default;

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
    const ref = this.dialogService.open(AddVendorComponent, {
        header: 'Add Vendor',
        width: '21%'
    });
  }

}
