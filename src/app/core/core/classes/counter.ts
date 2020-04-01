/** Счетчик */
export class Counter {

    private _count: number;

    constructor() {
        this.set(0);
    }

    public plus(count = 1) {
        if (this.isNegative(count))
            this.subtract(count);
        this._count += count;
    }

    public subtract(count = 1) {
        if (this.isPositive(count))
            this.plus(count);
        if (Math.abs(count) > this._count)
            return;
        this._count -= count;
    }

    public set(count: number) {
        if (this.isNegative(count))
            return;
        this.refresh();
        this.plus(count);
    }

    public get(): number {
        return this._count;
    }

    public refresh() {
        this._count = 0;
    }

    private isPositive(count: number): boolean {
        if (typeof count !== 'number')
            return;
        if (count < 0)
            return false;
        return true;
    }

    private isNegative(count: number): boolean {
        if (typeof count !== 'number')
            return;
        if (count > 0)
            return false;
        return true;
    }

}