import { Counter } from '../classes/counter';

export class MenuListItemViewModel {

    public Title: string;
    public Action: string;
    public Counter: Counter;

    public get IsActive(): boolean {
        return this._isActive;
    }
    public get IsHidden(): boolean {
        return this._isHidden;
    }

    private _isActive: boolean = false;
    private _isHidden: boolean = false;

    constructor(action: string, title: string) {
        if (!action)
            return;
        this.Action = action;
        this.Title = title || action;
        this.Counter = new Counter();
    }

    public setActive(isActive: boolean): void {
        if (this._isActive === isActive)
            return;
        this._isActive = isActive;
    }

    public setVisibility(isVisible: boolean): void {
        this._isHidden = !isVisible;
    }

}