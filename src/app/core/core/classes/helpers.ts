/** Коллекция хелперов */
export class Helpers {

    /** Выдает случайный ID */
    public static getGuid() {
        return `f${(~~(Math.random() * 1e8)).toString(16)}`;
    }

    /** Форматирует дату в HH:MM:SS */
    public static getFormattedTime(timestamp: string | Date): string {
        if (!timestamp)
            return '';
        const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp;
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const normalize = (value: number) => value < 10 ? '0' + value : '' + value;
        return `${normalize(hours)}:${normalize(minutes)}:${normalize(seconds)}`;
    }

    /** Форматирует дату в DD.MM.YYYY */
    public static getFormattedDate(timestamp: string | Date): string {
        if (!timestamp)
            return '';
        const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp;
        const year = date.getFullYear();
        let day = date.getDate().toString();
        let month = (date.getMonth() + 1).toString();
        if (day.length === 1) {
            day = '0' + day;
        }
        if (month.length === 1) {
            month = '0' + month;
        }
        return `${day}.${month}.${year}`;
    }

    /** Выдает рандомное число в указанном промежутке (включительно) */
    public static getRandomInt(min: number, max: number): number {
        return parseFloat((min - 0.5 + Math.random() * (max - min + 1)).toFixed(2));
    }

    /** Выдает true с переданной вероятностью
     * @param value вероятность в виде дроби
     */
    public static checkPropability(value: number): boolean {
        if (!value)
            return false;
        return Math.round(Helpers.getRandomInt(1, 1 / value)) === 1;
    }

    /** Проверяет, передано ли число, и переводит в число, если была передана строка. В случае ошибки возвращает undefined */
    public static parseNumber(data: number | string): number {
        if (data === null || data === undefined || isNaN(data as number))
            return undefined;
        if (typeof data === 'number') {
            return data;
        }
        if (typeof data === 'string') {
            const parsed = parseFloat(data);
            return isFinite(parsed) ? parsed : undefined;
        };
    }

    public static stopPropagation(event: Event) {
        if (!event)
            return;
        event.preventDefault();
        event.stopPropagation();
    }

    /** Группирует элементы массива по переданному ключу */
    public static groupBy<T, TKey>(src: T[], fieldFnc: (item: T) => TKey): Array<GroupingType<TKey, T>> {
        const groupedItems: Array<GroupingType<TKey, T>> = [];
        let index = 0;
        while (index <= src.length - 1) {
            let groupCode = fieldFnc(src[index]);
            const grouping: GroupingType<TKey, T> = { Key: groupCode, Values: [] };
            while (!!src[index] && groupCode === fieldFnc(src[index]) && index <= src.length - 1) {
                groupCode = fieldFnc(src[index]);
                grouping.Values.push(src[index]);
                index++;
            }
            if (groupedItems.filter(i => i.Key === grouping.Key).length !== 0)
                groupedItems.map(i => i.Key === grouping.Key ? grouping.Values.map(g => i.Values.push(g)) : i.Values);
            else
                groupedItems.push(grouping);
        }
        return groupedItems;
    }

}


type GroupingType<TKey, TElement> = {
    Key: TKey;
    Values: TElement[];
}
