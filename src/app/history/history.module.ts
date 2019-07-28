import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { HistoryListComponent } from './components/history-list/history-list.component';
import { HistoryFilterComponent } from './components/history-filter/history-filter.component';
import { HistoryListItemComponent } from './components/history-list-item/history-list-item.component';

//services
import { HistoryService } from './data/history.service';

@NgModule({
  declarations: [
    HistoryListComponent,
    HistoryFilterComponent,
    HistoryListItemComponent
  ],
  exports: [
    HistoryListComponent,
    HistoryFilterComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HistoryModule {

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: HistoryModule,
      providers: [
        HistoryService
      ]
    };
  }

}
