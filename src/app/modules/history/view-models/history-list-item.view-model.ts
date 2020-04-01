import { Helpers } from '../../../core/core/classes/helpers';
import { ICardTransfer } from '../../../core/card-transfer.interface';

export class HistoryListItemViewModel {

    public Id: string;
    public NumberFrom: string;
    public NumberTo: string;
    public Amount: number;
    public FormattedDate: string;

    constructor(data: ICardTransfer) {
        if (!data)
            return;
        this.Id = data.id;
        this.NumberFrom = data.senderCard.number;
        this.NumberTo = data.contragentCard.number;
        this.Amount = data.amount;
        this.FormattedDate = `${Helpers.getFormattedTime(data.docDate)}, ${Helpers.getFormattedDate(data.docDate)}`;
    }

}