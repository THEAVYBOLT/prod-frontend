import { Component } from '@angular/core';
import {TopicSuggestionsComponent} from '../topic-suggestions/topic-suggestions.component';
import {TopicsSummaryPageComponent} from '../topics-summary-page/topics-summary-page.component';
import {MenuBarComponent} from '../menu-bar/menu-bar.component';

@Component({
  selector: 'app-main-page',
  imports: [
    TopicSuggestionsComponent,
    TopicsSummaryPageComponent,
    MenuBarComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
