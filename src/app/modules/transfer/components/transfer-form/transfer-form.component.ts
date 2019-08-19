import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TransferFormViewModel } from '../../view-models/transfer-form.view-model';

@Component({
    selector: 'transfer-form',
    templateUrl: './transfer-form.component.html',
    styleUrls: ['./styles/transfer-form.master.scss']
})
export class TransferFormComponent {

    @Input()
    public model: TransferFormViewModel;

    @Output()
    public onSubmit: EventEmitter<void> = new EventEmitter<void>();

    constructor(
    ) { }

    public submitForm() {
        this.onSubmit.emit();
    }

}
