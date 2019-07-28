import { FormControl, Validators } from '@angular/forms';
import { FormBaseViewModel } from 'core-library/core/view-models/form.base.view-model';
import { Helpers } from 'core-library/core/classes/helpers';
import { ICardTransfer } from '../../../data/card-transfer.interface';
import { CardFormViewModel } from './card-form.view-model';


export class TransferFormViewModel extends FormBaseViewModel<ICardTransfer>{

    public CardFrom: CardFormViewModel;
    public CardTo: CardFormViewModel;

    public get IsValid(): boolean {
        return this.Form.valid && this.CardFrom.Form.valid && this.CardTo.Form.valid;
    }

    public initialize(data?: ICardTransfer) {
        this.CardFrom = new CardFormViewModel();
        this.CardTo = new CardFormViewModel();
        this.CardFrom.initialize({ title: 'Карта плательщика' });
        this.CardTo.initialize({ title: 'Карта получателя', isReduced: true });
        super.initialize();
        this.fromModel(data);
    }

    public fromModel(data: ICardTransfer) {
        if (!data)
            return;
        super.fromModel(data);
        this.Form.setValue({ Amount: data.amount });
        this.CardFrom.fromData(data.cardFrom);
        this.CardTo.fromData(data.cardTo);
    }

    public toModel(): ICardTransfer {
        return {
            id: Helpers.getGuid(),
            amount: this.Form.value.Amount,
            cardFrom: this.CardFrom.toData(),
            cardTo: this.CardTo.toData(),
            docDate: new Date().toString(),
        };
    }

    protected getControls(): { [key: string]: FormControl } {
        return { Amount: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1)]) };
    }

}