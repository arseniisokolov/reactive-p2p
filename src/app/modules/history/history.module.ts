import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// components
import { HistoryLayoutComponent } from './components/layout/history-layout.component';
import { HistoryListComponent } from './components/history-list/history-list.component';
import { HistoryFilterComponent } from './components/history-filter/history-filter.component';
import { HistoryListItemComponent } from './components/history-list-item/history-list-item.component';

// services
import { HistoryService } from './data/history.service';

import { historyRoutes } from './history.routes';

@NgModule({
  declarations: [
    HistoryLayoutComponent,
    HistoryListComponent,
    HistoryFilterComponent,
    HistoryListItemComponent
  ],
  exports: [],
  imports: [
    RouterModule.forChild(historyRoutes),
    CommonModule
  ],
  providers: [HistoryService]
})
export class HistoryModule { }
