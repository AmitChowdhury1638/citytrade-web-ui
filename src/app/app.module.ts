import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TabMenuModule} from 'primeng/tabmenu';
import { TopmenuComponent } from './component/topmenu/topmenu.component';
import { HomeComponent } from './component/home/home.component';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { CategoryComponent } from './component/category/category.component';
import {DropdownModule} from 'primeng/dropdown';
import {PaginatorModule} from 'primeng/paginator';
import {FileUploadModule} from 'primeng/fileupload';
import { MultiSelectModule } from 'primeng/multiselect';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CheckboxModule} from 'primeng/checkbox';
import { LeftMenuComponent } from './component/left-menu/left-menu.component';
import { AdminMenuComponent } from './component/admin-menu/admin-menu.component';
import { VendorMenuComponent } from './component/vendor-menu/vendor-menu.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { AddCategoryComponent } from './component/add-category/add-category.component';
import { MenuModule } from 'primeng/menu';
import { PaymentComponent } from './component/payment/payment.component';
import { AddPaymentComponent } from './component/add-payment/add-payment.component';
import { VendorComponent } from './component/vendor/vendor.component';
import { AddVendorComponent } from './component/add-vendor/add-vendor.component';
import { AddVendorFilterComponent } from './component/add-vendor-filter/add-vendor-filter.component';
import { AddMenuSectionComponent } from './component/add-menu-section/add-menu-section.component';
import { AddItemComponent } from './component/add-item/add-item.component';
import { AddFeatureComponent } from './component/add-feature/add-feature.component';
import { AddTimeSlotComponent } from './component/add-time-slot/add-time-slot.component';
import { TimeSlotComponent } from './component/time-slot/time-slot.component';
import { FeatureComponent } from './component/feature/feature.component';
import { ItemComponent } from './component/item/item.component';
import { MenuSectionComponent } from './component/menu-section/menu-section.component';
import { VendorFilterComponent } from './component/vendor-filter/vendor-filter.component';
import { AbstractComponent } from './component/abstract/abstract.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminMenuComponent,
    CategoryComponent,
    HomeComponent,
    LeftMenuComponent,
    TopmenuComponent,
    VendorMenuComponent,
    AddCategoryComponent,
    PaymentComponent,
    AddPaymentComponent,
    VendorComponent,
    AddVendorComponent,
    AddVendorFilterComponent,
    AddMenuSectionComponent,
    AddItemComponent,
    AddFeatureComponent,
    AddTimeSlotComponent,
    TimeSlotComponent,
    FeatureComponent,
    ItemComponent,
    MenuSectionComponent,
    VendorFilterComponent,
    AbstractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    TabMenuModule,
    CalendarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    DropdownModule,
    PaginatorModule,
    FileUploadModule,
    MultiSelectModule,
    InputSwitchModule,
    CheckboxModule,
    MegaMenuModule,
    DynamicDialogModule,
    MenuModule
  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
