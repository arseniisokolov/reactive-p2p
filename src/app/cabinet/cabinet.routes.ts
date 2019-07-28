import { Routes } from '@angular/router';
import { CreateTransferTabComponent } from './components/create-transfer-tab/create-transfer-tab.component';
import { HistoryTabComponent } from './components/history-tab/history-tab.component';
import { CabinetLayoutComponent } from './components/layout/cabinet-layout.component';
import { AppActionTypes } from '../app-data/app-action-types.enum';

export const cabinetRoutes: Routes = [
    {
        path: '',
        component: CabinetLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'create-transfer'
            },
            {
                path: 'create-transfer',
                component: CreateTransferTabComponent,
                data: { action: AppActionTypes.toCreateTransfer }
            },
            {
                path: 'history',
                component: HistoryTabComponent,
                data: { action: AppActionTypes.toHistory }
            }
        ]
    }
];