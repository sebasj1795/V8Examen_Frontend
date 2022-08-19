import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DemoComponent } from "./demo/demo.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./../pages/dashboard/dashboard.module").then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: "maintenance",
    loadChildren: () =>
      import("./maintenance/maintenance.module").then(
        (m) => m.MaintenanceModule
      ),
  },
  {
    path: "demo",
    component: DemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
