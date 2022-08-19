import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedFormsModule } from '@shared/modules/forms/forms.module';
import { UserMenuComponent } from './content/user-menu/user-menu.component';
import { MenuComponent } from './content/menu/menu.component';
import { BreadcrumbComponent } from './content/breadcrumb/breadcrumb.component';
@NgModule({
  declarations: [
    AdminComponent,
    UserMenuComponent,
    MenuComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedFormsModule
  ]
})
export class AdminModule { }
