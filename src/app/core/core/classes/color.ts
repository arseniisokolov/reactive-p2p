import { Helpers } from "./helpers";

/** Хелперы по работе со цветом */
export class Color {

    /** Текущий цвет */
    public Color: string;
    /** Кодировка цвета */
    public Code: Colors;
    /** Инвертированный цвет */
    public Inverted: string;
    /** Данные по кодировкам цветов */
    public ColorsData = [
        { number: Colors.Hex, regExp: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})(?:[a-f\d])*$/ },
        { number: Colors.Rgb, regExp: /[R][G][B][A]?[(]([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])[)]/i }
    ];

    private _matchedColor: RegExpMatchArray;

    constructor(exampleColor?: string) {
        if (exampleColor)
            this.init(exampleColor);
    }

    /** Выдает случайный цвет */
    public getRandom(): Color {
        const getRandomValue = () => Helpers.getRandomInt(0, 255).toString();
        this.init(`rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`);
        return this;
    }

    /** Конвертирует цвет в конкретную кодировку
     * @param convertCode Кодировка
     */
    public convert(convertCode: Colors): string {
        if (!this._matchedColor)
            return;
        let convertedColor: string;
        if (convertCode === this.Code) {
            convertedColor = this.Color;
            return convertedColor;
        }
        switch (this.Code) {
            case Colors.Hex:
                if (convertCode === Colors.Rgb) {
                    convertedColor = 'rgb(' +
                        parseInt(this._matchedColor[1], 16) + ', ' +
                        parseInt(this._matchedColor[2], 16) + ', ' +
                        parseInt(this._matchedColor[3], 16) + ')';
                }
                break;
            case Colors.Rgb:
                if (convertCode === Colors.Hex) {
                    convertedColor = "#" + ((1 << 24) + (+this._matchedColor[1] << 16)
                        + (+this._matchedColor[2] << 8) + +this._matchedColor[3]).toString(16).slice(1);
                }
                break;
        }
        return convertedColor;
    }

    /** Выдает цвет во всех кодировках */
    public getFull(): string[] {
        const result: string[] = [];
        this.ColorsData.forEach(code => {
            result.push(this.convert(code.number));
        });
        return result;
    }

    private init(color: string): void {
        this.Color = color;
        this.Code = this.matchCode(color);
        const colorCode = this.ColorsData.find(c => c.number === this.Code);
        this._matchedColor = this.Color.match(colorCode ? colorCode.regExp : undefined);
        this.Inverted = this.getInverted();
    }

    /** Выдает инвертированный цвет */
    private getInverted(): string {
        const color: string = this.convert(Colors.Rgb);
        const colorCode = this.ColorsData.find(c => c.number === Colors.Rgb);
        const matchedColor = color.match(colorCode.regExp);
        const result = matchedColor.splice(1).map(part => (255 - +part));
        return 'rgb(' + result[0] + ', ' + result[1] + ', ' + result[2] + ')';
    }

    /** Распознает кодировку цвета */
    private matchCode(color: string): Colors {
        let result: Colors = Colors.Unknown;
        this.ColorsData.forEach(code => {
            const hasCode = color.match(code.regExp);
            if (hasCode && hasCode.length) {
                result = code.number;
            }
        });
        return result;
    }

}

export enum Colors {
    Unknown = 0,
    Hex,
    Rgb,
    Rgba,
    Xyz
}