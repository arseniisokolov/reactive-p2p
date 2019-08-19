import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormBaseViewModel } from 'core-library/core/view-models/form.base.view-model';
import { Helpers } from 'core-library/core/classes/helpers';
import { ICardTransfer, ICardAddToCollection } from '../../../core/card-transfer.interface';
import { CardFormViewModel } from './card-form.view-model';
import { ICardData } from 'core-library/core/models/card/card.data';

export type TransferInitStateType = {
    savedTransfer?: ICardTransfer;
    senderCard?: ICardData;
    contragentCard?: ICardData;
};

export class TransferFormViewModel extends FormBaseViewModel<ICardTransfer> {

    public SenderCard: CardFormViewModel;
    public ContragentCard: CardFormViewModel;

    private _initState: TransferInitStateType;

    public get IsValid(): boolean {
        return this.Form.valid && this.SenderCard.Form.valid && this.ContragentCard.Form.valid;
    }

    public initialize(initState?: TransferInitStateType): Observable<void> {
        this._initState = initState;
        Object.freeze(this._initState);
        this.SenderCard = new CardFormViewModel();
        this.ContragentCard = new CardFormViewModel();
        this.SenderCard.initialize({ title: 'Карта плательщика', type: 'sender' });
        this.ContragentCard.initialize({ title: 'Карта получателя', type: 'contragent' });
        return super.initialize();
    }

    protected fromModel(data: ICardTransfer) {
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
            isSaveSender: this.Form.value.AcceptSaveSenderCard,
            isSaveContragent: this.Form.value.AcceptSaveContragentCard,
        };
    }

    protected getControls(): { [key: string]: FormControl } {
        return {
            Amount: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1)]),
            AcceptSaveSenderCard: new FormControl(),
            AcceptSaveContragentCard: new FormControl(),
        };
    }

    protected handleInitState() {
        if (!this._initState)
            return;
        this.fromModel(this._initState.savedTransfer);
        this.SenderCard.fromData(this._initState.senderCard);
        this.ContragentCard.fromData(this._initState.contragentCard);
    }

    protected onInit() {
        this.Form.controls.AcceptSaveSenderCard.valueChanges.subscribe((value: boolean) => {
            value ? this.SenderCard.allowAliasEditing() : this.SenderCard.disallowAliasEditing();
        });
        this.Form.controls.AcceptSaveContragentCard.valueChanges.subscribe((value: boolean) => {
            value ? this.ContragentCard.allowAliasEditing() : this.ContragentCard.disallowAliasEditing();
        });
    }

}