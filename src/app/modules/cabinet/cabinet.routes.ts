import { Routes } from '@angular/router';
import { CabinetLayoutComponent } from './components/layout/cabinet-layout.component';
import { AppActionTypes } from '../../core/app-action-types.enum';

export const cabinetRoutes: Routes = [
    {
        path: '',
        component: CabinetLayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'create-transfer'
            },
            {
                path: 'create-transfer',
                loadChildren: '../transfer/transfer.module#TransferModule',
            },
            {
                path: 'timeline',
                loadChildren: '../history/history.module#HistoryModule'
            },
            {
                path: 'my-cards',
                loadChildren: '../my-cards/my-cards.module#MyCardsModule'
            },
        ]
    }
];