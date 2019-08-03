import { Routes } from '@angular/router';
import { CardsCollectionLayoutComponent } from './layout/cards-collection-layout.component';
import { MyCardsEditFormComponent } from './edit-form/my-cards-edit-form.component';

export const cardsCollectionRoutes: Routes = [
    {
        path: '',
        component: CardsCollectionLayoutComponent,
        children: [
            {
                path: 'edit/:id',
                component: MyCardsEditFormComponent,
            }
        ]
    }
];