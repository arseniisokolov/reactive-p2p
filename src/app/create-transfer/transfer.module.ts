import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { CreateTransferFormComponent } from './components/create-transfer-form/create-transfer-form.component';
import { CardFormComponent } from './components/card-form/card-form.component';

// services
import { TransferService } from './data/transfer.service';

@NgModule({
  declarations: [
    CreateTransferFormComponent,
    CardFormComponent
  ],
  exports: [
    CreateTransferFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TransferModule {

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TransferModule,
      providers: [
        TransferService
      ]
    };
  }

}
