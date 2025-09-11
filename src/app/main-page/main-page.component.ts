import { Component } from '@angular/core';
import {TopicSuggestionsComponent} from '../topic-suggestions/topic-suggestions.component';
import {TopicsSummaryPageComponent} from '../topics-summary-page/topics-summary-page.component';
import {MenuBarComponent} from '../menu-bar/menu-bar.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main-page',
  imports: [
    TopicSuggestionsComponent,
    TopicsSummaryPageComponent,
    MenuBarComponent,
    MatIconModule
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
