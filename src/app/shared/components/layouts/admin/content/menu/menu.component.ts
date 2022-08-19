import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { IMenuTemplate } from "@models/menu.interface";
import { MenuTemplateService } from "src/app/shared/services/menuTemplate.service";
@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
  encapsulation: ViewEncapsulation.None,
  providers: [MenuTemplateService],
})
export class MenuComponent implements OnInit {
  parentMenu: Array<IMenuTemplate> = [];
  @Input("menuItems") menuItems: Array<IMenuTemplate> = [];
  @Input("menuParentId") menuParentId: number = 0;
  constructor(public menuService: MenuTemplateService) {}

  ngOnInit(): void {
    this.parentMenu = this.menuItems.filter(
      (item) => item.parentId == this.menuParentId
    );
  }

  onClick(menuId: number) {
    this.menuService.toggleMenuItem(menuId);
  }
}
