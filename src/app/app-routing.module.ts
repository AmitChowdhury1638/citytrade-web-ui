import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CategoryComponent } from './component/category/category.component';
import { TopmenuComponent } from './component/topmenu/topmenu.component';
import { AdminMenuComponent } from './component/admin-menu/admin-menu.component';
import { VendorMenuComponent } from './component/vendor-menu/vendor-menu.component';
import { PaymentComponent } from './component/payment/payment.component';
import { VendorComponent } from './component/vendor/vendor.component';
import { VendorFilterComponent } from './component/vendor-filter/vendor-filter.component';
import { MenuSectionComponent } from './component/menu-section/menu-section.component';
import { ItemComponent } from './component/item/item.component';
import { FeatureComponent } from './component/feature/feature.component';
import { TimeSlotComponent } from './component/time-slot/time-slot.component';
import { UserComponent } from './component/user/user.component';


const routes: Routes = [
  {path: '', redirectTo: '/citytrade/admin-menu/home', pathMatch: 'full'},
  {path: 'citytrade', component: TopmenuComponent,
    children: [
      {
        path: 'admin-menu', component: AdminMenuComponent,
          children: [
            {path: 'home', component: HomeComponent},
            {path: 'categories', component: CategoryComponent},
            {path: 'vendors', component:VendorComponent},
            {path: 'users', component:UserComponent}
          ]
      },
      {
        path: 'vendor-menu', component: VendorMenuComponent,
          children:[
            {path: 'home', component: HomeComponent},
            {path: 'vendor-filters', component: VendorFilterComponent},
            {path: 'menu-sections', component: MenuSectionComponent},
            {path: 'items', component: ItemComponent},
            {path: 'payments', component: PaymentComponent},
            {path: 'features', component: FeatureComponent},
            {path: 'time-slots', component: TimeSlotComponent}
          ]
      }
    ]
  }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
