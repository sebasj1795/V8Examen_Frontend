import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppSettings, Settings } from './app.settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Security';
  public settings: Settings;
  constructor(public appSettings: AppSettings,
    public router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService
  ) {
    this.settings = this.appSettings.settings;
    /*Idioma*/
    this.translate.addLangs(['en', 'de', 'fr', 'ru', 'tr']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
