import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// modules
import { TransferModule } from '../transfer/transfer.module';
import { HistoryModule } from '../history/history.module';

// components
import { AuthorLogoComponent } from 'core-library/core/components/author-logo/author-logo.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { CabinetLayoutComponent } from './components/layout/cabinet-layout.component';
import { LayoutTabTransferComponent } from './components/layout/tabs/transfer/layout-tab-transfer.component';
import { LayoutTabTimelineComponent } from './components/layout/tabs/timeline/layout-tab-timeline.component';

import { cabinetRoutes } from './cabinet.routes';

@NgModule({
  declarations: [
    CabinetLayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LayoutTabTransferComponent,
    LayoutTabTimelineComponent,
    AuthorLogoComponent,
  ],
  exports: [
    CabinetLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(cabinetRoutes),
    TransferModule.forRoot(),
    HistoryModule.forRoot(),
  ]
})
export class CabinetModule {
}
