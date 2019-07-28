import { ICardModel } from 'core-library/core/models/card.model';

/** Перевод с карты на карту */
export interface ICardTransfer {

    /** Идентификатор платежа */
    id: string;
    /** Карта отправителя */
    cardFrom: ICardModel;
    /** Карта получателя */
    cardTo: ICardModel;
    /** Сумма перевода */
    amount: number;
    /** Дата документа о переводе */
    docDate?: string;

}
