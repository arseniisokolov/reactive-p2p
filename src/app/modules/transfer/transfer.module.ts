import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { CardFormSenderComponent } from './components/card-form/sender/card-form-sender.component';
import { CardFormContragentComponent } from './components/card-form/contragent/card-form-contragent.component';
import { TransferLayoutComponent } from './components/layout/transfer-layout.component';
import { CardFormExpandedSectionComponent } from './components/card-form/expanded-section/card-form-expanded-section.component';
import { CardFormNumberSectionComponent } from './components/card-form/number-section/card-form-number-section.component';

// services
import { TransferService } from './data/transfer.service';

import { transferRoutes } from './transfer.routes';

@NgModule({
  declarations: [
    TransferLayoutComponent,
    TransferFormComponent,
    CardFormSenderComponent,
    CardFormContragentComponent,
    CardFormExpandedSectionComponent,
    CardFormNumberSectionComponent,
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
