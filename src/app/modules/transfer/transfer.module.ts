import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { CardFormComponent } from './components/card-form/card-form.component';
import { TransferLayoutComponent } from './components/layout/transfer-layout.component';

// services
import { TransferService } from './data/transfer.service';

import { transferRoutes } from './transfer.routes';

@NgModule({
  declarations: [
    TransferLayoutComponent,
    TransferFormComponent,
    CardFormComponent
  ],
  exports: [],
  imports: [
    RouterModule.forChild(transferRoutes),
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    TransferService,
  ]
})
export class TransferModule { }
