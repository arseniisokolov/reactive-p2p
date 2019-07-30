import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// components
import * as ListComponents from './list';
import { MyCardsLayoutComponent } from './layout/my-cards-layout.component';
import { MyCardsEditFormComponent } from './edit-form/my-cards-edit-form.component';

// services

import { myCardsRoutes } from './my-cards.routes';


@NgModule({
  declarations: [
    ListComponents.MyCardsListComponent,
    ListComponents.MyCardsListItemComponent,
    ListComponents.MyCardsListFilterComponent,
    MyCardsLayoutComponent,
    MyCardsEditFormComponent,
  ],
  exports: [],
  imports: [
    RouterModule.forChild(myCardsRoutes),
    CommonModule,
    ReactiveFormsModule
  ]
})
export class MyCardsModule { }
