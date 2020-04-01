
/** Модель банковской карты */
export interface ICardData {

    id: string;
    /** Номер */
    number: string;
    /** Карты принадлежит пользователю */
    isUser: boolean;
    /** Пользовательское название карты */
    alias?: string;
    /** Эмбоссированное имя держателя */
    ownerEmbossName?: string;
    /** Срок действия */
    expireDate?: string;

}