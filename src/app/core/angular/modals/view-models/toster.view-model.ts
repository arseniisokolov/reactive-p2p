import { TosterTypes } from "../data/toster/toster-types.enum";
import { ITosterInitializeData } from "../data/toster/toster-initialize-data";

const Constants = {
    DefaultType: TosterTypes.Info,
    DefaultTitles: {
        [TosterTypes.Info]: 'Новое сообщение',
        [TosterTypes.Success]: 'Операция прошла успешно',
        [TosterTypes.Warning]: 'Обратите внимание',
        [TosterTypes.Error]: 'Операция не удалась',
    }
};

export class TosterViewModel {

    public IsInitialized: boolean;
    public Title: string;
    public Message: string;
    public TimeToShow: number;
    /** Для вывода на вью */
    public TypeCssClass: string;

    private _type: TosterTypes;

    public initialize(data: ITosterInitializeData) {
        this._type = data.type || Constants.DefaultType;
        this.Title = data.title || Constants.DefaultTitles[this._type] || '';
        this.TypeCssClass = this.getCssClass();
        this.Message = data.message;
        if (data.time)
            this.TimeToShow = data.time;
        this.IsInitialized = true;
    }

    private getCssClass(): string {
        switch (this._type) {
            case TosterTypes.Info: return 'type-info';
            case TosterTypes.Success: return 'type-good';
            case TosterTypes.Warning: return 'type-warning';
            case TosterTypes.Error: return 'type-error';
            default: return TosterTypes.Info;
        }
    }

}