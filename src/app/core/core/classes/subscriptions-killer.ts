import { Subject } from "rxjs";

/** Предоставляет удобный интерфейс для отписывания от подписок RxJS */
export class SubscriptionsKiller {

    public Unsubscriber = new Subject<void>();

    public killAllSubscriptions() {
        this.Unsubscriber.next();
        this.Unsubscriber.complete();
        this.Unsubscriber.unsubscribe();
        this.Unsubscriber = null;
    }

}