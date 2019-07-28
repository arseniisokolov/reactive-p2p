import { Routes } from '@angular/router';
import { LayoutTabTransferComponent } from './components/layout/tabs/transfer/layout-tab-transfer.component';
import { LayoutTabTimelineComponent } from './components/layout/tabs/timeline/layout-tab-timeline.component';
import { CabinetLayoutComponent } from './components/layout/cabinet-layout.component';
import { AppActionTypes } from '../../data/app-action-types.enum';

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
                component: LayoutTabTransferComponent,
                data: { action: AppActionTypes.toCreateTransfer }
            },
            {
                path: 'timeline',
                component: LayoutTabTimelineComponent,
                data: { action: AppActionTypes.toTimeline }
            }
        ]
    }
];