import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormBaseViewModel } from 'core-library/core/view-models/form.base.view-model';
import { CardModel, ICardModel } from 'core-library/core/models/card.model';


const Constants = {
    /** Максимальный возможный срок действия карты, лет (с текущего года) */
    maxDuration: 21,
}

export class CardFormViewModel extends FormBaseViewModel<CardModel> {

    /** Краткая форма карты */
    public IsReducedMode: boolean;
    public Title: string;


    public initialize(config: ICardFormConfig): Observable<void> {
        this.IsReducedMode = config.isReduced;
        this.Title = config.title;
        return super.initialize();
    }


    public fromModel(data: CardModel) {
        if (!data)
            return;
        super.fromModel(data);
        const expNumber = data.getExplodedNumber();
        this.Form.controls.NumberGroup1.setValue(expNumber[0]);
        this.Form.controls.NumberGroup2.setValue(expNumber[1]);
        this.Form.controls.NumberGroup3.setValue(expNumber[2]);
        this.Form.controls.NumberGroup4.setValue(expNumber[3]);
        if (!this.IsReducedMode) {
            const expDate = data.getExpired();
            this.Form.controls.ExpireMonth.setValue(expDate.month);
            this.Form.controls.ExpireYear.setValue(expDate.year);
            this.Form.controls.OwnerEmbossName.setValue(data.OwnerEmbossName);
        }
    }

    public toModel(): CardModel {
        const res: CardModel = new CardModel();
        res.Number = CardModel.implodeNumber([this.Form.value.NumberGroup1, this.Form.value.NumberGroup2, this.Form.value.NumberGroup3, this.Form.value.NumberGroup4]);
        if (!this.IsReducedMode) {
            res.OwnerEmbossName = this.Form.value.OwnerEmbossName.toUpperCase();
            res.ExpireDate = CardModel.calculateExpire(this.Form.value.ExpireMonth, this.Form.value.ExpireYear);
        }
        return res;
    }

    public fromData(data: ICardModel) {
        if (!data)
            return;
        this.fromModel(new CardModel(data));
    }

    public toData(): ICardModel {
        return this.toModel().toData();
    }

    protected getControls(): { [key: string]: FormControl } {
        const formFields = {
            "NumberGroup1": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]),
            "NumberGroup2": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]),
            "NumberGroup3": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]),
            "NumberGroup4": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]),
        };
        if (!this.IsReducedMode)
            return {
                ...formFields,
                ...{
                    "OwnerEmbossName": new FormControl('', [Validators.required]),
                    "ExpireMonth": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"),]),
                    "ExpireYear": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"),])
                }
            };
        return formFields;
    }

    public getValidYears(): number[] {
        let validYears: number[] = [];
        let currentYear: number = new Date().getFullYear();
        let lastYear: number = currentYear + Constants.maxDuration;
        currentYear = Number(String(currentYear).slice(2));
        lastYear = Number(String(lastYear).slice(2));
        for (let resItem = currentYear; resItem <= lastYear; resItem++) {
            validYears.push(resItem)
        }
        return validYears;
    }

}

/** Настройки для формы карты */
export interface ICardFormConfig {

    /** Заголовок формы */
    title?: string;
    /** Краткая форма */
    isReduced?: boolean;

}