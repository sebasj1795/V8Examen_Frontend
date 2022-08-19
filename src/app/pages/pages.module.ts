import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesRoutingModule } from "./pages-routing.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { DemoComponent } from "./demo/demo.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedFormsModule } from "@shared/modules/forms/forms.module";
import { MaintenanceModule } from "./maintenance/maintenance.module";
@NgModule({
  declarations: [DemoComponent],
  imports: [
    MaintenanceModule,
    CommonModule,
    PagesRoutingModule,
    DashboardModule,
    SharedFormsModule,

    ReactiveFormsModule,
    FormsModule,
  ],
})
export class PagesModule {}
