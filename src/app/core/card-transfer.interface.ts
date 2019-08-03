import { ICardModel } from 'core-library/core/models/card.model';

/** Перевод с карты на карту */
export interface ICardTransfer {

    /** Идентификатор платежа */
    id: string;
    /** Карта отправителя */
    senderCard: ICardModel;
    /** Карта получателя */
    contragentCard: ICardModel;
    /** Сумма перевода */
    amount: number;
    /** Дата документа о переводе */
    docDate?: string;

}

export interface ICardAddToCollection {
    isSaveSenderCard: boolean;
    isSaveContragentCard: boolean;
}
