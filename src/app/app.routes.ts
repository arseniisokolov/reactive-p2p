import { Routes } from '@angular/router';
import { PageNotFoundComponent } from 'core-library/angular/components/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'cabinet',
        pathMatch: 'full'
    },
    {
        path: 'cabinet',
        loadChildren: './modules/cabinet/cabinet.module#CabinetModule'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];