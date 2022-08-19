import { Component, OnInit, ViewChild } from '@angular/core';
import { IMenuTemplate } from '@models/menu.interface';
import { AppSettings, Settings } from 'src/app/app.settings';
import { MenuTemplateService } from 'src/app/shared/services/menuTemplate.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @ViewChild('sidenav') sidenav: any;
  public userImage = 'assets/images/others/admin.jpg';
  public settings: Settings = {} as any;
  public toggleSearchBar: boolean = false;
  public menuItems: Array<IMenuTemplate> = [];
  constructor(public appSettings: AppSettings,
    public menuService: MenuTemplateService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
  }
  public toggleSidenav() {
    this.sidenav.toggle();
  }
}
