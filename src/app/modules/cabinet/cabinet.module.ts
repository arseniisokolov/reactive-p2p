import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// modules

// components
import { AuthorLogoComponent } from 'core-library/angular/components/author-logo/author-logo.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { CabinetLayoutComponent } from './components/layout/cabinet-layout.component';

import { cabinetRoutes } from './cabinet.routes';

@NgModule({
  declarations: [
    CabinetLayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    AuthorLogoComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    RouterModule.forChild(cabinetRoutes),
  ]
})
export class CabinetModule {
}
