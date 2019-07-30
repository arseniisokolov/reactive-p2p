import { Routes } from '@angular/router';
import { MyCardsLayoutComponent } from './layout/my-cards-layout.component';
import { MyCardsEditFormComponent } from './edit-form/my-cards-edit-form.component';

export const myCardsRoutes: Routes = [
    {
        path: '',
        component: MyCardsLayoutComponent,
        children: [
            {
                path: 'edit/:id',
                component: MyCardsEditFormComponent,
            }
        ]
    }
];