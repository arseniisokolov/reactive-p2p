import { Routes } from '@angular/router';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { TransferLayoutComponent } from './components/layout/transfer-layout.component';

export const transferRoutes: Routes = [
    {
        path: '',
        component: TransferLayoutComponent,
    }
];