import { AbstractControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

export abstract class FormBaseViewModel<T> {

    public Form: FormGroup;

    protected dataSnapshot: T;

    public initialize(config?: any): Observable<void> {
        this.Form = new FormGroup(this.getControls());
        this.handleInitState();
        this.onInit();
        return of(null);
    }

    public abstract toModel(): T;

    protected abstract getControls(): { [key: string]: AbstractControl };

    protected fromModel(data: T) {
        this.dataSnapshot = data;
    }

    protected onInit?() { }

    protected handleInitState?() { }

}