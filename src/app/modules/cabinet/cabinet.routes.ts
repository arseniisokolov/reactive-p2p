import { Routes } from '@angular/router';
import { CabinetLayoutComponent } from './components/layout/cabinet-layout.component';
import { AppActionTypes } from '../../data/app-action-types.enum';

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
            // {
            //     path: 'create-transfer',
            //     component: LayoutTabTransferComponent,
            //     data: { action: AppActionTypes.toCreateTransfer }
            // },
            {
                path: 'create-transfer',
                loadChildren: '../transfer/transfer.module#TransferModule',
            },
            // {
            //     path: 'timeline',
            //     component: LayoutTabTimelineComponent,
            //     data: { action: AppActionTypes.toTimeline }
            // }
            {
                path: 'timeline',
                loadChildren: '../history/history.module#HistoryModule'
            },
        ]
    }
];