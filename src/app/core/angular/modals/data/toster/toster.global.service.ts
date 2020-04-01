import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { TosterViewModel } from "../../view-models/toster.view-model";
import { ITosterInitializeData } from "./toster-initialize-data";

@Injectable({
    providedIn: 'root'
})
export class TosterGlobalService {

    public OnShowModal = new Subject<void>();
    public get Model(): TosterViewModel {
        return this._model;
    }

    private _model: TosterViewModel;

    public showModal(data: ITosterInitializeData) {
        if (!data)
            return;
        this.initializeModel(data);
        this.OnShowModal.next();
        this.refresh();
    }

    public refresh() {
        this._model = null;
    }

    private initializeModel(data: ITosterInitializeData) {
        this._model = new TosterViewModel();
        this._model.initialize(data);
    }

}