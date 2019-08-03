import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FormBaseViewModel } from 'core-library/core/view-models/form.base.view-model';
import { Helpers } from 'core-library/core/classes/helpers';
import { ICardTransfer, ICardAddToCollection } from '../../../core/card-transfer.interface';
import { CardFormViewModel } from './card-form.view-model';


export class TransferFormViewModel extends FormBaseViewModel<ICardTransfer> {

    public SenderCard: CardFormViewModel;
    public ContragentCard: CardFormViewModel;

    public get IsValid(): boolean {
        return this.Form.valid && this.SenderCard.Form.valid && this.ContragentCard.Form.valid;
    }

    public initialize(data?: ICardTransfer): Observable<void> {
        this.SenderCard = new CardFormViewModel();
        this.ContragentCard = new CardFormViewModel();
        this.SenderCard.initialize({ title: 'Карта плательщика', type: 'sender' });
        this.ContragentCard.initialize({ title: 'Карта получателя', type: 'contragent' });
        return super.initialize().pipe(
            tap(() => this.fromModel(data))
        );
    }

    public fromModel(data: ICardTransfer) {
        if (!data)
            return;
        super.fromModel(data);
        this.Form.controls.Amount.setValue(data.amount, {});
        this.SenderCard.fromData(data.senderCard);
        this.ContragentCard.fromData(data.contragentCard);
    }

    public toModel(): ICardTransfer & ICardAddToCollection {
        return {
            id: Helpers.getGuid(),
            amount: this.Form.value.Amount,
            senderCard: this.SenderCard.toData(),
            contragentCard: this.ContragentCard.toData(),
            docDate: new Date().toString(),
            isSaveSenderCard: this.Form.value.AcceptSaveSenderCard,
            isSaveContragentCard: this.Form.value.AcceptSaveContragentCard,
        };
    }

    protected getControls(): { [key: string]: FormControl } {
        return {
            Amount: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1)]),
            AcceptSaveSenderCard: new FormControl(true),
            AcceptSaveContragentCard: new FormControl(),
        };
    }

}