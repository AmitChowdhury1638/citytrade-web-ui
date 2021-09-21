import { Component, OnInit } from '@angular/core';
import { AddItemComponent } from '../add-item/add-item.component';
import * as data from 'src/app/item.json';
import { DialogService } from 'primeng/dynamicdialog';
import * as vendor from 'src/app/vendor.json';
import { Vendor } from 'src/app/vendor';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  editEnabled = false;
  data: any = (data as any).default;
  vendors: any = (vendor as any).default;
  selectedVendor!: Vendor;

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
    const ref = this.dialogService.open(AddItemComponent, {
        header: 'Add Item',
        width: '350px'
    });
  }

}
