import { Subject, fromEvent, combineLatest } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { SubscriptionsKiller } from "../classes/subscriptions-killer";

/** 
 * Vanilla компонент приложения
 * Рендерит шаблон на основе state, 
 * предоставляет lifecycle-хуки, 
 * хелперы по работе с БЭМ-блоками и events
 */
export abstract class Component {

    public IsInitialized: boolean;
    public IsRendered: boolean;

    public get State(): ComponentStateType {
        return this.state;
    }
    public get Events(): { [name: string]: Subject<any> } {
        return this._events || {};
    }

    protected abstract getTemplate: (state: any) => string;
    protected state: ComponentStateType;
    protected bemBlockElem: Element;
    protected subsKiller: SubscriptionsKiller;
    private _events: { [name: string]: Subject<any> };

    constructor(state: ComponentStateType) {
        if (!state.bemBlock)
            throw "Component: there's no state";
        this.subsKiller = new SubscriptionsKiller();
        this.state = state;
        this.bemBlockElem = this.getBlock(state.bemBlock);
        this.initLifecycleHooks();
    }

    public replaceState(state: ComponentStateType) {
        this.state = { ...this.state, ...state };
        this.renderTemplate();
    }

    public renderTemplate(): void {
        if (!this.State.bemBlock)
            return;
        const template = this.getTemplate(this.State.templateState);
        if (this.bemBlockElem.innerHTML === template)
            return;
        this.bemBlockElem.innerHTML = template;
        this.onRendered();
    }

    protected onInit() {
        this.IsInitialized = true;
    }

    protected onRendered() {
        this.IsRendered = true;
    }

    protected onDestroy() {
        this.subsKiller.killAllSubscriptions();
    }

    protected initLifecycleHooks() {
        this.onInit();
        fromEvent(window, 'onbeforeunload').pipe(takeUntil(this.subsKiller.Unsubscriber))
            .subscribe(() => {
                this.onDestroy();
            });
        fromEvent(document, 'onRouterTreeRerender')
            .pipe(takeUntil(this.subsKiller.Unsubscriber))
            .subscribe(() => {
                this.onDestroy();
            });
    }

    /** Ищет BEM-блок по всему html приложения */
    protected getBlock(name: string): Element {
        return window.document.getElementsByClassName(name)[0];
    }

    /** Ищет BEM-элемент в пределах текущей страницы */
    protected getElement(name: string): Element {
        return this.bemBlockElem.getElementsByClassName(name)[0];
    }

    protected setEvents(events: { [name: string]: Subject<any> }) {
        this._events = events;
    }

}

export type ComponentStateType = {
    bemBlock: string;
    templateState?: any & {};
    data?: any & {};
}