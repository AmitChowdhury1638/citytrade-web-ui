import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import * as data from 'src/app/feature.json';
import * as category from 'src/app/category.json';
import { AddFeatureComponent } from '../add-feature/add-feature.component';
import { Category } from 'src/app/category';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

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
    const ref = this.dialogService.open(AddFeatureComponent, {
        header: 'Add Feature',
        width: '21%'
    });
  }

}
