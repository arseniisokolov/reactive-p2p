import { ICardData } from './card.data';
import { CardModel } from './card.base.model';
import { SenderCardModel } from './sender-card.model';
import { ContragentCardModel } from './contragent-card.model';

export abstract class CardCreateStrategy {

    public static createFromData(data: ICardData): CardModel {
        if (!data)
            return null;
        if (data.isUser)
            return new SenderCardModel(data);
        if (!data.isUser)
            return new ContragentCardModel(data);
    }

}