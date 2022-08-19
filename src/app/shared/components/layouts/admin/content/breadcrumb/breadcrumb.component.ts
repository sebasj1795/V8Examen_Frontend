import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router,
  UrlSegment,
} from "@angular/router";
import { MenuTemplateService } from "@shared/services/menuTemplate.service";
import { AppSettings, Settings } from "src/app/app.settings";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.scss"],
})
export class BreadcrumbComponent {
  public settings: Settings = {} as any;
  public pageTitle!: string;
  public breadcrumbs: {
    name: string;
    url: string;
  }[] = [];
  constructor(
    public appSettings: AppSettings,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public title: Title,
    private menuService: MenuTemplateService
  ) {
    this.settings = this.appSettings.settings;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        debugger;
        this.breadcrumbs = [];
        this.parseRoute(this.router.routerState.snapshot.root);
      }
    });
  }

  private parseRoute(node: ActivatedRouteSnapshot) {
    if (node.data["breadcrumb"]) {
      if (node.url.length) {
        let urlSegments: UrlSegment[] = [];
        node.pathFromRoot.forEach((routerState) => {
          urlSegments = urlSegments.concat(routerState.url);
        });
        debugger;
        const urlPrevius : string = urlSegments[urlSegments.length-2].path;
        let url = urlSegments
          .map((urlSegment) => {
            return urlSegment.path;
          })
          .join("/");
        this.breadcrumbs.push({
          //name: node.data["breadcrumb"],
          name: urlPrevius +" / "+ node.data["breadcrumb"],
          url: "/" + url,
        });
      }
    }
    if (node.firstChild) {
      this.parseRoute(node.firstChild);
    }
  }
}
