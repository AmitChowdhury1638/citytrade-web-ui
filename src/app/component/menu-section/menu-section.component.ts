import { Component, OnInit } from '@angular/core';
import { AddMenuSectionComponent } from '../add-menu-section/add-menu-section.component';
import * as data from 'src/app/menu-section.json';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.css']
})
export class MenuSectionComponent implements OnInit {

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
    const ref = this.dialogService.open(AddMenuSectionComponent, {
        header: 'Add Menu Section',
        width: '21%'
    });
  }

}
