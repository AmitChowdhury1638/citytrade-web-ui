import { Component, OnInit } from '@angular/core';
import { AddVendorComponent } from '../add-vendor/add-vendor.component';
import * as data from 'src/app/vendor-filter.json';
import { DialogService } from 'primeng/dynamicdialog';
import * as category from 'src/app/category.json';
import { Category } from 'src/app/category';

@Component({
  selector: 'app-vendor-filter',
  templateUrl: './vendor-filter.component.html',
  styleUrls: ['./vendor-filter.component.css']
})
export class VendorFilterComponent implements OnInit {

  editEnabled = false;
  data: any = (data as any).default;
  categories: any = (category as any).default;
  selectedCategory!: Category;

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
    const ref = this.dialogService.open(AddVendorComponent, {
        header: 'Add Vendor Filter',
        width: '21%'
    });
  }

}
