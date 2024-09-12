import {
  AsyncPipe,
  NgClass,
  NgIf,
  NgTemplateOutlet,
} from '@angular/common';
import { Component } from '@angular/core';

import { HomeNewsComponent as BaseComponent } from '../../../../../app/home-page/home-news/home-news.component';
import { ThemedSearchFormComponent } from '../../../../../app/shared/search-form/themed-search-form.component';
import { ThemedConfigurationSearchPageComponent } from '../../../../../app/search-page/themed-configuration-search-page.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ds-themed-home-news',
  styleUrls: ['./home-news.component.scss'],
  //styleUrls: ['../../../../../app/home-page/home-news/home-news.component.scss'],
  templateUrl: './home-news.component.html',
  //templateUrl: '../../../../../app/home-page/home-news/home-news.component.html',
  standalone: true,
  imports: [
    ThemedSearchFormComponent, ThemedConfigurationSearchPageComponent, NgTemplateOutlet, NgIf, AsyncPipe, NgClass, TranslateModule,
  ],
})

/**
 * Component to render the news section on the home page
 */
export class HomeNewsComponent extends BaseComponent {}
