import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// components
import * as ListComponents from './list';
import { CardsCollectionLayoutComponent } from './layout/cards-collection-layout.component';
import { MyCardsEditFormComponent } from './edit-form/my-cards-edit-form.component';

// services
import { CardsCollectionService } from './data/cards-collection.service';

import { cardsCollectionRoutes } from './cards-collection.routes';


@NgModule({
  declarations: [
    ListComponents.CardsCollectionListComponent,
    ListComponents.CardsCollectionListItemComponent,
    ListComponents.MyCardsListFilterComponent,
    CardsCollectionLayoutComponent,
    MyCardsEditFormComponent,
  ],
  exports: [],
  imports: [
    RouterModule.forChild(cardsCollectionRoutes),
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    CardsCollectionService,
  ]
})
export class CardsCollectionModule { }
