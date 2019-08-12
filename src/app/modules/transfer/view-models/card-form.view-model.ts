import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormBaseViewModel } from 'core-library/core/view-models/form.base.view-model';
import { CardModel } from 'core-library/core/models/card/card.base.model';
import { SenderCardModel } from 'core-library/core/models/card/sender-card.model';
import { ContragentCardModel } from 'core-library/core/models/card/contragent-card.model';
import { ICardData } from 'core-library/core/models/card/card.data';

const Constants = {
    /** Максимальный возможный срок действия карты, лет (с текущего года) */
    maxDuration: 21,
};

/** Настройки для формы карты */
export type CardFormConfig = {

    /** Заголовок формы */
    title?: string;
    /** Краткая форма */
    type?: 'sender' | 'contragent';

};

/** Состояние формы  */
interface ICardFormState {
    fromData(data: ICardData): void;
    fromModel(data: CardModel): void;
    toModel(): CardModel;
    getControls(): { [key: string]: FormControl };
}

class SenderCardFormState implements ICardFormState {

    constructor(private _form: CardFormViewModel) { }

    public fromModel(data: SenderCardModel) {
        if (!data)
            return;
        const expNumber = data.getExplodedNumber();
        this._form.Form.controls.NumberGroup1.setValue(expNumber[0]);
        this._form.Form.controls.NumberGroup2.setValue(expNumber[1]);
        this._form.Form.controls.NumberGroup3.setValue(expNumber[2]);
        this._form.Form.controls.NumberGroup4.setValue(expNumber[3]);
        const expDate = data.getExpired();
        this._form.Form.controls.ExpireMonth.setValue(expDate.month);
        this._form.Form.controls.ExpireYear.setValue(expDate.year);
        this._form.Form.controls.OwnerEmbossName.setValue(data.OwnerEmbossName);
        if (data.Alias)
            this._form.Form.controls.Alias.setValue(data.Alias);
    }

    public toModel(): CardModel {
        const res: SenderCardModel = new SenderCardModel();
        res.Number = CardModel.implodeNumber([this._form.Form.value.NumberGroup1, this._form.Form.value.NumberGroup2, this._form.Form.value.NumberGroup3, this._form.Form.value.NumberGroup4]);
        res.Alias = this._form.Form.value.Alias;
        res.OwnerEmbossName = this._form.Form.value.OwnerEmbossName.trim().toUpperCase();
        res.ExpireDate = CardModel.calculateExpire(this._form.Form.value.ExpireMonth, this._form.Form.value.ExpireYear);
        return res;
    }

    public getControls(): { [key: string]: FormControl } {
        return {
            "Alias": new FormControl({ value: this._form.Title, disabled: true }),
            "NumberGroup1": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]),
            "NumberGroup2": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]),
            "NumberGroup3": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]),
            "NumberGroup4": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]),
            "OwnerEmbossName": new FormControl('', [Validators.required]),
            "ExpireMonth": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
            "ExpireYear": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
        };
    }

    public fromData(data: ICardData) {
        this.fromModel(new SenderCardModel(data));
    }

}

class ContragentCardFormState implements ICardFormState {

    constructor(private _form: CardFormViewModel) { }

    public fromModel(data: ContragentCardModel) {
        if (!data)
            return;
        const expNumber = data.getExplodedNumber();
        this._form.Form.controls.NumberGroup1.setValue(expNumber[0]);
        this._form.Form.controls.NumberGroup2.setValue(expNumber[1]);
        this._form.Form.controls.NumberGroup3.setValue(expNumber[2]);
        this._form.Form.controls.NumberGroup4.setValue(expNumber[3]);
        if (data.Alias)
            this._form.Form.controls.Alias.setValue(data.Alias);
    }

    public toModel(): CardModel {
        const res: ContragentCardModel = new ContragentCardModel();
        res.Number = CardModel.implodeNumber([this._form.Form.value.NumberGroup1, this._form.Form.value.NumberGroup2, this._form.Form.value.NumberGroup3, this._form.Form.value.NumberGroup4]);
        res.Alias = this._form.Form.value.Alias;
        return res;
    }

    public getControls(): { [key: string]: FormControl } {
        return {
            "Alias": new FormControl({ value: this._form.Title, disabled: true }),
            "NumberGroup1": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]),
            "NumberGroup2": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]),
            "NumberGroup3": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]),
            "NumberGroup4": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]),
        };
    }

    public fromData(data: ICardData) {
        this.fromModel(new ContragentCardModel(data));
    }

}

export class CardFormViewModel extends FormBaseViewModel<CardModel> {

    public Title: string;
    private _state: ICardFormState;


    public initialize(config: CardFormConfig): Observable<void> {
        this._state = this.selectState(config.type);
        this.Title = config.title;
        return super.initialize();
    }


    protected fromModel(data: CardModel) {
        if (!data)
            return;
        super.fromModel(data);
        this._state.fromModel(data);
    }

    public toModel(): CardModel {
        return this._state.toModel();
    }

    public fromData(data: ICardData) {
        if (!data)
            return;
        this._state.fromData(data);
    }

    public toData(): ICardData {
        return this.toModel().toData();
    }

    public getValidYears(): number[] {
        const validYears: number[] = [];
        let currentYear: number = new Date().getFullYear();
        let lastYear: number = currentYear + Constants.maxDuration;
        currentYear = Number(String(currentYear).slice(2));
        lastYear = Number(String(lastYear).slice(2));
        for (let resItem = currentYear; resItem <= lastYear; resItem++) {
            validYears.push(resItem);
        }
        return validYears;
    }

    public allowAliasEditing() {
        const aliasControl = this.Form.controls.Alias;
        aliasControl.setValidators([Validators.required]);
        aliasControl.enable();
        aliasControl.setValue('');
        aliasControl.updateValueAndValidity();
    }

    public disallowAliasEditing() {
        const aliasControl = this.Form.controls.Alias;
        aliasControl.setValidators([]);
        aliasControl.setValue(this.Title);
        aliasControl.disable();
        aliasControl.updateValueAndValidity();
    }

    protected getControls(): { [key: string]: FormControl } {
        return this._state.getControls();
    }

    private selectState(type: 'sender' | 'contragent'): ICardFormState {
        switch (type) {
            case 'sender': return new SenderCardFormState(this);
            case 'contragent': return new ContragentCardFormState(this);
        }
    }

}