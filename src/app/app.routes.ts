import { Routes } from '@angular/router';
import { PageNotFoundComponent } from 'core-library/core/components/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'cabinet',
        pathMatch: 'full'
    },
    {
        path: 'cabinet',
        loadChildren: './cabinet/cabinet.module#CabinetModule'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];