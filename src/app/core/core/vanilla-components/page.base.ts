import { Observable, of } from "rxjs";
import { Component } from "./component.base";

/** Особый вид компонентов - страница. Участвует в рутинге приложения. */
export abstract class Page extends Component {

    /** Инициализация после отрисовки */
    public initializeAfterRender() {
        this.initializeComponents();
    }

    /** Инициализация и отрисовка */
    public initialize(): Observable<void> {
        this.renderTemplate();
        return of(null);
    };

    public getInnerRouterOutletBlock(): string {
        const elem = this.bemBlockElem.querySelector('[router-outlet]');
        return elem ? elem.className : '';
    }

    protected initializeComponents() {
        // extends in children
    }

}