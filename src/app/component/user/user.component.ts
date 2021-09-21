import { Component, OnInit } from '@angular/core';
import * as data from 'src/app/user.json';
import { AddUserComponent } from '../add-user/add-user.component';
import { DialogService } from 'primeng/dynamicdialog';
import { FilterService } from 'primeng/api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public dialogService: DialogService,
              private filterService: FilterService) { }

  ngOnInit(): void {
  }

  
  editEnabled = false;
  data: any = (data as any).default;

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
    const ref = this.dialogService.open(AddUserComponent, {
        header: 'Add User',
        width: '350px'
    });
  }

}
