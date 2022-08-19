import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoleListComponent } from "./roles/role-list/role-list.component";
import { RoleCreateComponent } from "./roles/role-create/role-create.component";
import { UserListComponent } from "./users/user-list/user-list.component";
import { UserCreateComponent } from "./users/user-create/user-create.component";
import { SharedFormsModule } from "@shared/modules/forms/forms.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EmployeeListComponent } from "./employees/employee-list/employee-list.component";
import { EmployeeCreateComponent } from "./employees/employee-create/employee-create.component";
import { EmployeeFilterComponent } from './employees/dialog/employee-filter/employee-filter.component';
import { TableEmployeeComponent } from './employees/components/table-employee/table-employee.component';

export const routes = [
  { path: "", redirectTo: "employee-list", pathMatch: "full" },
  {
    path: "role-list",
    component: RoleListComponent,
    data: { breadcrumb: "Role List" },
  },
  {
    path: "user-list",
    component: UserListComponent,
    data: { breadcrumb: "Users List" },
  },
  {
    path: "employee-list",
    component: EmployeeListComponent,
    data: { breadcrumb: "EmployeeList" },
  },
  {
    path: "employee-create",
    component: EmployeeCreateComponent,
    data: { breadcrumb: "EmployeeCreate" },
  },
  {
    path: "employee-edit/:code",
    component: EmployeeCreateComponent,
    data: { breadcrumb: "EmployeeCreate" },
  },
];

@NgModule({
  declarations: [
    RoleListComponent,
    RoleCreateComponent,
    UserListComponent,
    UserCreateComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeFilterComponent,
    TableEmployeeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedFormsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class MaintenanceModule {}
